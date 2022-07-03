import React from 'react';
import items from './data/DataPort';
const Portfolio = () => {
  const selects = [
    {
      id: 1,
      title: "all"
    },
    {
      id: 2,
      title: "Web Development"
    },
    {
      id: 3,
      title: "Applications"
    },
    {
      id: 4,
      title: "Web design"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="lvt-header-main">Portfolio 🙂</h1>
      <section className="">
        <div className=""></div>
        <ul className="flex gap-4 sm:opacity-0">
          {selects.map(({ id, title }) => (
            <li key={id} ><button className="capitalize text-gray-300 text-sm sm:text-base">{title}</button></li>
          ))}
        </ul>
        <ul className="my-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ id, image, hrefCode, hrefDemo }) => (
            <li key={id} className="group mx-auto w-[300px] h-[250px] sm:w-full sm:h-[230px] relative">
              <div className="w-full h-[85%] xl:h-full group-hover:blur-sm duration-200 rounded-xl overflow-hidden">
                <img src={image} alt="my-project" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                <a href={hrefCode} target="_blank" rel="noreferrer" className="lvt-code-demo">Source code</a>
                <a href={hrefDemo} target="_blank" rel="noreferrer" className="lvt-code-demo">Demo</a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Portfolio;