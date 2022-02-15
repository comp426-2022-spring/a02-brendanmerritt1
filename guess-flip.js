import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

var argv = minimist(process.argv.slice(2))
argv['call']

var err = false;

if (argv.call == undefined) {
    console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
    err = true;
}
else if (argv.call != "heads") {
    if (argv.call != "tails") {
        console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
        err = true;
    }
}

if (err == false) { console.log(flipACoin(argv.call)); }