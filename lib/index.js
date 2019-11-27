function mdLinks() {
  const fs = require('fs');
  const mdText = './README.md';

  fs.readFile(mdText, 'utf8', (err, data) => {
  const regExpression = /\[[^\s].*\(http[s]?:\/\/[^\)].*\)/gm;
  const myArray = data.match(regExpression);
  console.log(myArray);
  if (err) throw err;
});

}

mdLinks()

module.exports = mdLinks;

//http[s]?:\/\/([^\/\n]*)
//\(http[s]?:\/\/[^\)].*\)
//\[[^\s].*\(http[s]?:\/\/[^\)].*\)
