import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className="block xl:inline">
            <span className="text-primary">C</span>
            <span className="text-secondary">O</span>
            <span className="text-tertiary">L</span>
            <span className="text-fourth">O</span>
            <span className="text-primary">R</span>
            <span className="text-tertiary">S</span>
          </span>
        </h1>
        <p className="mt-3 text-2xl font-bold italic text-gray-500 sm:mt-5 sm:text-3xl md:text-4xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
      </div>
    </main>
  );
};

export default MainHero;
