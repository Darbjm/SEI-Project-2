import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = { navbarOpen: false }
  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className='navbar is-black' >
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/'>
              <img src='../assets/QueryWhite.svg' alt='logo' />
            </Link>
            <a className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className='navbar-end'>
              <Link className='navbar-item' to='/books/romance/results'>Romance</Link>
              <Link className='navbar-item' to='/books/thriller/results'>Thriller</Link>
              <Link className='navbar-item' to='/books/horror/results'>Horror</Link>
              <Link className='navbar-item' to='/books/fantasy/results'>Fantasy</Link>
              <Link className='navbar-item' to='/books/children/results'>Children</Link>
              <Link className='navbar-item' to='/books/Poetry/results'>Poetry</Link>
              <Link className='navbar-item' to='/books/comedy/results'>Comedy</Link>
              <Link className='navbar-item' to='/books/nonficton/results'>Non-fiction</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar