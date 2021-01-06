import * as React from 'react';
import { useQuery } from 'react-query';
import AppBar from 'components/AppBar';
import LocationSearchField from './LocationSearchField';
import { searchLocations } from 'services';
import { useDebounce } from 'hooks';
import LocationList from './LocationList';
import NavigationContext from 'navigation';
import { Place, ServiceError } from 'types';
import Spinner from 'components/Spinner';

export type HomeProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSelectedLocationId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const onLocationSearchFieldChange = (setSearchTerm: React.Dispatch<React.SetStateAction<string>>) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
};

export const onLocationItemClick = (
  setNavigationTitle: (title: string) => void,
  setSelectedLocationId: React.Dispatch<React.SetStateAction<number | null>>,
  goNext: () => void,
) => {
  return (location: Place) => {
    setNavigationTitle(location.title);
    setSelectedLocationId(location.woeid);
    goNext();
  };
};

export const Home: React.FC<HomeProps> = ({ searchTerm, setSearchTerm, setSelectedLocationId }) => {
  const { goNext, setNavigationTitle } = React.useContext(NavigationContext);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const { data, isLoading, isFetched, error, isError } = useQuery<Place[] | null, ServiceError>(
    ['locations', debouncedSearchTerm],
    searchLocations({
      query: debouncedSearchTerm,
    }),
    {
      enabled: debouncedSearchTerm !== '',
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div>
      <AppBar title="Weather App" />
      <div className="p-3 bg-white">
        <LocationSearchField
          autoFocus
          value={searchTerm}
          placeholder="Enter city name"
          onChange={onLocationSearchFieldChange(setSearchTerm)}
        />
        {isError && !data && (
          <div className="alert alert-danger text-center" role="alert">
            <label>{error?.message}</label>
          </div>
        )}
        {isLoading ? (
          <Spinner isSpinning={isLoading} />
        ) : (
          <LocationList
            locations={data}
            isFetched={isFetched}
            onItemClick={onLocationItemClick(setNavigationTitle, setSelectedLocationId, goNext)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
