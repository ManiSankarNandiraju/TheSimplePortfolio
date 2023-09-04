import React from 'react';
import AllCards from './AllCards';

const Education = () => {
  const content =
    "The only time I ever spent money for learning Computer Science is in college, and ironically that's where I learnt the least.";
  return (
    <div>
      <p className='sectionTitle'>Education</p>
      <div className='bio'>{content}</div>
      <div>
        <AllCards subsec='Education' />
      </div>
    </div>
  );
};

export default Education;
