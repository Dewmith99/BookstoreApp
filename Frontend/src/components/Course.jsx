import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  dark:text-white min-h-screen">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you{' '}
          <span className="text-pink-500 dark:text-pink-400">Here! :)</span>
        </h1>
        <p className="mt-12">
          The Bookstore Courses section offers a comprehensive range of educational resources for book lovers, authors, and aspiring publishers. 
          Whether you're interested in creative writing, literary analysis, or the business of book publishing,
          our carefully curated courses cater to all levels of expertise.
        </p>

        <Link to="/">
          <button className="mt-6 bg-pink-500 dark:bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-700 dark:hover:bg-pink-600 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
