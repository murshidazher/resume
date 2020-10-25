'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const htmlToPdf = require('./../../index');
const dayjs = require('dayjs');

/**
 * Default route to show a demo form.
 */
router.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Generate Resume',
      serverAddress: req.protocol + '://' + req.get('host') + req.originalUrl,
      defaultFilename: `murshid-azher-cv-${dayjs().format("MMM-YY").toString().toLowerCase()}.pdf`,
      defaultSource: fs.readFileSync(path.resolve(__dirname, '..', '..', 'examples', 'index.html')),
      defaultTemplateData: fs.readFileSync(path.resolve(__dirname, '..', '..', 'examples', 'simple-data.json')),
      defaultOptions: '{}',
      partials: {
        "bold": () => {
          return function (text, render) {
            return "<b>" + render(text) + "</b>"
          }
        }
      }
    }
  );
});

/**
 * POST route to home, this will generate actual PDF according to user input
 */
router.post('/', (req, res, next) => {
  const source = req.body.source || '<html><body><p>No source</p></body>';
  const data = req.body.data ? JSON.parse(req.body.data) : {};
  const options = req.body.options ? JSON.parse(req.body.options) : {};

  htmlToPdf
    .createBuffer(source, data, options)
    .then(buffer => res.end(buffer, 'binary'))
    .catch(error => next(error));
});

module.exports = router;
