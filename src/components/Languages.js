import React from 'react';
import python from './python-logo.png';
import js from './js-logo.png';
import c from './c-logo.png';

const Languages = () => {
  const content =
    'I am comfortable with Python and Javascript while I also think any language can learnt in a week or two.';
  return (
    <div>
      <p className='sectionTitle'>Languages</p>
      <div className='bio'>{content}</div>
      <div className='skills' style={{ display: 'flex' }}>
        <div>
          <a href='https://www.python.org/'>
            <img src={python} alt='' />
          </a>
        </div>
        <div>
          <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
            <img src={js} alt='' />
          </a>
        </div>
        {/* <div>
          <a href='https://www.cprogramming.com/'>
            <img src={c} alt='' />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Languages;
