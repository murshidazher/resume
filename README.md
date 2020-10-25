# resume

A simple tool to automate my resume generation.

## Tools

- [dayjs time format](https://day.js.org/docs/en/parse/string-format) - a `2kb` datetime library.
- [PhantomJS](https://phantomjs.org/quick-start.html) - a headless web browser scriptable with JavaScript.
- [Hogan.js](https://twitter.github.io/hogan.js/) - a JS templating engine developed at Twitter

## Installation, configure and usage

### Preconditions

First of all you have to install `npm` and `node.js` to your box - note that `NodeJS 6+` is required. See following links to help you with installation:

- [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
- [Node Version Manager](https://github.com/creationix/nvm#installation)

### Installation

First of all you have to install `npm` and `node.js` to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

Note that `node.js 6.x` is required.

```bash
$ git clone https://github.com/murshidazher/resume.git
$ cd resume

# install the project's dependencies
$ npm install

# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```

## Usage

### Command line

See help

```bash
$ npm run convert
# OR
$ node bin/convert
```

Creating example file

```bash
$ npm run convert -- src/examples/index.html out/index.pdf --data '{"name": "Your Name", "dateformat": "MMM YYYY", "content": "Lorem ipsum dolor."}'
# OR
$ node bin/convert src/examples/index.html out/index.pdf --data '{"name": "Your Name", "dateformat": "MMM YYYY", "content": "Lorem ipsum dolor."}'
```

### Web UI

Start server

```bash
$ npm start
```

Then open your `http://localhost:3000/` within your favorite browser.

### Handlers

Handlers are way to make embedded data-conversions to templates.

### Templating

Can be embedded to template HTML:

```
<img src="{{ barcode }}"/>
```

### API

## Author

Murshid Azher

## License

[The MIT License (MIT)](LICENSE)

Copyright (c) 2020 Murshid Azher.
