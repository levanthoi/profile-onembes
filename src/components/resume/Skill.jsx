import React from 'react';
import {ListSkill} from './DataResume';
const Skill = () => {
  return (
    <div className="py-4">
        <h1 className="capitalize">my skill</h1>
        <ul className="flex flex-wrap gap-8 mt-8 rounded-lg bg-gray-light px-8 py-4">
          {ListSkill.map(({id,img, alt}) => (
            <li key={id} className="h-[90px] shadow-skill contrast-50">
              <img src={img} alt={alt} className="w-full h-full object-cover"/>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Skill;