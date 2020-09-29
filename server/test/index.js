const request = require('supertest');
const { server, cache } = require('../index.js');
const chai = require('chai');
expect = chai.expect;

describe('index.js', () => {
    beforeEach(() => {
        cache.flushAll();
    })
    describe('GET /all', () => {
        it('should return an array of countries', async () => {
            const response = await request(server).get('/all');
            expect(response.type).equal('application/json');
            expect(response.status).equal(200);
            expect(Array.isArray(response.body)).equal(true);
        })
        it('should cache the responses', async () => {
            const precached = cache.get('countries');
            expect(precached).to.be.undefined;
            const response = await request(server).get('/all');
            expect(Array.isArray(response.body)).equal(true);
            const cached = cache.get('countries');
            expect(cached).to.deep.equal(response.body);
        })
    })
    describe('GET /country/:country', () => {
        it('should return the country queried', async () => {
            const response = await request(server).get('/country/Denmark');
            expect(response.body).to.include({Country: 'Denmark'})
        })
        it('should add the country data to cache', async () => {
            const precached = cache.get('France');
            expect(precached).to.be.undefined;
            const res = await request(server).get('/country/France');
            expect(res.body).to.include({Country: 'France'})
            const cachedResponse = cache.get('France');
            expect(cachedResponse).to.include({Country: 'France'});

        })
    })
    describe('GET /local', () => {
        it('should return United States if on localhost', async () => {
            const res = await request(server).get('/local');
            expect(res.body).to.include({Country: 'United States'})
        });
        it('should query a different ip address if an IP address is set', async () => {
            const res = await request(server).get('/local').set('x-real-ip', '52.95.128.181');
            expect(res.body).to.include({Country: "Australia"})
        })
    })
})