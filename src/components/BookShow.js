import React from 'react'
import axios from 'axios'
import Searchbr from '../components/Searchbr'


class BookShow extends React.Component {
  state = {
    bookinfo: [],
    image: ''
  }

  async componentDidMount() {
    const bookId = this.props.match.params.id
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      this.setState({ bookinfo: res.data.volumeInfo })
      this.setState({ image: res.data.volumeInfo.imageLinks })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    if (!this.state.bookinfo) return
    const image = this.state.image.thumbnail
    return (
      <section className='hero is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='bookShow'>
            <Searchbr />
            <div className='bookContent'>
              <div className='bookInfo'>
                <div className='all'>
                  <img src={image} />
                  <div className='text'>
                    <h1>{this.state.bookinfo.title}</h1>
                    <h2>{this.state.bookinfo.subtitle}</h2>
                    <h2>{this.state.bookinfo.authors}</h2>
                    <p>{this.state.bookinfo.publisher}</p>
                    <p>{this.state.bookinfo.description}</p>
                    <h3>Page Count: {this.state.bookinfo.pageCount}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default BookShow
