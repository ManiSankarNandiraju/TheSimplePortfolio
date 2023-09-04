import React from 'react';
import Card from './Card';
import viewCount from './viewCount.JPG';
import covid19 from './covid19.png';
import githubFinder from './githubFinder.png';
import gvp from './gvp.png';

const AllCards = (props) => {
  if (props.subsec === 'Work') {
    return (
      <div className='allCards'>
        <Card
          image={viewCount}
          content={'viewCount'}
          link='https://github.com/raahelpie/viewCount'
        />
        <Card
          image={githubFinder}
          content={'github-finder'}
          link='https://github.com/raahelpie/github-finder'
        />
        <Card
          image={covid19}
          content={'covid19-data-visuals'}
          link='https://github.com/raahelpie/covid19-data-visuals'
        />
      </div>
    );
  } else if (props.subsec === 'Education') {
    return (
      <div className='allCards ggvv'>
        <Card image={gvp} content={'GVPCE'} link='http://gvpce.ac.in' />
      </div>
    );
  }
};

export default AllCards;
