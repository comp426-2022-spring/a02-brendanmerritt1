import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

var argv = minimist(process.argv.slice(2))
argv['call']

if (argv.call == undefined) {
    console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
    throw new Error()
}
if (argv.call != "heads") {
    if (argv.call != "tails") {
        console.error("Error: wrong input.\nUsage: node guess-flip --call=[heads|tails]")
        throw new Error()
    }
}

console.log(flipACoin(argv.call))