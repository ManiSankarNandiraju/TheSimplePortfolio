import React, { Fragment } from 'react';

const Nav = () => {
  return (
    <Fragment>
      <div style={topp}>
        <div className='name'>Raahel Baig</div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ paddingRight: '10px', fontSize: '25px' }}>
            <a href='https://github.com/raahelpie'>
              <i className='fab fa-github'></i>
            </a>
          </div>
          <div style={{ fontSize: '25px' }}>
            <a href='https://www.linkedin.com/in/raahel-baig-112a91134/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='bio'>
        Hi, my name is Raahel Baig. I am student and a programmer. A lot of
        things interest me and I like to do a fair bit of all of them.
      </div>
    </Fragment>
  );
};

const topp = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default Nav;
