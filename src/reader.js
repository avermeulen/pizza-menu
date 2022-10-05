let Pizza_data = require("./data_processed");


let p = new Pizza_data()

console.log(p.y.load(p.fs.readFileSync("./data.yml","utf8")))