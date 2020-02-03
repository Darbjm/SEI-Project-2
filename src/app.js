import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import 'bulma'

import Home from './common/Home'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'
import BookShow from './components/BookShow'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/books/:search/results/:id" component={BookShow} />
            <Route path="/books/:search/results" component={SearchResults} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)