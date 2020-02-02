import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js';
import PropTypes from 'prop-types';
import Book from './Book.js';

export default class SearchBooks extends Component {
    
    state ={
        query:'',
        results:[]
    }

    findBooks=(e)=>{
        const q = e.target.value;
        this.setState({query:q})
        if(q){
            BooksAPI.search(q.trim()).then(books=>{
                books.error?this.setState({results:[]}): this.setState({results:books})
            })
        }else{
            this.setState({results:[]})
        }
    }

    render() {
        const {results,query}= this.state;
        const{handleChange}=this.props;
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                <div className="seatch-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query} onChange={this.findBooks}/>
                </div>
                </div>
            

            <div className="search-books-results">
             {
             results.length>0?
             <div><h3>Search returned {results.length} books </h3>
             <ol className="book-grid">
                 {
                     results.map(book=>(
                         <Book book={book} key={book.id} handleChange={handleChange}/>
                     ))
                 }
             </ol>
             </div>
             : <h1>No books Found</h1>   
             }  
            </div>
            </div>
        )
    }
}

SearchBooks.propTypes={
    handleChange:PropTypes.func.isRequired,
}
