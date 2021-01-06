import { renderHook } from '@testing-library/react-hooks';
import { useDebounce } from 'hooks';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('should run correctly', () => {
    const mockValue = 'test';
    const mockDelayTime = 1000;
    const { result } = renderHook(() => useDebounce(mockValue, mockDelayTime));
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), mockDelayTime);
    expect(result.current).toBe(mockValue);
  });
});
