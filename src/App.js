import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js'
import BookDisplay from './BookDisplay.js'
import SearchBooks from './SearchBooks.js'
import './App.css'

class BooksApp extends Component{

  state={books:[]};


  fetchBooks=()=>{
    BooksAPI.getAll()
      .then(books => 
        this.setState({
          books: books
        })
      ) 
  }

  componentDidMount(){
    this.fetchBooks();
  }

  handleChange=(book,e)=>{
    BooksAPI.update(book,e).then(()=>{
      this.fetchBooks();
    })
  }


  render(){
    const {books} = this.state;
    return(
      <div className="App">
        <Route exact path="/" render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          <BookDisplay books={books} handleChange={this.handleChange}/>
          <div className="open-search">
              <Link to="/search">Search</Link>
          </div>
        </div>  
        )}/>
      <Route path="/search" render={()=>(<SearchBooks books={books} handleChange={this.handleChange}/>)} />
      </div>
    )

  }

}
export default BooksApp;