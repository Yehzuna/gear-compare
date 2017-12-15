const fs = require('fs');
const request = require('request');
const config = require('./config');

const params = {
    key: config.apiKey,
    locale: 'en_US',
    region: 'us',
    realm: 'rm',
    character: 'ch',
};

function character({key, locale, region, realm, character}) {
    return `https://${region}.api.battle.net/wow/character/${realm}/${character}?fields=items&locale=${locale}&apikey=${key}`;
}

const options = {
    url: character(params),
};

console.log(options);

request(options, (error, response, data) => {
    if (error) throw error;

    fs.writeFile('cache/character.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});