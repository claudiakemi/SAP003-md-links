#!/usr/bin/env node
const mdLinks = require('./lib/index.js');
const path = process.argv[2];
mdLinks(path)
.then(secondArray => secondArray.forEach((elements) => {
  console.log(elements.href.substring(0,50), elements.text)}))
  .catch((error) => console.log(error))
