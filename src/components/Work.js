import React from 'react';
import AllCards from './AllCards';

const Work = () => {
  const content =
    'I try to do projects from different domains and pretty much anything that seems cool to me.';
  return (
    <div>
      <p className='sectionTitle'>Work</p>
      <div style={{ marginBottom: '30px' }} className='bio'>
        {content}
      </div>
      <div>
        <AllCards subsec='Work' />
      </div>
    </div>
  );
};

export default Work;
