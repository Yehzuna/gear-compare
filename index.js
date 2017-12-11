const request = require('request');

const params = {
    key: 'xxx',
    locale: 'en_US',
    region: 'us',
    realm: 'realm',
    character: 'character',
};

function character(...params) {
    return 'https://us.api.battle.net/wow/character/test-realm/Peratryn?fields=items&locale=en_US&apikey='
}

const options = {
    url: character(params),
};

request(options, (error, response, html) => {
    if (error) throw error;

    fs.writeFile('json/realms.json', JSON.stringify(realms), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
