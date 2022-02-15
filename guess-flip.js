import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

var argv = minimist(process.argv.slice(2))
argv["call"]

var err = false;
var errMessage = console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");

if (argv.call == undefined || (argv.call != "heads" && argv.call != "tails")) {
    errMessage;
    err = true;
}
if (err == false) { console.log(flipACoin(argv.call)); }