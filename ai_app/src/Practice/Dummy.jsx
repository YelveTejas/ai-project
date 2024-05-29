import React from "react";

const Practice1 = () => {
  return (
    <body className="bg-slate-950 h-100">
      <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4">
        <div className="text-2xl text-indigo-600 font-bold">PW SKILLS</div>
        <ul className="md:flex font-semibold hidden">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About US</li>
          <li className="mx-[10px] cursor-pointer">Contact </li>
        </ul>
        <div>
          <button className="hidden md:block px-2 py-2 bg-indigo-600 text-white rounded">
            Login/Signup
          </button>
        </div>
        <div className="md:hidden">
          <a className="text-3xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      <div className="w-fit mx-auto border">
        <img
          className="max-h-[600px] max-w-full"
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="img"
        ></img>
      </div>
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center ">
          <p className="text-white  font-semibold text-xl md:text-4xl text-center">
            "Pure Web Development"
          </p>
          <div className="w-40 h-1 mt-2 rounded-full border-b-4 border-yellow-400 md:mt-4 mb-12"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className="w-46  flex flex-col items-center mb-12">
            <img
              className="w-36 h-36 rounded-full"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            ></img>
            <p className="text-white font-semibold text-2xl">600+</p>
            <p className="text-gray-400 uppercase font-semibold text-lg">
              Dfferent Courses
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-36 h-36  rounded-full"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            ></img>
            <p className="text-white font-semibold text-2xl">600+</p>
            <p className="text-gray-400 uppercase font-semibold text-lg">
              Dfferent Courses
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-36 h-36  rounded-full"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            ></img>
            <p className="text-white font-semibold text-2xl">600+</p>
            <p className="text-gray-400 uppercase font-semibold text-lg">
              Dfferent Courses
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center ">
          <p className="text-white  font-semibold text-xl md:text-4xl text-center">
            Our Products
          </p>
          <div className="w-40 h-1 mt-2 rounded-full border-b-4 border-yellow-400 md:mt-4 mb-12"></div>
        </div>
      </div>
      <div className="w-[90%] h-auto flex flex-wrap justify-around mx-auto">
        <div className="w-64 flex flex-col items-center mb-12 border-white  border-2 rounded-xl">
          <img></img>
          <p className="text-2xl text-white font-bold ">PW Skills</p>
          <p className="text-gray">Lorem </p>
        </div>
      </div>
    </body>
  );
};

export default Practice1;
