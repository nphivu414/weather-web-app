import { goNext, GoNextParams } from 'navigation';
import { goBack, GoBackParams } from 'navigation/navigation-handler';

describe('navigation-handler', () => {
  describe('goNext', () => {
    const params: GoNextParams = {
      isLastPage: false,
      pageIndex: 1,
      setPageIndex: jest.fn(),
      directionRef: {
        current: 'LEFT',
      },
    };
    it('should run correctly', () => {
      goNext(params);
      expect(params.directionRef.current).toEqual('RIGHT');
      expect(params.setPageIndex).toBeCalledWith(params.pageIndex + 1);
    });
    it('should run correctly when isLastPage = true', () => {
      goNext({
        ...params,
        isLastPage: true,
      });
      expect(params.directionRef.current).toEqual(params.directionRef.current);
      expect(params.setPageIndex).not.toBeCalled();
    });
  });

  describe('goBack', () => {
    const params: GoBackParams = {
      isFirstPage: false,
      pageIndex: 1,
      setPageIndex: jest.fn(),
      directionRef: {
        current: 'LEFT',
      },
    };
    it('should run correctly', () => {
      goBack(params);
      expect(params.directionRef.current).toEqual('LEFT');
      expect(params.setPageIndex).toBeCalledWith(params.pageIndex - 1);
    });
    it('should run correctly when isLastPage = true', () => {
      goBack({
        ...params,
        isFirstPage: true,
      });
      expect(params.directionRef.current).toEqual(params.directionRef.current);
      expect(params.setPageIndex).not.toBeCalled();
    });
  });
});
