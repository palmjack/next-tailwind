import { forwardRef, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useClickAway } from 'react-use';

import type { TDropdownProps, TDropdownMenuProps, TDropdownMenuItemProps } from 'components/shared/dropdown/types';
import ChevronIcon from 'icons/chevron.svg';

const DropdownMenu = forwardRef<HTMLDivElement, PropsWithChildren<TDropdownMenuProps>>(
  ({ children, id, show, closeFn }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        className={classNames(
          'invisible absolute top-full left-0 z-10 mt-1 w-44 list-none divide-y divide-gray-100 rounded bg-white text-base opacity-0 shadow transition-opacity',
          { '!visible !opacity-100': show }
        )}
        onClick={closeFn}
      >
        <ul aria-labelledby={`${id}-button`} role="menu">
          {children}
        </ul>
      </div>
    );
  }
);

const DropdownMenuItem: FC<TDropdownMenuItemProps> = ({ type, href, text, className, onClick }) => {
  const baseItemClasses = 'w-full text-center block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100';

  switch (type) {
    case 'link':
      return (
        <li role="menuitem">
          <Link href={href}>
            <a className={classNames(baseItemClasses, className)} onClick={onClick}>
              {text}
            </a>
          </Link>
        </li>
      );
    case 'button':
      return (
        <li role="menuitem">
          <button className={classNames(baseItemClasses, className)} onClick={onClick}>
            {text}
          </button>
        </li>
      );
  }
};

const Dropdown: FC<TDropdownProps> = ({ id, text, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleClickAway = (): void => {
    if (!isOpen) return;
    setIsOpen(false);
  };

  // close dropdown on outside click
  useClickAway(ref, handleClickAway);

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        id={`${id}-button`}
        className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        {text}
        <ChevronIcon className={classNames('ml-2 h-4 w-4 transition-transform', { 'rotate-180': isOpen })} />
      </button>
      <DropdownMenu id={id} show={isOpen} closeFn={toggleDropdown}>
        {menuItems.map((item, idx) => (
          <DropdownMenuItem key={idx} {...item} />
        ))}
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
