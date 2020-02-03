import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = (props) => {
  const image = props.volumeInfo.imageLinks.thumbnail
  const id = props.id
  return (
    <Link to={`/books/${props.search}/results/${id}`} >
      <div>
        <div className="card-header">
          <h4 className="card-header-title">{props.volumeInfo.title}</h4>
        </div>
        <div className="card-content">
          <h5 className="title is-6">{props.volumeInfo.authors}</h5>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={props.volumeInfo.title} />
          </figure>
        </div>
      </div>
    </Link>
  )
}


export default BookCard