import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Lazuardi
            </span>
          </a>
        </Link>
        <div className="flex flex-row gap-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Project</a>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
