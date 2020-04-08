import React, {Component} from 'react'
import BookShelf from './BookShelf'
import './App.css'

class ListMyBooks extends Component {

  render(){
    console.log(this.props.books)
    
    return(
      <div>
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              
            </div>
        </div>
        <ul>
          {[...this.props.books].map((book)=> {
            return(
              <li key= {book.title}>
                {book.title}
                <img src={book.imageLinks.smallThumbnail}/>
              </li>
            )
          })}
        </ul>
        <BookShelf/>

      </div>
    )
  }
}

export default ListMyBooks