import * as React from 'react';
import { BiSearch } from 'react-icons/bi';

export type LocationSearchFieldProps = {
  hasSearchIcon?: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const LocationSearchField: React.FC<LocationSearchFieldProps> = ({ hasSearchIcon = true, ...rest }) => {
  return (
    <>
      <div className="input-group mb-3">
        {hasSearchIcon && (
          <span className="input-group-text" id="basic-addon1">
            <BiSearch />
          </span>
        )}
        <input type="text" className="form-control" {...rest} />
      </div>
    </>
  );
};

export default LocationSearchField;
