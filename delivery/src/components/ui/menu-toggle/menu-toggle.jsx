import 'twin.macro';

import { motion } from 'framer-motion';
import React from 'react';

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='2'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  />
);

const MenuToggle = ({ toggle }) => {
  return (
    <button
      onClick={toggle}
      tw='absolute top-[1.08rem] left-[0.94rem] w-8 h-8 cursor-pointer outline-none border-0 select-none bg-transparent z-20'
    >
      <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
        />
      </svg>
    </button>
  );
};

export { MenuToggle };
