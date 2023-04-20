import 'twin.macro';

import React from 'react';

const AppWrapper = ({ children }) => {
  return <div tw='max-w-app mx-auto flex items-center py-2 lg:px-0 px-2'>{children}</div>;
};

export { AppWrapper };
