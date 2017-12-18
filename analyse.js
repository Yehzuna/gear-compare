const _ = require('lodash');
const character = require('./cache/character.json');

const stats = {
    5: 'primary',
    7: 'endurance',
    32: 'critical',
    36: 'haste',
    40: 'versatility',
    49: 'mastery',
    71: 'primary',
    73: 'primary',
};

//let stats = {};
Object.keys(character.items).forEach((location) => {
    let item = character.items[location];
    if (item.stats) {
        console.log(item.id,location);
        //console.log(item.stats);

        //console.log(item.stats);

        let test = _.reduce(item.stats, (obj, value, key) => {
            //console.log(obj, value, key);
            obj[stats[value.stat]] = value.amount;
            return obj;
        }, {});
        console.log(test);


        item.stats.forEach((stat) => {
            //console.log(stat);
            //stats[stat.stat][] =  stat.amount;
        });
    }
});

//console.log(stats);