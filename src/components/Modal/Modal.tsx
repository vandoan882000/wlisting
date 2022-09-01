import { Devider } from 'components/Divider/Devider';
import { FC } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  onBack: () => void;
  title: string;
  visible: boolean;
  navigation?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ children, onBack, title, visible, navigation }) => {
  return (
    <>
      {visible &&
        createPortal(
          <div className="w-100% h-100% fixed top-0 left-0 z-100 bg-light overflow-auto">
            <div className="flex justify-between w-100% py-22 px-30">
              <div className="flex w-fit cursor-pointer" onClick={onBack}>
                <span className="text-30 text-gray8 mr-20 cursor-pointer">
                  <i className="fal fa-angle-left"></i>
                </span>
                <div>
                  <div className="text-gray6 text-14 font-normal">Back to</div>
                  <div className="text-gray8 text-16 font-medium">{title}</div>
                </div>
              </div>
              {navigation ? navigation : ''}
            </div>
            <Devider />
            <div>{children}</div>
          </div>,
          document.body,
        )}
    </>
  );
};
