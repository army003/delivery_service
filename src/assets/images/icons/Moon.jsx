import React from 'react';

export const Moon = ({ theme }) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5242 2.07469C11.7967 1.84552 11.1751 2.64051 11.5609 3.29885C12.1701 4.33718 12.4984 5.50885 12.4984 6.68385C12.4984 10.3655 9.51341 13.3505 5.83174 13.3505C5.13849 13.3505 4.43733 13.238 3.80049 13.038C3.07308 12.8088 2.42524 13.6038 2.81091 14.2622C4.29216 16.7888 6.99941 18.3505 9.99841 18.3505C14.6009 18.3505 18.3317 14.6197 18.3317 10.0172C18.3317 6.34968 15.9642 3.15635 12.5242 2.07469Z'
        fill={theme === 'dark' ? 'white' : '#8e8e93'}
      />
    </svg>
  );
};