const random_name = require('random-indian-name');

let names = [];
for (let i = 0; i < 180; i++) {
    names.push(random_name());
}
console.log(names);