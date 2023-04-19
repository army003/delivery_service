import * as React from 'react';

function PhoneIcon(props) {
  return (
    <svg width={32} height={32} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.235 3.906c-2.25 0-5.25 3-5.25 5.25 0 2.9 3 8.25 6 11.25l1.5 1.5c3 3 8.35 6 11.249 6 2.25 0 5.25-3 5.25-5.25s-3-5.25-5.25-5.25c-.75 0-3.463 1.552-3.75 1.5-2.392-.432-5.5-3.617-6-6-.069-.332 1.5-3 1.5-3.75 0-2.25-3-5.25-5.249-5.25z'
        fill='#72BF44'
      />
    </svg>
  );
}

export default PhoneIcon;
