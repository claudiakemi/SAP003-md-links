# Markdown Links

## Índice

* [1. Introdução](#1-introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Como usar](#3-como-usar)

***

## 1. Introdução

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc), e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que muitas vezes estão
quebrados, ou que já não são válidos e isso prejudica muito o valor da
informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

## 2. Resumo do projeto

Este projeto se baseia em uma ferramenta de linha de comando (CLI) e sua biblioteca (library) em JavaScript.
Essa biblioteca faz uma busca de links e seus respectivos textos em arquivos `Markdown`.

## 3. Como usar

* A biblioteca e script executável (ferramenta de linha de comando - CLI) foram implementados em JavaScript para serem executadas com Node.JS.

* O módulo é instalável via `npm install -g claudiakemi/SAP003-md-links`.
  Ele pode ser chamado tanto por linha de comando, quanto importado com `require` para ser usado em seu código.

### JavaScript API

O módulo pode ser importado em outros scripts Node.js e oferece a
seguinte interface:

#### `mdLinks(path)`

##### Argumento

* `path`: Rota absoluta ou relativa ao arquivo.

##### Valor de retorno

A função retorna uma promessa (`Promise`) que resolve um array (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto dentro do markdown.

### CLI (Command Line Interface - Interface de Linha de Comando)

O executável da nossa aplicação pode ser executado da seguinte maneira,
através do terminal:

`md-links <path-to-file>`

Por exemplo:

```sh
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```
