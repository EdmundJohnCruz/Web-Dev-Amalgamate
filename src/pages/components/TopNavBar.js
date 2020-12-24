import React from 'react';
/* React Bootstrap Imports*/
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/home">Almaga</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/pages">Pages</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/">Landing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search the site here... (WIP)" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}
export default TopNavBar;