import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../layout/ThemeSwitch';

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-zinc-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <span className="text-slate-900 self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-50">
              Lazuardi
            </span>
          </a>
        </Link>
        <div className="flex flex-row gap-4">
          <Link href="/">
            <a className="text-slate-900 self-center text-lg font-semibold whitespace-nowrap dark:text-slate-50">
              Home
            </a>
          </Link>
          <Link href="/About">
            <a className="text-slate-900 self-center text-lg font-semibold whitespace-nowrap dark:text-slate-50">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="text-slate-900 self-center text-lg font-semibold whitespace-nowrap dark:text-slate-50">
              Project
            </a>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;