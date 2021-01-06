import * as React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import styles from './AppBar.module.css';

export type AppBarProps = {
  title: string;
  hasBackButton?: boolean;
  onBack?: () => void;
};

export const handleOnBackButtonClick = (onBack?: () => void) => {
  return () => {
    onBack && onBack();
  };
};

export const AppBar: React.FC<AppBarProps> = ({ title, hasBackButton, onBack }) => {
  return (
    <div className="container bg-primary p-2">
      <div className={[styles.appBar, 'row align-items-center'].join(' ')}>
        <div className="col-3">
          {hasBackButton && (
            <button type="button" className="btn btn-link btn-sm" onClick={handleOnBackButtonClick(onBack)}>
              <BiChevronLeft size="20px" className="align-bottom text-white" />
              <span className="text-white">Back</span>
            </button>
          )}
        </div>
        <div className="col-6 text-center">
          <p className="text-white fw-bold text-truncate m-0">{title}</p>
        </div>
        <div className="col-3" />
      </div>
    </div>
  );
};

export default AppBar;
