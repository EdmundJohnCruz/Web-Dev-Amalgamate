import React from 'react';
/* React Bootstrap Imports */
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
/*Page/Component Imports*/
import '../css/Almaga.css';
import TopNavBar from '../pages/components/TopNavBar';

const Pages = () => {
  return (
    <div className="Pages">
      <TopNavBar />
      <header className="Pages-header">
          <Form inline className = "Search-page">
                <FormControl type="text" placeholder="Looking for a page?" className="mr-sm-2" />
          </Form>
          <div className = "Pages-display">

          </div>
      </header>
    </div>
  );
}
export default Pages;