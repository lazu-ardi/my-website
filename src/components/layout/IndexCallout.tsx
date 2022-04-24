import Image from 'next/image';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import Profile from '/public/assets/profile.jpg';

const IndexCallout = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left justify-center">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 lg:text-5xl">
            Hey, I am
          </h1>
          <h1 className="text-6xl font-bold text-emerald-500 dark:text-cyan-400 lg:text-8xl">
            Lazuardi.
          </h1>
          <div className="mt-6 text-slate-900 dark:text-slate-50">
            <p className="mb-4 text-lg">
              I am a Frontend developer based in Surabaya that specializes in
              building websites <br /> and app with{' '}
              <a
                href="https://jamstack.org/"
                className="underline decoration-emerald-400 hover:text-emerald-600 hover:dark:text-cyan-400 dark:decoration-cyan-400 "
              >
                Jamstack
              </a>{' '}
              architecture especially{' '}
              <a
                href="https://reactjs.org/"
                className="underline decoration-emerald-400 hover:text-emerald-600 hover:dark:text-cyan-400 dark:decoration-cyan-400 "
              >
                React
              </a>{' '}
              with{' '}
              <a
                href="https://nextjs.org/"
                className="underline decoration-emerald-400 hover:text-emerald-600 hover:dark:text-cyan-400 dark:decoration-cyan-400 "
              >
                Next.js
              </a>{' '}
              framework.
              <br />
              You can contact me via:
            </p>
          </div>

          <div className="flex space-x-4 pt-2 mx-auto justify-center">
            <button className="rounded-full bg-emerald-600 hover:bg-emerald-800 dark:bg-blue-600 py-2 px-4 font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:dark:bg-blue-700">
              <div className="flex justify-between space-x-2">
                <MdAlternateEmail className="self-center" />
                <a href="mailto:lazuardi_imani@pm.me">Email</a>
              </div>
            </button>

            <button className="rounded-full bg-emerald-600 hover:bg-emerald-800 dark:bg-blue-600 py-2 px-4 font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:dark:bg-blue-700">
              <div className="flex justify-between  space-x-2">
                <FaTwitter className="self-center" />
                <a href="https://twitter.com/lazu_rd">Twitter</a>
              </div>
            </button>
          </div>
        </div>

        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={Profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default IndexCallout;
