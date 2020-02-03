import React from 'React'
import { FaSearch } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

class Searchbr extends React.Component {
  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(`/books/${this.state.search}/results`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <select>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="category">Category</option>
          </select> */}
          <div className="wrap">
            <div className="search">
              <input 
                type="text"
                name="search" 
                onChange={this.handleChange}
                className="searchTerm"
              />
              <button className="searchButton" type="submit"><FaSearch/></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Searchbr)