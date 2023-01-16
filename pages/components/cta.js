import React from "react";

const CtaHead = (props) => {
  return (
    <>
      <div class="w-full h-screen font-sans bg-cover bg-landscape bg-my_bg_image">
        <div class="container flex items-center justify-center flex-1 h-full mx-auto">
          <div class="w-full max-w-lg">
            <div class="leading-loose">
              <form class="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                <p class="mb-8 text-2xl font-light text-center text-white">
                  Access the portal - just click login
                </p>
                <div class="mb-2">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="login-with-bg-email"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div class="mb-2">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="login-with-bg-password"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="password"
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <button
                    onClick={props.onClickChange}
                    class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Login
                  </button>
                </div>
                <div class="text-center">
                  <a class="right-0 inline-block text-sm text-white font-bold align-baseline text-500 hover:text-gray-800">
                    Create an account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaHead;
