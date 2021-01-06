import { BiChevronRight } from 'react-icons/bi';
import * as React from 'react';
import { Place } from 'types';

export type LocationListProps = {
  locations?: Place[] | null;
  isFetched?: boolean;
  onItemClick?: (location: Place) => void;
};

export const handleOnItemClick = (location: Place, onItemClick?: (location: Place) => void) => {
  return () => {
    onItemClick && onItemClick(location);
  };
};

const LocationList: React.FC<LocationListProps> = ({ locations, isFetched, onItemClick }) => {
  if (!locations || locations.length === 0) {
    if (isFetched) {
      return <p className="text-center text-muted empty">No data</p>;
    }
    return <p className="text-center text-muted hint">Start typing to search for cities</p>;
  }

  return (
    <div className="list-group">
      {locations.map((item) => {
        const { woeid, title } = item;
        return (
          <button
            key={woeid}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            onClick={handleOnItemClick(item, onItemClick)}
          >
            {`${title}`}
            <BiChevronRight size="20px" />
          </button>
        );
      })}
    </div>
  );
};

export default LocationList;
