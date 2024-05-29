import React from "react";

const Practice = () => {
  return (
    <body className="bg-slate-900 h-screen">
      <div className="p-3 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-4">
        <div>
          <img
            className="w-12 h-12"
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="img"
          ></img>
        </div>
        <div className="text-xl font-medium text-blue-600">
          <div>Tailwind Css </div>
          <p className="text-slate-500 text-base-2xl">By Tejas</p>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className="bg-red-500 mx-auto text-center  text-white p-2 rounded-md">
          Check It
        </button>
      </div>

      <div className="text-center my-4">
        <p className="text-white md:text-green-500 sm:text-red-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="mt-4">
        <div className="max-w-sm md:max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg ">
          <div className="md:flex">
            <div>
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="img"
              ></img>
            </div>
            <div className="p-3">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <a
                className="block mt-1 text-lg leading-tight font-medium text-black hover:blur-sm"
                href="#"
              >
                Tailwind css is <span className=" bg-yellow-400 p-[2px]"> amazing</span> once you understand power of it
              </a>
              <p className="mt-2 text-slate-500">
                Emmet Abbreviation Lorem ipsum dolor sit amet consec!
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Practice;
