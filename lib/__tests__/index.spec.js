const mdLinks = require("../index.js");

const arrayTest = [ { text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown' },
{ text: 'Node.js', href: 'https://nodejs.org/' },
{ text: 'Chrome', href: 'https://developers.google.com/v8/' },
{ text: 'Jest', href: 'https://jestjs.io/' } ];

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
});

test('returns array with objects href and text', done => {
  return mdLinks ('text_test.md').then((response) => {
    expect(response).toEqual('arrayTest')
    done();
  })
});

test('Invalid path', done => {
  return mdLinks ('').catch((error) => {
    expect(error).toEqual('Error: cannot read file')
    done();
  })
});
