import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import ArticleCard from './ArticleCard';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Dropdown } from 'semantic-ui-react';

class Analyzer extends Component{
    //showing analyzer view for moderators
    //should show only one pending element unitl hit the button to try to get another pending article
    
    constructor(props) {
        super(props);
        this.state = {
          article: {}
        };
      }


    
    render(){
        const article = this.state.article;
        let ArticleItem = <div>
          <table className="table table-hover table-dark">
            {/* <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Title</td>
                <td>{ article.title }</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Author</td>
                <td>{ article.author }</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ISBN</td>
                <td>{ article.isbn }</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Description</td>
                <td>{ article.description }</td>
              </tr>
              
              <tr>
                <th scope="row">5</th>
                <td>Content</td>
                <td>{ article.content }</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Uploader</td>
                <td>{ article.uploader }</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Upload date</td>
                <td>{ article.uploadDate }</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        return(
        <>
        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  href="/">SEPER</Navbar.Brand>
                    <Nav className="mr-auto" >
                    <Nav.Link  href="/">Home</Nav.Link>
                    <Nav.Link  href="/search">Search</Nav.Link>
                    <Nav.Link  href="/upload">Upload</Nav.Link>
                    <Nav.Link  href="/moderator">Moderator</Nav.Link>
                    <Nav.Link  href="/analyzer">Analyzer</Nav.Link>

                    </Nav>
                    <div onClick={this.profileClick}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>   
                    </div>
                    <div>
                        <Dropdown text='User name'>
                            <Dropdown.Menu>
                            <Dropdown.Item text='Browse profile' />
                            <Dropdown.Item text='Edit profile' />
                            <Dropdown.Item text='Logout' description='logout' />
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>
                </Container>
            </Navbar>
                

            <h1 style={{"text-align":"center"}}>SEPER System</h1>
            <button type="button" className="btn btn-outline-warning btn-lg float-right">
                Next article
            </button>
            
            <div className="container">
                <div className="row">
                    
                    <br />
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Article's Record</h1>
                    <p className="lead text-center">
                        View Article's Info
                    </p>
                    <hr /> <br />
                    </div>
                </div>
                <div>
                { ArticleItem }
                </div>
            </div>    
            <div className="row">
                <div className="col-md-6">
                    <button type="button" className="btn btn-outline-info btn-lg btn-block" >Accept Request</button><br />
                </div>

                <div className="col-md-6">
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" >Decline Request</button><br />
                </div>

          </div>
        </>
        );
    }
}
export default Analyzer;
