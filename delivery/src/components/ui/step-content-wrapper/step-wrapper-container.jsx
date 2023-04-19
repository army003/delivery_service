import 'twin.macro';

import React from 'react';
function StepWrapperContainer({ children }) {
  return (
    <div tw='bg-secondary py-[48px] sm:px-0 px-2 sm:rounded-2xl flex flex-col justify-center items-center gap-5'>
      {children}
    </div>
  );
}

export default StepWrapperContainer;
