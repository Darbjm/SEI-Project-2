import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Searchbr from '../components/Searchbr'


class Home extends React.Component {
  state = {
    volumeInfo: '',
    homeCategory: '',
    id: []
  }

  randomCats = [
    'novels',
    'non-fiction',
    'software',
    'history',
    'young-fiction',
    'travel'
  ]
  
  async componentDidMount() {
    try {
      const i = Math.floor(Math.random() * this.randomCats.length)
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=asubject:${this.randomCats[i]}&maxResults=4`)
      const info = res.data.items
      let usefulInfo = info.map(item => (
        item.volumeInfo.imageLinks
      ))
      usefulInfo = usefulInfo.filter(item => item)
      this.setState({ volumeInfo: usefulInfo, id: info })

    } catch (error) {
      console.log(error)
    }
  }


  render() {
    if (!this.state.volumeInfo) return null
    return (
      <section className='hero is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='container'>
            <Searchbr history={this.props.history} />
            <div className='display'>
              {this.state.volumeInfo.map((image, i) => (
                <Link key={i} to={`/books/1/results/${this.state.id[i].id}`} >
                  <img key={i} src={image.thumbnail} className='homebooks'/>
                </Link>
              )  
              )}
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default Home


