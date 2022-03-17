import { Fragment, useState } from 'react';
import type { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';

import CustomButton from 'components/shared/CustomButton';
import type { TCustomButtonVariant } from 'components/shared/CustomButton';

interface IProps {
  buttonText: string;
  footerClassName?: string;
  closeButtonText?: string;
  closeButtonVariant?: TCustomButtonVariant;
  onClose?: () => void;
}

const Modal: FC<IProps> = ({
  children,
  buttonText,
  footerClassName,
  closeButtonText = 'close',
  closeButtonVariant = 'primary',
  onClose
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (): void => {
    setIsOpen(false);
    onClose?.();
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="inset-0 flex items-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          {buttonText}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-30" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {children}
                <div className={classNames(footerClassName)}>
                  <CustomButton variant={closeButtonVariant} text={closeButtonText} onClick={closeModal} />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
