import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

var argv = minimist(process.argv.slice(2))
argv['number']
if (argv.number == undefined) {
    argv.number = 1
}
var array = coinFlips(argv.number)
console.log(array)
console.log(countFlips(array))