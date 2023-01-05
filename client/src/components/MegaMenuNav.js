import React from 'react';
import SubList from './SubList';
import Explore from '../pages/Explore';
import OmniList from './OmniList';
import { Link } from 'react-router-dom';
function MegaMenu() {
    return (
        <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center md:order-2">

                    <a href="http://localhost:3000/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>

                    <Link to="/signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</Link>
                </div>

                <div id="mega-menu" className="items-center justify-between hidden w-full text-sm md:flex md:w-auto md:order-1">
                    
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                        
                        <li>
                            <a href="http://localhost:3000/" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>

                        <li>
                            <a href="http://localhost:3000/cards" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Cards</a>
                {/* cards route needed ^^^ */}
                            <div id="mega-menu-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                            </div>
                        </li>
                        <li>
                            <a href="http://localhost:3000/new" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Create</a>
                        </li>
                    
                    </ul>
                </div>
                
            </div>
            
        </nav>
    )
};

export default MegaMenu;