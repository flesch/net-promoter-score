# @flesch/net-promoter-score

📈 Calculate a “Net Promoter Score” from an array of integers.

## Install

```shell
$ npm install --save @flesch/net-promoter-score
```

## Usage

```js
const nps = require('@flesch/net-promoter-score');

const score = nps([10, 9, 10, 8, 7, 5, 6, 9, 10]);

console.log(score); // => 33
```

