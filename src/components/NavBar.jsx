import React from 'react';
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
const NavBar = () => {
  const links = [
    {
      id: 1,
      link: 'about',
    },
    {
      id: 2,
      link: 'resume',
    },
    {
      id: 3,
      link: 'Portfolio',
    },
    {
      id: 4,
      link: 'blog',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
  return (
    <nav className="fixed bottom-0 right-0 w-full bg-gray-light border-primary backdrop-blur-md flex justify-center items-center rounded-t-3xl lg:absolute lg:right-0 lg:top-0 lg:w-max lg:h-max lg:rounded-bl-3xl lg:rounded-tl-none z-20">
      <ul className="flex gap-1 md:gap-3">
        {links.map(({ id, link }) => (
          <li key={id} className="capitalize cursor-pointer px-2 md:px-6 py-4 font-medium lvt-transition hover-scale text-xs md:text-base">
            <NavLink to={link} >
              {link}
            </NavLink>

          </li>
        ))}
      </ul>

      {/* <Switch>
          <Route path="about">
            <About />
          </Route>
        </Switch> */}
    </nav>
  )
}

export default NavBar