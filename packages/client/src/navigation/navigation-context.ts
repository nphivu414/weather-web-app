import * as React from 'react';

export type NavigationState = {
  title: string;
  goBack: () => void;
  goNext: () => void;
  setNavigationTitle: (title: string) => void;
};

export const initialNavigationState: NavigationState = {
  title: '',
  goBack: () => {},
  goNext: () => {},
  setNavigationTitle: () => {},
};

const NavigationContext = React.createContext(initialNavigationState);

export default NavigationContext;
