const { reverseWords } = require('../src');

describe('reverseWords', () => {
    it('returns a string same length as input with each word reversed', () => {
      expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
    })
});