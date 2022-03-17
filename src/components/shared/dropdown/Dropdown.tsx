import { Fragment } from 'react';
import type { ReactElement } from 'react';
import type { FC } from 'react';
import { Menu as HeadlessDropdown, Transition } from '@headlessui/react';
import classNames from 'classnames';

interface IProps {
  text: string;
  children: ReactElement | ReactElement[];
  buttonClassName?: string;
  menuClassName?: string;
}

const Dropdown: FC<IProps> = ({ children, text, buttonClassName, menuClassName }) => {
  // TODO: empty menu placeholder
  // TODO: make sure that children has only DropdownItem components
  return (
    <div className="inline-flex w-56">
      <HeadlessDropdown as="div" className="relative inline-block text-left">
        <div>
          <HeadlessDropdown.Button
            className={classNames(
              'inline-flex w-full justify-center rounded-md bg-black bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              buttonClassName
            )}
          >
            {text}
          </HeadlessDropdown.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <HeadlessDropdown.Items
            className={classNames(
              'absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
              menuClassName
            )}
          >
            {children}
          </HeadlessDropdown.Items>
        </Transition>
      </HeadlessDropdown>
    </div>
  );
};

export default Dropdown;
