import type { NextPage } from 'next';
import Image from 'next/image';

import Link from 'next/link';
import { archivePosts } from 'archive/rocket';

const Rocket: NextPage = () => {
  return (
    <div className=" mx-auto block xl:container">
      <h1 className="my-20  text-black">React TIPS Archive ❤️</h1>
      {archivePosts.map((el, idx) => (
        <div className="mb-5 rounded-lg border border-gray-200 p-6" key={idx}>
          {el.text && <h2 className="mb-4 text-xl last:mb-0">{el.text}</h2>}
          {el.url && (
            <Link href={el.url}>
              <a className="text-cyan-500 underline" target="_blank">
                {el.url}
              </a>
            </Link>
          )}
          {el.code && (
            <pre className="text-orange-500">
              <code>{el.code}</code>
            </pre>
          )}
          {el.img && (
            <div className="relative block h-64">
              <Image src={`/images/archive/${el.img}`} alt="" className="text-left" layout="fill" objectFit="contain" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rocket;
