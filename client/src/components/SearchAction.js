//perform search article action
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




class SearchAction extends Component{
  
 
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isbn: '',
            author: '',
            filter: 'A',
            articles:[]
        }
    
        this.handleChange = this.handleChange.bind(this);
        //TypeError: Cannot read properties of undefined (reading 'setState')
        //when meeting such error, means we will need to bind the handle function
        this.handleIsbnChange = this.handleIsbnChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      
      handleIsbnChange(event){
        this.setState({isbn: event.target.value});
      }

      handleAuthorChange(event){
        
        this.setState({author: event.target.value});
      }

    

      handleFilterChange(event) {
        this.setState({filter: event.target.value});
      }


      handleSubmit(event) {
        event.preventDefault();
        //var searchQuery = this.state.value;
        //var filterValue = this.state.filter;
        //window.location.href = "/show-research-list";
        
        // + searchQuery;
        // + filter;
        axios
            .get('https://sepersystem.herokuapp.com/api/articles/search/'+this.state.value+ '&' +this.state.isbn + '&'+this.state.author)
        .then(res => {
          this.setState({
            articles: res.data
          });
         
        })
        .catch(err =>{
          console.log('Error from ShowResearchList');
        })
      }


      render() {
        const articles = this.state.articles;
        let articleList;
        const bigFont = {
          fontSize: 24,
        };
        const marginLeft={
          marginLeft:6,
        }
        if(!articles) {
            articleList = "there is no article record!";
        } else {
          articleList = articles.map((article, k) =>
            <ArticleCard article={article} key={k} />
          );
        }
        return (
            <><Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  href="/">SEPER</Navbar.Brand>
                    <Nav className="mr-auto" >
                    <Nav.Link  href="/">Home</Nav.Link>
                    <Nav.Link  href="/search">Search</Nav.Link>
                    <Nav.Link  href="/">Upload</Nav.Link>
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
              <form onSubmit={this.handleSubmit}>
                  <label>
                   
                    
                        
                        <a style={bigFont}>Title:</a>
                        <textarea className="col-lg-3" value={this.state.value} onChange={this.handleChange} />
                     
                   
                        <a style={bigFont}>Isbn:</a>
                        <textarea className="col-lg-3" value={this.state.isbn} onChange={this.handleIsbnChange} />
             
               
                        <a style={bigFont}>Author:</a>
                        <textarea  className="col-lg-3" value={this.state.author} onChange={this.handleAuthorChange} />
                 
                   
                      
                  </label>
                    <select value={this.state.filter} onChange={this.handleFilterChange}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                 
                  <input style={marginLeft}  type="submit" value="submit" />
              </form>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        search content:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                        <select value={this.state.filter} onChange={this.handleFilterChange}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </label>
                    <input type="submit" value="submit" />
                </form>
          
              <form onSubmit={this.handleSubmit}>
                  <label>
                   
                    
                        
                        <a style={bigFont}>Title:</a>
                        <textarea className="col-lg-3" value={this.state.value} onChange={this.handleChange} />
                     
                   
                        <a style={bigFont}>Isbn:</a>
                        <textarea className="col-lg-3" value={this.state.isbn} onChange={this.handleIsbnChange} />
             
               
                        <a style={bigFont}>Author:</a>
                        <textarea  className="col-lg-3" value={this.state.author} onChange={this.handleAuthorChange} />
                 
                   
                      
                  </label>
                    <select value={this.state.filter} onChange={this.handleFilterChange}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                 
                  <input style={marginLeft}  type="submit" value="submit" />
              </form>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <br />
                    <h2 className="display-4 text-center">My Library</h2>
                  </div>

                  <div className="col-md-11">
                    
                    <br />
                    <br />
                    <hr />
                  </div>

                </div>

                <div className="list">
                      {articleList}
                </div>
              </div>

            </>
          
        );
      }
}

export default SearchAction;
