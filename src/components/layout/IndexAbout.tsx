import React from 'react';
import {
  SiChakraui,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const IndexAbout = () => {
  return (
    <div className="container mx-auto px-4 py-6 mt-48 rounded-lg border-8 border-emerald-400 dark:border-slate-50">
      <div className="item-center flex flex-col text-center ">
        <h1 className="text-4xl font-bold text-center text-emerald-600 dark:text-cyan-400 lg:text-5xl">
          About Me
        </h1>

        <p className="text-lg text-left lg:text-center px-4 py-4">
          Hi there! i&#39;m Lazuardi and i am a Frontend Developer who likes to
          build things on the web. I develop websites based on{' '}
          <a
            href="https://jamstack.org/"
            className="underline decoration-emerald-400 hover:text-emerald-600 hover:dark:text-cyan-400 dark:decoration-cyan-400 "
          >
            Jamstack
          </a>{' '}
          architecture that are fluid, responsive, and great to look at.{' '}
          <span className="block pt-4 text-center">
            Here are the technologies that I&#39;ve been working on :
          </span>
        </p>
        <div className="flex flex-row space-x-6 justify-center py-2">
          <p className="flex flex-col-reverse gap-1 items-center">
            HTML
            <SiHtml5 className="text-5xl" />
          </p>
          <p className="flex flex-col-reverse gap-1 items-center">
            CSS
            <SiCss3 className="text-5xl" />
          </p>
          <p className="flex flex-col-reverse gap-1 items-center">
            JavaScript
            <SiJavascript className="text-5xl" />
          </p>
          <p className="flex flex-col-reverse gap-1 items-center">
            TypeScript
            <SiTypescript className="text-5xl" />
          </p>
        </div>

        <div className="mt-6 text-slate-900 dark:text-slate-50">
          <p className="mb-4 text-lg text-center">
            And here are the framework that I&#39;m familiar with :
          </p>
        </div>
        <div className="flex flex-row space-x-6 justify-center py-2">
          <p className="flex flex-col-reverse gap-1 items-center">
            React
            <SiReact className="text-5xl" />
          </p>
          <p className="flex flex-col-reverse gap-1 items-center">
            Next.js
            <SiNextdotjs className="text-5xl" />
          </p>
          <p className="flex flex-col-reverse gap-1 items-center">
            Tailwind
            <SiTailwindcss className="text-5xl" />
          </p>
          <p className="flex flex-col-reverse gap-1 items-center">
            Chakra
            <SiChakraui className="text-5xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexAbout;
