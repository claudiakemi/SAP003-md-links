#!/usr/bin/env node
//este arquivo deve chamar a função mdLinks que será executada pela linha de comando
const mdLinks = require('./lib/index.js');
console.log('oi')

mdLinks()
  .then((result) => console.log(result))
  .catch(console.error);
