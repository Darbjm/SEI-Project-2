import React from 'react'
import { FaSearch } from 'react-icons/fa'

class Searchbr extends React.Component {
  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const search = this.state.search
    this.props.history.push(`/books/${search}/results`)
    location.reload()
  }

  render() {
    return (
      <div className='searchbar'>
        <form onSubmit={this.handleSubmit}>
          <div className='wrap'>
            <div className='search'>
              <input 
                placeholder='search'
                type='text'
                name='search' 
                onChange={this.handleChange}
                className='searchTerm'
              />
              <button className='searchButton' type='submit'><FaSearch/></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Searchbr