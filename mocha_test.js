//mochaでテストするための単純な関数
//引数を10倍にして返すだけ

'use strict'

function testFunction(input) {
  const output = input * 10;
  return output;
};

module.exports = {
  testFunction: testFunction
};
