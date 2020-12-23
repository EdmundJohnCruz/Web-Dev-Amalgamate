import React from 'react';
/*Page/Component Imports*/
import '../css/Home.css';
import TopNavBar from '../pages/components/TopNavBar';

const Home = () => {
  return (
    <div className="Home">
      <TopNavBar />
      <header className="Home-header">
        <p>Here's the homepage.</p>
      </header>
    </div>
  );
}
export default Home;