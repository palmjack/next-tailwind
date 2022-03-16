import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import CustomButton from 'components/shared/customButton/CustomButton';
import Dropdown from 'components/shared/dropdown/Dropdown';

const Home: NextPage = () => {
  return (
    <div className="mx-auto xl:container">
      <p className="text-cyan-500">Hello Tailwind ❤️</p>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#bada55] p-[50px] [color:black] hover:bg-[#123456] hover:[color:white]">
        <p className="text-[1.5rem]">
          I`m 1.5rem <span className="ml-[15px] text-[41px]">and I`m 41px with 15px margin left</span>
        </p>
        <p className="text-sm">it`s created with arbitrary properties, something like inline CSS</p>
      </div>
      <ul className="mt-3 w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        <li className="relative w-full rounded-t-lg border-b border-gray-200 py-2 px-4 dark:border-gray-600">
          <Link href="/forms">
            <a className="text-blue-600 after:absolute after:inset-0 hover:text-blue-900">Go to /forms</a>
          </Link>
        </li>
      </ul>
      <div className="mt-3 rounded-lg border border-gray-200 p-3">
        <div className="mb-2 last:mb-0">
          <h2 className="mb-2 text-2xl font-bold">Custom button</h2>
          <CustomButton variant="primary" text="primary" />
          <CustomButton variant="outline" text="outline" />
        </div>
        <div className="mb-2 last:mb-0">
          <h2 className="mb-2 text-2xl font-bold">Dropdown component</h2>
          <Dropdown
            id="test"
            text="Dropdown btn text"
            menuItems={[
              { type: 'link', href: '/forms', text: 'forms redirect' },
              { type: 'button', text: 'console.log button', onClick: () => console.log('clicked') }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
