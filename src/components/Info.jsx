import React from 'react'
import { FiMail } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { VscCalendar } from 'react-icons/vsc';

// import socials
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
const Info = () => {
    
  const infos = [
    {
      id: 1,
      icon: <FiMail size={25} className="" />,
      title: "Email",
      subtitle: "lethoi1506@gmail.com",
      href: "mailto:lethoi1506@gmail.com",
    },
    {
      id: 2,
      icon: <BsPhone size={25} className="" />,
      title: "Phone",
      subtitle: "+84339083266",
      href: "tel:+84339083266",
    },
    {
      id: 3,
      icon: <VscCalendar size={25} className="" />,
      title: "Birthday",
      subtitle: <time dateTime="15-06-2xxx">15-06-2xxx</time>,
    },
    {
      id: 4,
      icon: <GoLocation size={25} className="" />,
      title: "Location",
      subtitle: <address>Nga Sơn, Thanh Hóa</address>,
    },
  ];
  const socials = [
    {
      id: 1,
      icon: <FaFacebook size={25} className="" />,
      href: "https://www.facebook.com/thoi1506",
    },
    {
      id: 2,
      icon: <FaGithub size={25} className="" />,
      href: "https://github.com/levanthoi",
    },
    {
      id: 3,
      icon: <FaTelegram size={25} className="" />,
      href: "https://t.me/onembes",
    },
  ];

  return (
    <>
        <ul className="mx-5 border-t border-solid border-slate-600 ">
              {infos.map(({ id, icon, title, subtitle, href }) => (
                <li key={id} className="flex py-4">
                  <div className="w-max p-3 bg-gray-light rounded-xl text-yellow-300 flex justify-center items-center mr-4 shadow-base shadow-white">
                    {icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-400 uppercase font-medium">{title}</p>
                    <a href={href} className="text-sm">{subtitle}</a>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="flex justify-center items-center gap-2 my-5">
              {socials.map(({ id, icon, href }) => (
                <li key={id} className="hover-scale">
                  <a href={href} className="text-gray-400">{icon} </a>
                </li>
              ))}
            </ul>
    </>
  )
}

export default Info