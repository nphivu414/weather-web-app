import * as React from 'react';
import Home from 'pages/Home';
import NavigationContext, { DIRECTION, goBack, goNext } from 'navigation';
import { animated, useTransition } from 'react-spring';
import { handlePageNavigationTransitions } from 'utils';
import LocationDetail from 'pages/LocationDetail';
import './app.css';

export const LOCATION_LIST_PAGE_INDEX = 0;

type PageProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedLocationId: number | null;
  setSelectedLocationId: React.Dispatch<React.SetStateAction<number | null>>;
  style?: React.CSSProperties;
};

const pages = [
  (props: PageProps) => (
    <animated.div className="page" style={{ ...props.style }}>
      <Home
        searchTerm={props.searchTerm}
        setSearchTerm={props.setSearchTerm}
        setSelectedLocationId={props.setSelectedLocationId}
      />
    </animated.div>
  ),
  (props: PageProps) => (
    <animated.div className="page" style={{ ...props.style }}>
      <LocationDetail id={props.selectedLocationId} />
    </animated.div>
  ),
];

export const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [pageIndex, setPageIndex] = React.useState(LOCATION_LIST_PAGE_INDEX);
  const [navigationTitle, setNavigationTitle] = React.useState('');
  const [selectedLocationId, setSelectedLocationId] = React.useState<number | null>(null);
  const directionRef = React.useRef<DIRECTION>('RIGHT');

  const transitions = useTransition(
    pageIndex,
    (pageIndex) => pageIndex,
    handlePageNavigationTransitions(directionRef.current),
  );

  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === pages.length - 1;

  const handleGoBack = React.useCallback(() => {
    goBack({ directionRef, isFirstPage, pageIndex, setPageIndex });
  }, [isFirstPage, pageIndex]);

  const handleGoNext = React.useCallback(() => {
    goNext({ directionRef, isLastPage, pageIndex, setPageIndex });
  }, [isLastPage, pageIndex]);

  const handleSetNavigationTitle = React.useCallback((title: string) => {
    setNavigationTitle(title);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        goBack: handleGoBack,
        goNext: handleGoNext,
        setNavigationTitle: handleSetNavigationTitle,
        title: navigationTitle,
      }}
    >
      <div className="app">
        {transitions.map(({ item, props }) => {
          const Page = pages[item];
          return (
            <Page
              key={item}
              style={props}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedLocationId={selectedLocationId}
              setSelectedLocationId={setSelectedLocationId}
            />
          );
        })}
      </div>
    </NavigationContext.Provider>
  );
};

export default App;
