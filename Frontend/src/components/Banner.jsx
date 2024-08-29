import React from 'react';
import banner from '../../public/pic.png';

export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold dark:text-white">
              Hello, Welcome here to learn something{' '}
              <span className="text-pink-500 dark:text-pink-400">new every day!!!</span>
            </h1>
            <p className="dark:text-gray-300">
              Discover a world of imagination and knowledge at [Your Bookstore Name]. Whether you're a devoted bookworm or an occasional
              reader, our shelves are stocked with a diverse collection to satisfy every literary taste.
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 dark:opacity-100">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:bg-slate-800 dark:text-white" placeholder="Email" />
            </label>
            <button className="btn btn-secondary dark:bg-pink-700 dark:hover:bg-pink-600 dark:text-white">Subscribe</button>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="w-full h-auto" alt="Banner" />
        </div>
      </div>
    </>
  );
}
