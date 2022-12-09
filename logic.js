import {fs} from "fs";
import { parse } from "csv-parse";

let adjectives = [];
let types = [];
let classes = [];

const adjectiveObject = document.getElementById('adjective');
const typeObject = document.getElementById('type');
const classObject = document.getElementById('class');
const buttonObject = document.getElementById('button');

const parseData = async (collection, location) => {
    fs.createReadStream(location)
.pipe(
    parse({
        delimiter: ",",
        columns: false,
        ltrim: false
    })
)
.on("data", function(row) {
    collection.push(row)
})
.on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("parsed csv data:");
    console.log(collection);
  });
}

parseData(adjectives, "./data/adjectives.csv");
parseData(types, "./data/types.csv");
parseData(classes, "./data/classes.csv");


const changeText = (objectArray, dataArray) => {
    let i = 0;
    objectArray.forEach((object) => {
        let word = dataArray[i][Math.floor(Math.random() * dataArray[i].length)]
        object.innerHTML = word;
        i++;
    })
}

buttonObject.addEventListener("click", changeText([adjectiveObject, typeObject, classObject], [adjectives, types, classes]));