const express = require('express');
const fetch = require('node-fetch');
const NodeCache = require('node-cache');
const extractCountryData = require('./extractCountryData.js')
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const server = express();
const cache = new NodeCache

server.use(express.json());
server.use(cors({origin: 'http://localhost:3000'}));
server.get('/all', (req, res) => {
    fetch('https://raw.githubusercontent.com/zelima/big-mac-index/master/data/big-mac-index.csv')
    .then(res => res.text())
    .then(body => {
        let cachedConverted = cache.get('countries');
        if (cachedConverted === undefined) {
        let converted = extractCountryData(body)
        cache.set('countries', converted)
        converted.forEach(country => {
            cache.set(country.Country, country)
        })
        res.status(200).json(converted)
    }
    })
})
server.get('/country/:country', (req, res) => {
    const { country } = req.params;
    let cachedCountry = cache.get(country);
    if (cachedCountry === undefined) {
        fetch('http://localhost:5000/all').then(() => {
            cachedCountry = cache.get(country)
            res.status(200).json( cachedCountry)
        })
    } else {
        res.status(200).json(cachedCountry)
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.exports = { server, cache }