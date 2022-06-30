import React, { useState } from 'react';
import avatar from "../assets/images/my-avatar.jpg";
import Info from './Info';
import { BiChevronDown } from 'react-icons/bi';
const SideBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-w-[260px] h-full bg-gray-dark rounded-3xl border-primary sticky lvt-transition">
      <div className="flex flex-row p-4 xl:px-14 xl:pt-16 xl:flex-col items-center xl:justify-center justify-start relative">
        <figure className="bg-gray-light mr-4 w-20 md:w-24 xl:w-36 rounded-3xl">
          <img src={avatar} alt="my-avatar" className="w-full object-cover rounded-3xl" />
        </figure>
        <div>
          <h1 className="font-semibold my-5">Lê Văn Thời</h1>
          <p className="font-regular text-center w-max h-max px-4 py-2 bg-gray-light border-primary rounded-xl mb-6">Web Developer</p>
        </div>
        <button className="xl:hidden absolute top-0 right-0 w-auto p-2 bg-gray-light rounded-tr-3xl rounded-bl-3xl text-yellow-300 lvt-transition hover:text-white shadow-show focus:text-white focus:ring-1 focus:ring-gray-200" onClick={() => setShow(!show)}>
          <p className="hidden sm:block">Show Contact</p>
          <BiChevronDown size={25} className="sm:hidden" />
        </button>
      </div>
      <div className="hidden xl:block">
        <Info />
      </div>
        {show && (
          <div className="lvt-transition">
            <Info />
          </div>
        )}
    </div>
  )
}

export default SideBar;
