#!/usr/bin/env node
//este arquivo deve chamar a função mdLinks que será executada pela linha de comando
const mdLinks = require('./lib/index.js');
const path = process.argv[2];
mdLinks(path)
  .then((secondArray) => console.log(secondArray))
  .catch((error) => console.log(error))
