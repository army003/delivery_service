import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children, modalRoot }) => {
  const body = document.getElementsByTagName('body')[0];
  const rootRef = useRef(document.createElement('div'));

  useEffect(() => {
    rootRef.current.className = modalRoot;
    body.appendChild(rootRef.current);

    return () => body.removeChild(rootRef.current);
  }, [modalRoot, children]);

  return ReactDOM.createPortal(children, rootRef.current);
};

export default ModalPortal;
