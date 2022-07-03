import React from 'react';
import { ListEdu, ListExp} from './DataResume';
import EduExp from './EduExp';
import Skill from './Skill';

const Resume = () => {
  
  return (
    <div className="p-6">
      <h1 className="lvt-header-main">resume 🙂</h1>
      <EduExp name={"Education"} list = {ListEdu}/>
      <EduExp name={"Experience"} list = {ListExp}/>
      <Skill />
    </div>
  )
}

export default Resume;