import React, { Component } from 'react'

import "./index.css"
import "./normalize.css"
import Navigation from './Navigation'
import TMDB from './TMDB'

export default class App extends Component {
  render() {
    let columns = <div className="row">
    {this.props.information.map(item => <Column name={item.title} desc={item.desc} />)}
    </div>
 
     return (
       <div className="App">
        <Navigation appTitle={this.props.title} />
        <Jumbo />
        {columns}
       </div>
    )
  }
}