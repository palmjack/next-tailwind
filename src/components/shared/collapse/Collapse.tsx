import type { FC } from 'react';
import { Disclosure } from '@headlessui/react';

import ChevronIcon from 'icons/chevron.svg';

interface IProps {
  text: string;
  content: string;
  defaultOpen?: boolean;
}

const Collapse: FC<IProps> = ({ text, content, defaultOpen }) => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button className="text-white-900 flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <span>{text}</span>
              <ChevronIcon className={`${open ? 'rotate-180 transform' : ''} text-white-500 h-5 w-5`} />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{content}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Collapse;
