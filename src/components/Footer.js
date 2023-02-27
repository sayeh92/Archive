import React from 'react';

const Footer = () => {
    return (
       <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="https://github.com/sayeh92" class="hover:underline">Sayeh Ghaderi </a>. Lets Connect.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.themoviedb.org/documentation/api" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
               
                <li>
                    <a href="https://unsplash.com/s/photos/dogs" class="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="https://www.leovegas.com/sv-se/" class="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    );
};

export default Footer;
