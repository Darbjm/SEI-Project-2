import React from 'react'
import BookCard from './BookCard'
import axios from 'axios'
import Searchbr from '../components/Searchbr'

class SearchResults extends React.Component { 
  state = {
    data: [],
    search: ''
  }

  async componentDidMount() {
    const search = this.props.match.params.search
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`)
      this.setState({ data: res.data.items })
      this.setState({ search })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.data) return
    return (
      <section className="hero">
        <Searchbr />
        {this.state.data.map((book, i) => {
          console.log(book)
          return <BookCard key={i} {...book} search={this.state.search} />
        })
        }
      </section>
    )
  }
}


export default SearchResults








{/* {this.state.data ? 
          this.state.data.map((book, i) => (
            <SearchResults key={i} {...book} />
          )) : ''} */}
{/* <Link to={`/:${id}`}>
          <div>
            <h1>{data.title}</h1>
            <p>{data.authors}</p>
            <img src={img} />
          </div>
        </Link> */}