const fs = require('fs');

function mdLinks() {
  return new Promise((resolve, reject) => {
    const mdText = './README.md';

  fs.readFile(mdText, 'utf8', (err, data) => {
    if (err) {
    reject (err)
    } else {
      const globalRegExpression = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
      const regExpression = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/;
      const myArray = data.match(globalRegExpression);

      myArray.forEach((element) => {
        const textLink = element.match(regExpression);
        const secondArray = textLink.map({text:textLink[1], href:textLink[2]})

        //return secondArray
        //console.log(textLink[1], textLink[2])
      })
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
