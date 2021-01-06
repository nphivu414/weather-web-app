import * as React from 'react';

export type DIRECTION = 'LEFT' | 'RIGHT';

export type GoNextParams = {
  isLastPage: boolean;
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  directionRef: React.MutableRefObject<DIRECTION>;
};

export type GoBackParams = {
  isFirstPage: boolean;
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  directionRef: React.MutableRefObject<DIRECTION>;
};

export const goNext = (params: GoNextParams) => {
  const { isLastPage, directionRef, pageIndex, setPageIndex } = params;
  if (isLastPage) {
    return;
  }
  directionRef.current = 'RIGHT';
  setPageIndex(pageIndex + 1);
};

export const goBack = (params: GoBackParams) => {
  const { isFirstPage, directionRef, pageIndex, setPageIndex } = params;
  if (isFirstPage) {
    return;
  }
  directionRef.current = 'LEFT';
  setPageIndex(pageIndex - 1);
};
