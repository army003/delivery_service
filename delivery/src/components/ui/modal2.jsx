import 'twin.macro';

import ReactModal from 'react-modal';

import CloseIcon from '@/assets/images/icons/CloseIcon';

ReactModal.setAppElement('#root');

export const Modal2 = ({ children, ...props }) => {
  return (
    <ReactModal
      {...props}
      overlayClassName='fixed inset-0 flex min-f-screen bg-modal backdrop-blur-sm p-5'
      className='bg-primary rounded-2xl outline-none overflow-auto p-5 m-auto relative flex flex-col'
    >
      <div tw='absolute right-5 rounded-xl'>
        <CloseIcon onClick={props.onRequestClose} />
      </div>
      {children}
    </ReactModal>
  );
};
