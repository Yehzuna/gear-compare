const _ = require('lodash');
const character = require('./cache/character.json');

let stats = {};
Object.keys(character.items).forEach((location) => {
    let item = character.items[location];
    if (item.stats) {
        //console.log(location);
        //console.log(item.stats);

        console.log(item.stats);

        let test = _.map(item.stats, () => {

        });
        console.log(test);


        item.stats.forEach((stat) => {
            //console.log(stat);
            //stats[stat.stat][] =  stat.amount;
        });
    }
});

//console.log(stats);