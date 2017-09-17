const chai = require('chai');
const expect = chai.expect;

describe('some simple tests', function () {
  it('test equal', function () {
    // 测试相等
    expect(4 + 5).to.equal(9);
  });
  it('test not equal', () => {
    expect(4 + 5).to.not.equal(9);
  })
  it('test to be true', () => {
    expect(true).to.be.true;
  })
  it('test object equal', () => {
    expect({'name': 'viking'}).to.not.equal({'name': 'viking'});
    expect({'name': 'viking'}).to.deep.equal({'name': 'viking'})
  })
});