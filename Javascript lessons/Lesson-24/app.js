// !Node Package Manager
// JS Modules
// ? 1. Built-in JS Modules
// ? 2. Local JS Modules
// ? 3. Community JS Modules

// !Built-in JS Modules

// let a = 3.345678
// console.log(Math.floor(a));

// !Local JS Modules
// * 1. CommonJS

// !CommonJS Import
// const fs = require("fs"); //file system
// fs.writeFile("./readme.md", "#CommonJS file system", "utf-8", (err) => {
//   console.log(err);
// });

// fs.readFile("./index.html", "utf-8", (err, data) => {
//   try {
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// });

// const { reqem: dcghbs, metn } = require("./index.mjs");
// console.log(dcghbs, metn);

// ! Import ES6
// * 2. ES6 (import)

// ?Export default
// import * as useDatas from "./index.mjs";
// console.log(useDatas);

// ?Export
import { number as reqem, string } from "./index.js";
console.log(reqem);

// !Community Module
// const { hiMom } = require("hi-mom");

// console.log(hiMom("ana", "az"));
