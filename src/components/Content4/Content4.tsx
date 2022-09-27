import React, { FC } from 'react';

interface Content4Props {
  text: string;
}
export const Content4: FC<Content4Props> = ({ children, text }) => {
  return (
    <div className="pt-80">
      <div className="flex flex-col items-center font-medium text-32 text-gray9 text-center relative">
        {text}
        <svg width="60px" height="9px" viewBox="0 0 60 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="Listing-Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Listing/TitleLarge" transform="translate(-3.000000, -47.000000)" stroke="#DBDADE" strokeWidth="2">
              <g id="Path-3" transform="translate(0.000000, 45.000000)">
                <polyline id="Path-2" points="4 9 9.8 4 15.6 9 21.4 4 27.2 9 33 4 38.8 9 44.6 4 50.4 9 56.2 4 62 9"></polyline>
              </g>
            </g>
          </g>
        </svg>
      </div>
      {children}
    </div>
  );
};
