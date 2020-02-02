import React, { Component } from 'react';
import BookShelf from './BookShelf.js'; 
import PropTypes from 'prop-types';


class BookDisplay extends Component{
render(){
  const {books,handleChange} = this.props;
  const bookshelf = [
    {type:'currentlyReading', title:'Currently Reading'},
    {type:'wantToRead', title:'Want to Read '},
    {type:'read', title:'Read'}
  ]
    return(
        <div className="list-books-content">
            { 
                bookshelf.map((shelf,index) =>{  
                  
                 const shelfBooks = books.filter(book => book.shelf === shelf.type); 
                return(
                 <div className="bookshelf" key={index}>  
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <div className="bookshelf-books">
                      <BookShelf books={ shelfBooks} handleChange={handleChange} />
                    </div>
                  </div>  

                 )} 
              )
            }
          </div>
    )
  }
}

BookDisplay.propTypes = {
  books:PropTypes.array.isRequired,
  handleChange:PropTypes.func.isRequired
}

export default BookDisplay;
    

