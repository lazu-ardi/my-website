import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../layout/ThemeSwitch';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 lg:static">
      <nav className="bg-slate-50 px-2 sm:px-4 py-2.5 dark:bg-zinc-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <span className="text-slate-900 self-center text-2xl font-semibold whitespace-nowrap hover:text-emerald-400 hover:dark:text-cyan-400 dark:text-slate-50">
                Lazuardi
              </span>
            </a>
          </Link>
          <div className="flex flex-row gap-4">
            {/* <Link href="/">
            <a className="text-slate-900 self-center text-lg font-semibold whitespace-nowrap hover:text-emerald-400 hover:dark:text-cyan-400 dark:text-slate-50">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="text-slate-900 self-center text-lg font-semibold whitespace-nowrap hover:text-emerald-400 hover:dark:text-cyan-400 dark:text-slate-50">
              Project
            </a>
          </Link> */}
            <Link href="https://drive.google.com/file/d/164ypBN4i-wGsVzM2Jpf5aTJJw4JQ2sWg/view?usp=sharing">
              <a className="text-slate-900 self-center text-lg font-semibold whitespace-nowrap hover:text-emerald-400 hover:dark:text-cyan-400 dark:text-slate-50">
                Resume
              </a>
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
