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
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <Searchbr />
          <div>
            <h1>{this.state.bookinfo.title}</h1>
            <h2>{this.state.bookinfo.subtitle}</h2>
            <p>{this.state.bookinfo.authors}</p>
            <img src={image} />
            <p>{this.state.bookinfo.publisher}</p>
            <p>{this.state.bookinfo.description}</p>
            <p>Page Count: {this.state.bookinfo.pageCount}</p>
          </div>
        </div>
      </section>

    )
  }
}

export default BookShow

{/* <h1>{title}</h1>
<p>{this.state.data.subtitle}</p>
<p>{this.state.data.authors}</p>
{this.img ? <img src={this.img}/> : ''}
<p>{this.state.data.publisher}</p>
<p>{this.state.data.description}</p>
<p>{this.state.data.pageCount}</p> */}