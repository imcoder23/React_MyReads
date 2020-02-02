import React, { Component } from 'react';
import Book from './Book.js';
import PropTypes from 'prop-types';

class BookShelf extends Component{
  render(){
    const{books,handleChange} = this.props;
    
  return(
   <ol className="books-grid">
       {books.map(book=>(
           <Book book={book} key={book.id} handleChange={handleChange}/> 
       ))}
   </ol>
 )

       }  
}

BookShelf.propTypes={
  books:PropTypes.array.isRequired,
  handleChange:PropTypes.func.isRequired
};    

export default BookShelf;