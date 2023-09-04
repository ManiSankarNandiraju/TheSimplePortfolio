import React from 'react';
import react from './react-logo.png';
import js from './js-logo.png';
import css from './css-logo.png';
import html from './html-logo.png';
import node from './node-logo.png';
import flask from './flask-logo.png';
import mysql from './mysql-logo.png';
import mongo from './mongo-logo.png';

const Skills = () => {
  const content = 'I enjoy listening to music and coding simultaneously.';
  return (
    <div>
      <p className='sectionTitle'>Skills</p>
      <div className='bio'>{content}</div>
      <div className='side-head'>Front-end development</div>
      <div className='skills' style={{ display: 'flex' }}>
        <div>
          <a href='https://reactjs.org/'>
            <img src={react} alt='' />
          </a>
        </div>
        <div>
          <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
            <img src={js} alt='' />
          </a>
        </div>
        <div>
          <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
            <img src={html} alt='' />
          </a>
        </div>
        <div>
          <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
            <img src={css} alt='' />
          </a>
        </div>
      </div>
      <div className='side-head'>Server-side development</div>
      <div className='skills' style={{ display: 'flex' }}>
        <div>
          <a href='https://nodejs.org/en/'>
            <img src={node} alt='' />
          </a>
        </div>
        <div>
          <a href='https://flask.palletsprojects.com/en/1.1.x/'>
            <img src={flask} alt='' />
          </a>
        </div>
      </div>
      <div className='side-head'>Databases</div>
      <div className='skills' style={{ display: 'flex' }}>
        <div>
          <a href='https://www.mysql.com/'>
            <img src={mysql} alt='' />
          </a>
        </div>
        {/* <div>
          <a href='https://www.mongodb.com/'>
            <img src={mongo} alt='' />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
