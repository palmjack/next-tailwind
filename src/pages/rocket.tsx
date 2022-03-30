import type { NextPage } from 'next';
import Image from 'next/image';

import Link from 'next/link';
import { archivePosts } from 'archive/rocket';

const Rocket: NextPage = () => (
  <div className="flex items-center justify-center bg-gray-200">
    <div className="container mx-auto block  px-5">
      <h1 className="my-20 font-bold  text-black">React TIPS Archive ❤️</h1>
      {archivePosts.map((el, idx) => (
        <div className="mb-5 rounded-lg bg-white p-10 shadow-md" key={idx}>
          {el.text && (
            <>
              <p className="font-semibold">Treść</p>
              <p className="mb-4 text-base last:mb-0 first-letter:capitalize">{el.text}</p>
            </>
          )}
          {el.url && (
            <>
              {el.url?.includes('youtube') ? (
                <>
                  <iframe
                    className="aspect-video h-auto w-full max-w-xl rounded-lg"
                    width="560"
                    height="315"
                    src={el.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </>
              ) : (
                <>
                  <p className="font-semibold">Link</p>
                  <Link href={el.url}>
                    <a className="break-words text-cyan-500 underline" target="_blank">
                      {el.url}
                    </a>
                  </Link>
                </>
              )}
            </>
          )}
          {el.code && (
            <pre className="whitespace-pre-line break-words rounded-lg bg-gray-50 p-6 text-gray-500">{el.code}</pre>
          )}
          {el.img && (
            <div className="relative block h-64">
              <Image src={`/images/archive/${el.img}`} alt="" className="text-left" layout="fill" objectFit="contain" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Rocket;
