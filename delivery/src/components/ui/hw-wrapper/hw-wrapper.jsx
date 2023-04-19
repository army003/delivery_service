import 'twin.macro';

import React from 'react';
import tw from 'twin.macro';

const styles = {
  wrapper: twStyle => [tw`lg:w-3/4 lg:p-5 lg:mt-10 lg:p-0`, twStyle]
};

export const HWwrapper = ({ children, twStyle }) => {
  return <div css={styles.wrapper(twStyle)}>{children}</div>;
};
