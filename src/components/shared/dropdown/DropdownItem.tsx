import type { FC } from 'react';
import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';

type TCommonProps = {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

type TDropdownItemProps = TCommonProps &
  (
    | {
        as: 'link';
        href: string;
      }
    | {
        as: 'button';
        href?: never;
      }
  );

const DropdownItem: FC<TDropdownItemProps> = ({ as, className, label, href, disabled, onClick }) => {
  const elementClasses = 'group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm';

  switch (as) {
    case 'link':
      return (
        <Menu.Item>
          {({ active }) => (
            <Link href={href}>
              <a
                onClick={onClick}
                className={classNames(elementClasses, className, {
                  'text-gray-900': active,
                  'text-gray-700': !active
                })}
              >
                {label}
              </a>
            </Link>
          )}
        </Menu.Item>
      );
    case 'button':
      return (
        <Menu.Item>
          {({ active }) => (
            <button
              disabled={disabled}
              onClick={onClick}
              className={classNames(elementClasses, className, {
                'text-gray-900': active,
                'text-gray-700': !active
              })}
            >
              {label}
            </button>
          )}
        </Menu.Item>
      );
  }
};

export default DropdownItem;
