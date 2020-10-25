'use strict';
let dayjs = require('dayjs');

class DurationTranslator {
  constructor() {
    this.pattern = "";
  }

  translate(input) {
    return new Promise((resolve, reject) => {
      Promise
        .all(
          this.pattern = input["dateformat"],
          this._search(input)
        )
        .then(
          () => resolve(input),
          (error) => reject(error)
        );
    })
  }

  _search(input) {
    Object.keys(input).map((key) => {
      if (!!input[key]) {
        if (typeof input[key] === "object") {
          this._search(input[key]);   
        } else {
          if (dayjs(input[key]).isValid()) {
            return this._convert(input[key], this.pattern).then(result => input[key] = result);
          }   
        }
      }
    })
  }

  _convert(text, format) {
    const code = text.replace('[translate:barcode]', '');

    return new Promise((resolve, reject) => {
      try {
        resolve(dayjs(code).format(format));
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new DurationTranslator();
