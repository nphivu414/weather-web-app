import * as React from 'react';

export type SpinnerProps = {
  isSpinning?: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ isSpinning = true }) => {
  return (
    <>
      {isSpinning && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Spinner;
