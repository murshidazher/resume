<img src="https://raw.githubusercontent.com/murshidazher/resume/master/src/server/public/favicon-lg.png" width="75px">

# [resume](https://github.com/murshidazher/resume)

![GitHub package.json version](https://img.shields.io/github/package-json/v/murshidazher/resume?style=flat-square)
![GitHub](https://img.shields.io/github/license/murshidazher/resume?style=flat-square)
![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat-square)

> A simple tool to automate resume generation.

- A tool to automate my resume generation process using `JSON` and `hojan` templating engine.

## Table of Contents

- [resume](#resume)
  - [Table of Contents](#table-of-contents)
  - [Tools](#tools)
  - [Installing / Getting started](#installing--getting-started)
    - [Initial Configuration](#initial-configuration)
    - [Developing](#developing)
  - [Usage](#usage)
    - [Command line](#command-line)
    - [Web UI](#web-ui)
    - [Handlers](#handlers)
    - [Templating](#templating)
  - [License](#license)

## Tools

- :hourglass: [dayjs time format](https://day.js.org/docs/en/parse/string-format) - a `2kb` datetime library.
- :ghost: [PhantomJS](https://phantomjs.org/quick-start.html) - a headless web browser scriptable with JavaScript.
- :zap: [Hogan.js](https://twitter.github.io/hogan.js/) - a JS templating engine developed at Twitter

## Installing / Getting started

### Initial Configuration

First of all you have to install `npm` and `node.js` to your box - note that `NodeJS 6+` is required. See following links to help you with installation:

- [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
- [Node Version Manager](https://github.com/creationix/nvm#installation)

### Developing

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

```html
<img src="{{ title }}" />
```

## License

[MIT](https://github.com/murshidazher/murshid/blob/resume/LICENSE) © Murshid Azher.
