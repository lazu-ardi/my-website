import Image from 'next/image';
import React from 'react';
import profile from '../public/assets/profile.jpg';

const Callout = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 lg:text-5xl">
            Hey, I am
          </h1>
          <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-50 lg:text-8xl">
            Lazuardi
          </h1>
          <div className="mt-6 text-slate-900 dark:text-slate-50">
            <p className="mb-4 text-lg">
              I am a Frontend developer based in Surabaya that specializes in
              building websites <br /> and app with jamstack ecosystem.
            </p>
          </div>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={profile}
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

export default Callout;
