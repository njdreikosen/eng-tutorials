import './Home.css';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Welcome!</h1>
        <p>
          &emsp;&emsp;This is a collection of engineering notes, lessons, and solvers I started putting together
          based on my experience in mechanical engineering and computer science classes.
          <br/><br/>
          This is very much a work in progress and new content will be add regularly, but if don't see a topic and you
          would like it added, reach out to me at ndreikosen@gmail.com, and I'll see what I can do!
        </p>
      </div>
    )
  }
}

export default Home;
