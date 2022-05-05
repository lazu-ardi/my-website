import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import Course from '/public/assets/course-landing-page.png';
import Gallery from '/public/assets/image-gallery.png';
import Pokedex from '/public/assets/pokedex.png';

const IndexProjects = () => {
  return (
    <div className="container mx-auto px-4 py-4 mt-48">
      <div className="px-4 py-4 mb-4">
        <h1 className="text-4xl text-center font-bold text-emerald-600 dark:text-cyan-400 lg:text-5xl">
          Things I built
        </h1>
        <p className="text-lg text-center pt-4 ">
          Here are some of my recent project that i have worked on, feel free to
          check them out.
        </p>
      </div>

      <div className="container mx-auto flex gap-6 px-4 flex-col sm:px-28 sm:flex-col sm:items-center lg:justify-center lg:flex-row">
        <div className="max-w-sm rounded-lg border border-gray-400 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="https://course-landingpage.vercel.app/">
            <Image className="rounded-t-lg" src={Course} alt="Landing Page" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course Landing Page
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Dynamic landing page using Next.js, Tailwind CSS is built into
              workflow with postcss, and DatoCMS as a Headless CMS to host all
              the content.
            </p>
          </div>
          <div className="flex flex-wrap justify-end space-x-2 pt-2 py-4 px-4 font-medium sm:space-x-4">
            <a
              href="https://github.com/lazu-ardi/course-landing-page"
              className={
                'transition-colors hover:text-emerald-600 hover:dark:text-cyan-400'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://course-landingpage.vercel.app/"
              className={
                'transition-colors hover:text-emerald-600 hover:dark:text-cyan-400'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaLink className="text-2xl" />
            </a>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className="max-w-sm rounded-lg border border-gray-400 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="https://image-galery-pi.vercel.app/">
            <Image className="rounded-t-lg" src={Gallery} alt="Image Gallery" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Image Gallery
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              simple images gallery with images source from the Pixabay API.
              Using React and Tailwind CSS built into workflow with postcss.
            </p>
          </div>
          <div className="flex flex-wrap justify-end space-x-2 pt-2 py-4 px-4 font-medium sm:space-x-4">
            <a
              href="https://github.com/lazu-ardi/image-galery"
              className={
                'transition-colors hover:text-emerald-600 hover:dark:text-cyan-400'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://image-galery-pi.vercel.app/"
              className={
                'transition-colors hover:text-emerald-600 hover:dark:text-cyan-400'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaLink className="text-2xl" />
            </a>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className="max-w-sm rounded-lg border border-gray-400 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="https://pokedex-seven-lake.vercel.app/">
            <Image className="rounded-t-lg" src={Pokedex} alt="Pokedex" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pokedex
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A simple pokedex built using Next.js and Tailwind CSS integrated
              in the project. Fetching pokemon data using PokeAPI
            </p>
          </div>
          <div className="flex flex-wrap justify-end space-x-2 pt-2 py-4 px-4 font-medium sm:space-x-4">
            <a
              href="https://github.com/lazu-ardi/pokedex"
              className={
                'transition-colors hover:text-emerald-600 hover:dark:text-cyan-400'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://pokedex-seven-lake.vercel.app/"
              className={
                'transition-colors hover:text-emerald-600 hover:dark:text-cyan-400'
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaLink className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexProjects;
