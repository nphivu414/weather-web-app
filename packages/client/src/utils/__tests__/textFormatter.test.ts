import { tempFormat } from 'utils';

describe('tempFormat', () => {
  it('should run correctly', () => {
    const output = tempFormat(29.591);
    expect(output).toEqual('30°');
  });
});
