import 'twin.macro';

import React from 'react';

const calculateWidth = (fullValue, currentValue) => `${Math.ceil((currentValue / fullValue) * 100)}%`;

export default function ProgressBar({ fullValue, currentValue }) {
  return (
    <div tw='relative'>
      <div tw='w-full h-1 lg:h-2 rounded-md bg-red-100'></div>
      <div
        tw={'h-1 lg:h-2'}
        css={{
          backgroundColor: '#72BF44',
          width: calculateWidth(fullValue, currentValue),
          borderRadius: '6px',
          position: 'absolute',
          top: '0'
        }}
      ></div>
    </div>
  );
}
