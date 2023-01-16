import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = (props) => {
  const [headshow, setHeadshow] = useState(0);
  const headLogic = () => {
    if (headshow == 0) {
      setHeadshow(1);
    } else {
      setHeadshow(0);
    }
  };
  return (
    <>
      <nav class="bg-white dark:bg-gray-800  ">
        <div class="px-8 mx-auto max-w-7xl">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <Link class="flex-shrink-0" href="/">
                <img className="w-8 h-8" src="/building.png" />
              </Link>
              <div class="hidden md:block">
                <div class="flex items-baseline ml-10 space-x-4">
                  {/* <Link
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Home
                  </Link>
                  <Link
                    class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Gallery
                  </Link>
                  <Link
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Content
                  </Link> */}
                  <button
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={props.logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <button
                class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={headLogic}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class={`${headshow === 1 ? "block md:hidden" : "hidden"}`}>
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* <Link
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </Link>
            <Link
              class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Gallery
            </Link>
            <Link
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Content
            </Link> */}
            <button
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={props.logout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
