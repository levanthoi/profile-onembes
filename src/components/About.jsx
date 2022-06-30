import React from 'react';
import { FiDatabase } from 'react-icons/fi';
import { BsCodeSlash, BsPhone } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import avt1 from '../assets/images/avatar-1.png';
import avt2 from '../assets/images/avatar-2.png';
import avt3 from '../assets/images/avatar-3.png';
import avt4 from '../assets/images/avatar-4.png';

const About = () => {
    const services = [
        {
            id: 1,
            icon: <BsCodeSlash size={35} className="text-yellow-300 mr-5" />,
            title: "FrontEnd",
            subtitle: "Một FE Developer"
        },
        {
            id: 2,
            icon: <FiDatabase size={35} className="text-yellow-300 mr-5" />,
            title: "BackEnd",
            subtitle: "Một BE Developer"
        },
        {
            id: 2,
            icon: <FaCameraRetro size={35} className="text-yellow-300 mr-5" />,
            title: "Photography",
            subtitle: "Tương lai có thể sẽ thử =))"
        },
        {
            id: 4,
            icon: <BsPhone size={35} className="text-yellow-300 mr-5" />,
            title: "Mobile DEV",
            subtitle: "Sẽ thử sức )=("
        },
    ];

    const DataAvatars = [
        {
            id: 1,
            image : avt1,
            name: "ABC",
            title: "jsdjkad"
        },
        {
            id: 2,
            image : avt2,
            name: "ABCD",
            title: "jsdSjkad"
        },
        {
            id: 3,
            image : avt3,
            name: "ABCDE",
            title: "jsdjkad"
        },
        {
            id: 4,
            image : avt4,
            name: "ABCDEF",
            title: "jsdjkad"
        }
    ];

    return (
        <div className="p-6">
            <h1 className="lvt-header-main"
            >About Me
            </h1>
            <section className="pr-3 md:pr-10 lg:pr-24 text-base text-gray-400">
                <span>I'm a <i><b>Developer</b></i></span> <br />
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis perspiciatis consequatur molestias, eius ducimus quo aspernatur ipsum, qui delectus eum culpa dolore possimus alias quibusdam voluptates eligendi, et error est.
                </span><br />
                <div className="mt-4">Độc thân vui tính</div>
            </section>
            <section>
                <h1 className="my-6">Service</h1>
                <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {services.map(({ id, icon, title, subtitle }) => (
                        <li key={id} className="bg-gray-light rounded-xl h-28 p-4 md:p-8 flex justify-start items-center shadow-slate-500">
                            {icon}
                            <div>
                                <h1 className="text-md md:text-xl">{title}</h1>
                                <p className="text-gray-300 text-xs sm:text-sm mt-1">{subtitle}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
            <h1 className="my-6">FeedBack</h1>
                <ul className="flex gap-6 justify-start items-start lvt-scroll lvt-scrollbar py-11">
                    {DataAvatars.map(({ id, image, name, title }) => (
                        <li key={id} className="bg-gray-light rounded-xl min-w-full lg:min-w-[calc(50%-16px)] h-28 p-8 flex flex-row justify-start items-center shadow-slate-500 relative">
                            <img src={image}  alt="avatar-customer" className="absolute top-0 left-0 translate-x-6 translate-y-[-50%] w-16 md:w-20 p-1 bg-gray-dark rounded-xl shadow-base shadow-white"/>
                            <div>
                                <h1 className="text-md ml-16 md:text-xl md:ml-20">{name}</h1>
                                <p className="text-gray-300 text-sm mt-1">{title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            
        </div>
    )
}

export default About