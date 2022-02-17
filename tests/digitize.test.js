const { digitize } = require('../src');

describe('digitize', () => {
    it('return an array of the individual digits in order', () => {
      expect(digitize(8675309)).toStrictEqual([8,6,7,5,3,0,9])
    })
});