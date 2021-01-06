import { handlePageNavigationTransitions } from 'utils';

describe('handlePageNavigationTransitions', () => {
  it('should run correctly for right direction', () => {
    const output = handlePageNavigationTransitions('RIGHT');
    expect(output.initial).toEqual({ opacity: 1 });
    expect(output.from()).toEqual({ opacity: 1, transform: 'translate3d(100%,0,0)' });
    expect(output.enter()).toEqual({ opacity: 1, transform: 'translate3d(0%,0,0)' });
    expect(output.leave()).toEqual({ opacity: 0, transform: 'translate3d(-40%,0,0)' });
    expect(output.unique).toBeTruthy();
  });

  it('should run correctly for left direction', () => {
    const output = handlePageNavigationTransitions('LEFT');
    expect(output.initial).toEqual({ opacity: 1 });
    expect(output.from()).toEqual({ opacity: 0, transform: 'translate3d(-80%,0,0)' });
    expect(output.enter()).toEqual({ opacity: 1, transform: 'translate3d(0%,0,0)' });
    expect(output.leave()).toEqual({ opacity: 0, transform: 'translate3d(120%,0,0)' });
    expect(output.unique).toBeTruthy();
  });
});
