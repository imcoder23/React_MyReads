import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import BooksApp from './App';

class Book extends Component{
   updateShelf =(e)=>{
        this.props.handleChange(this.props.book,e.target.value)
   }

    render(){
        const {book} = this.props;
       
        const imgCover = book.imageLinks ? book.imageLinks.thumbnail : '';

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                          className="book-cover"
                          style={{ width: 128, height: 193,backgroundImage: `url("${imgCover}")`}}/>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={this.updateShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want To Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

Book.propTypes={
     book:PropTypes.object.isRequired
 }


export default Book;