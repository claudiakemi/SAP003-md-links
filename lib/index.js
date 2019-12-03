function mdLinks(path) {
  const fs = require('fs');
  const globalRegExp = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
  const regExp = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/;
  const firstArray = [];
  const secondArray = [];

  return new Promise((resolve, reject) => {
    const path = process.argv[2];
    fs.readFile(path, 'utf8', (err, data) => {
      if (!path) {
        reject ('Path not found')
      } else {
        firstArray.push(data)
        const mdText = firstArray.join();
        const myArray = mdText.match(globalRegExp);
        console.log(myArray)
        myArray.forEach((element) => {
          const textLink = element.match(regExp);
          secondArray.push({text:textLink[1], href:textLink[2]})
        })
        resolve(secondArray)
      }
    });
  })
}

mdLinks()

module.exports = mdLinks;
