import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiPolywork } from 'react-icons/si';
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
            <p className="mb-4 text-lg lg:text-left">
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
            </p>
          </div>

          <div className="flex space-x-8 pt-2 mx-auto justify-center lg:justify-start">
            <a
              href="https://twitter.com/lazu_rd"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://github.com/lazu-ardi"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/lazu-ardi/"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://www.polywork.com/lazu_ardi"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <SiPolywork className="text-3xl" />
            </a>
            <a
              href="mailto:lazuardi_imani@pm.me"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="text-3xl" />
            </a>
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
