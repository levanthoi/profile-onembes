import React from 'react';
import { BsBook } from 'react-icons/bs';

const Resume = () => {
  const ListEdu = [
    {
      id: 1,
      school: "Truong THCS",
      years: "200x - 20xx",
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente sed laudantium corporis debitis, ipsam reprehenderit atque ratione, enim veniam repellendus!"
    },
    {
      id: 2,
      school: "Truong THCS",
      years: "200x - 20xx",
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente sed laudantium corporis debitis, ipsam reprehenderit atque ratione, enim veniam repellendus!"
    },
    {
      id: 3,
      school: "Truong THCS",
      years: "200x - 20xx",
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente sed laudantium corporis debitis, ipsam reprehenderit atque ratione, enim veniam repellendus!"
    }
  ];

  const resumes = [
    {
      id: 1,
      name: "Education"
    },
    {
      id: 2,
      name: "Experience"
    }
  ];
  return (
    <div className="p-6">
      <h1 className="lvt-header-main">resume</h1>
      {resumes.map(({ id, name }) => (
        <section key={id} className="my-6">
          <div className="flex justify-start gap-7">
            <div className="w-max p-2 bg-gray-light rounded-lg text-yellow-300 flex justify-center items-center shadow-base shadow-white">
              <BsBook size={20} />
            </div>
            <h1>{name}</h1>
          </div>
          <ol className="ml-16 mt-8">
            {
              ListEdu.map(({ id, school, years, dec }) => (
                <li key={id} className="timeline-item flex flex-col gap-1 mt-4 relative md:before:left-[-40px]">
                  <h2>{school}</h2>
                  <span className="text-yellow-400">{years}</span>
                  <p className="text-sm text-gray-400">{dec}</p>
                </li>
              ))
            }
          </ol>
        </section>
      ))}

    </div>
  )
}

export default Resume