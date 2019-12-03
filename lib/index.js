const fs = require('fs');

function mdLinks(path) {
  return new Promise((resolve, reject) => {
    const path = process.argv[2];
    fs.readFile(path, 'utf8', (err, data) => {
      console.log(data)
      if (path == '') {
        reject ('Error: cannot read file')
      } else {
        const globalRegExpression = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
        const regExpression = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/;
        const myArray = data.match(globalRegExpression);
        const secondArray = [];

        myArray.forEach((element) => {
          const textLink = element.match(regExpression);
          secondArray.push({text:textLink[1], href:textLink[2]})
        })
        resolve(secondArray)
      }
    });
  })
}

mdLinks()

module.exports = mdLinks;
