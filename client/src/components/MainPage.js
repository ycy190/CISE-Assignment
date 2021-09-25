import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

<<<<<<< HEAD
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
<<<<<<< HEAD
import { Dropdown } from 'semantic-ui-react'
=======
<<<<<<< Updated upstream
=======
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Dropdown } from 'semantic-ui-react';
>>>>>>> Stashed changes
>>>>>>> search-feature
=======
import { Dropdown } from 'semantic-ui-react';
>>>>>>> bacd4e8451bcc4087d9f514f36cf4d7b985a5d3f
class MainPage extends Component {
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">SEPER</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="#pricing">Upload</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        );
    }
}

export default MainPage;
