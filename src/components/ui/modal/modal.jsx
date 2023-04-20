/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import 'twin.macro';

import React, { useContext } from 'react';
import tw from 'twin.macro';

import CloseIcon from '@/assets/images/icons/CloseIcon';
import ShowIf from '@/components/other/show-if';
import ShowSwitch from '@/components/other/show-switch';
import ModalPortal from '@/components/ui/modal/portal';
import { ThemeContext } from '@/contexts/theme-context';

const Modal = ({
  children,
  isOpen,
  showOverlay = true,
  title,
  closeElem,
  footer,
  onClose = () => {},
  rootId = 'modal-root'
}) => {
  const closeHandler = () => onClose();
  const { theme } = useContext(ThemeContext);

  return (
    <ModalPortal modalRoot={rootId}>
      <ShowIf condition={isOpen}>
        <div tw={'fixed w-full h-full inset-0 flex items-center justify-center bg-overlay'}>
          <div tw={'flex lg:w-[560px] rounded-xl flex-col bg-primary'}>
            <ShowIf condition={showOverlay}>
              <div onClick={closeHandler} />
            </ShowIf>

            <div>
              <div tw={'flex flex-1 items-center justify-between p-5 bg-secondary rounded-t-xl mb-2.5'}>
                <ShowIf condition={!!title} wrapElem={{ elem: <h4 />, twStyle: tw`text-base` }}>
                  <>{title}</>
                </ShowIf>

                <div tw={'text-xl font-bold'} onClick={closeHandler}>
                  <ShowSwitch conditions={[!!closeElem, closeElem === false]}>
                    <>{closeElem}</>
                    <></>
                    <CloseIcon />
                  </ShowSwitch>
                </div>
              </div>

              <div>{children}</div>

              <ShowIf condition={!!footer} wrapElem={{ elem: <div /> }}>
                <>{footer}</>
              </ShowIf>
            </div>
          </div>
        </div>
      </ShowIf>
    </ModalPortal>
  );
};

export default Modal;
