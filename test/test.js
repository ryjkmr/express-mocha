//---------------------------
// mochaテストのテスト
// 　起動コマンド
//  node_modules/.bin/mocha
//---------------------------

'use strict';
const assert = require('assert');//関数のテストモジュール
const request = require('supertest');//Express Routerのテストモジュール
const app = require('../app');//テストしたいRouterがrequireされてるappを読み込み
const mt = require('../mocha_test');//テストしたい関数の入ってるプログラムを読み込み

//関数のテスト
describe('#testFunction()', () => {

  before(() => {
    console.log('テスト実施前にやりたい事');
  });
  after(() => {
    console.log('テスト実施後にやりたいこと');
  });


  it('正常な計算ができる', () => {
    assert.equal(mt.testFunction(10), 100);
    console.log(mt.testFunction(10));
    assert.equal(mt.testFunction(5), 50);

  });
});

//Routerのテスト
describe('Root Test', () => {

  before(() => {
    console.log('テスト実施前にやりたい事');
  });
  after(() => {
    console.log('テスト実施後にやりたいこと');
  });



  it('トップページにExpressが表示されるか', (done) => {
    request(app)
      .get('/')
      .expect(/Express/)
      .expect(200, done);
  });

});