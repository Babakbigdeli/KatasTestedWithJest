const { decodeMorse } = require('../src');

describe('decodeMorse', () => {
    it('decodes the Morse alphabet', () => {
      expect(decodeMorse('.... . .-.. .-.. ---  .-- --- .-. .-.. -..')).toBe('hello world')
    })
});