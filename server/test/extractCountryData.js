const extractCountryData = require('../extractCountryData.js')
const data = require('../data/countries.js')
const chai = require('chai');
expect = chai.expect;

describe('extractCountryData', () => {
    it('should return an array of countries', () => {
        expect(Array.isArray(extractCountryData(data))).equal(true);
    })
    it('should include the headers as keys on each object', () => {
        const countries = extractCountryData(data);
        expect(countries[0]).to.have.all.keys('Country', 'Date', 'Local price', 'Dollar ex', 'Dollar price', 'Dollar PPP', 'Dollar valuation');
    })
})