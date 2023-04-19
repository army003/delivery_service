import 'twin.macro';

import React from 'react';
function Coin({ currency }) {
  return (
    <span tw='w-[32px] h-[32px] text-green-secondary border-2 border-green border-solid flex items-center justify-center rounded-full text-s24'>
      {currency}
    </span>
  );
}

export default Coin;
