// import * as fs from 'fs'; // or 
//import { fs } from 'node:fs';
import { loadData } from './load-data.js';
// import data from '../timeline.json';

//let fileContent = fs.readFileSync("../timeline.json", "utf8");
//let myParse = JSON.parse(fileContent);


console.log(loadData());

let Points = [];

for (let r = 0; r < myParse.length; r++){
    Points.push(myParse[r])

}
console.log("Points: ");
console.log(Points);
console.log(data);


