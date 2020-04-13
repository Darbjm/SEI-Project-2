import React from 'react'
import BookCard from './BookCard'
import axios from 'axios'
import Searchbr from '../components/Searchbr'

class SearchResults extends React.Component { 
  state = {
    data: [],
    search: '',
    index: 0
  }

  componentDidMount() {
    this.findBooks()
  }

  findBooks = async () => {
    const search = this.props.match.params.search
    const index = this.state.index
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&startIndex=${index}`)
      this.setState({ data: res.data.items })
      this.setState({ search }) 
    } catch (err) {
      console.log(err)
    }
  }

  next = () => {
    let newIndex = this.state.index
    const next = newIndex += 40
    this.setState({ index: next })
    this.findBooks()
  }

  back = () => {
    let index = this.state.index
    const back = index -= 40
    this.setState({ index: back })
    this.findBooks()
  }

  render() {
    if (!this.state.data) return
    console.log(this.state.index)
    return (
      <section className='hero'>
        <div className='result-bar'>
          <Searchbr history={this.props.history}/>
        </div>
        <div className='pages'>
          {this.state.index ? <div><a onClick={this.back}>Previous page</a> <a onClick={this.next}>Next page</a></div> : <div><a onClick={this.next}>Next page</a></div>}
        </div>
        <div className='results'>
          {this.state.data.map((book, i) => {
            return <BookCard key={i} {...book} search={this.state.search} />
          })
          }
        </div>
      </section>
    )
  }
}


export default SearchResults