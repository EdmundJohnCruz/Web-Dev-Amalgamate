import React from 'react';
import {Columns, Column} from 'react-flex-columns';
/*Page/Component Imports*/
import '../css/Almaga.css';
import TopNavBar from '../pages/components/TopNavBar';

const Home = () => {
  return (
    <div className="Home">
      <TopNavBar />
      <header className="Home-header">
        <div>Here's the homepage.</div>
        <Columns className = "Home-columns">
          <Column flex>Left is a long sentence that I wanted to test out</Column>
          <Column flex>Right</Column>
        </Columns>
      </header>
    </div>
  );
}
export default Home;