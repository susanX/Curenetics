import React from "react";
const Phase = () => {
  // adds a random number for phase
  return (
    <div className="card-row">
      <div>
        <svg
          aria-labelledby="phase"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <title id="phase" lang="en">
            Trial Phase:
          </title>
          <path d="M32.49 15.51C30.14 13.17 27.07 12 24 12v12l-8.49 8.49c4.69 4.69 12.28 4.69 16.97 0 4.69-4.69 4.69-12.29.01-16.98zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.96 20-20c0-11.05-8.95-20-20-20zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
        </svg>
      </div>
      <div>
        <span className="small-heading">Trial Phase:</span>
        <span className="missing-data">Data Missing From API</span>
        {/* {Math.floor(Math.random() * Math.floor(3) + 1)} */}
      </div>
    </div>
  );
};
export default Phase;
