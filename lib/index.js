function mdLinks() {
  const fs = require('fs');
  const regExpression = /\[[^\s].*\(http[s]?:\/\/[^\)].*\)/;
  const mdText = './README.md';

  fs.readFile(mdText, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
  const myArray = mdText.match(regExpression);
  console.log(myArray);
}

mdLinks()

module.exports = mdLinks;

//http[s]?:\/\/([^\/\n]*)
//\(http[s]?:\/\/[^\)].*\)
//\[[^\s].*\(http[s]?:\/\/[^\)].*\)
