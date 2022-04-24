import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiPolywork } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="lg:mt-18 mt-12 py-6 sm:py-12 sm:pb-10">
      <div className="mx-auto max-w-4xl px-4 text-gray-800 dark:text-white">
        <div className="dark:border-white-300 mb-2 border-t-2 border-emerald-400 dark:border-slate-50 pb-2"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p className="pb-2 text-sm sm:text-center lg:text-left">
            MIT License © 2022 Lazuardi Imani. Version 3.
            <br />
            This work is licensed under a{' '}
            <a
              rel="license"
              className="font-bold italic no-underline decoration-emerald-400 hover:text-emerald-600 hover:underline"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              CC BY-NC-SA 4.0
            </a>
            .
            <br />
            Made using{' '}
            <a
              href="https://nextjs.org/"
              className="font-bold italic no-underline decoration-emerald-400 hover:text-emerald-600 hover:underline"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com/"
              className="font-bold italic no-underline decoration-emerald-400 hover:text-emerald-600 hover:underline"
            >
              {' '}
              Tailwind CSS.{' '}
            </a>
            Hosted on{' '}
            <a
              href="https://vercel.com/"
              className="font-bold italic no-underline decoration-emerald-400 hover:text-emerald-600 hover:underline"
            >
              {' '}
              Vercel.
            </a>
          </p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="https://twitter.com/lazu_rd"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/lazu-ardi/"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/lazu-ardi"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.polywork.com/lazu_ardi"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <SiPolywork className="text-2xl" />
            </a>
            <a
              href="mailto:lazuardi_imani@pm.me"
              className={
                'hover:text-emerald-600 hover:dark:text-cyan-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              }
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
