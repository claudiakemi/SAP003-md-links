const fs = require('fs');

function mdLinks(path) {
  return new Promise((resolve, reject) => {

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
    reject (err)
    } else {
      const globalRegExpression = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
      const regExpression = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/;
      const myArray = data.match(globalRegExpression);
      const secondArray = [];

      myArray.forEach((element) => {
        const textLink = element.match(regExpression);
        secondArray.push({text:textLink[1], href:textLink[2]})
      })
      console.log(secondArray)
    // const regex = /([^\s].*)(http[s]?:\/\/[^\)].*\))/g;
    // const arrayString = myArray.toString();
    // const textLink = arrayString.match(regex);
    //separar href e text [{href:'', text:''}]

    //console.log(myArray);
    // const result = [{text: 'textLink[0]', href: 'textLink[1]'}];
    // resolve(result)
    //
      }
    });
  })
}

mdLinks()

module.exports = mdLinks;

//(http[s]?:\/\/[^\)].*)?\)
