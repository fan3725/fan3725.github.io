import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header'
import FooMus from './common/footer_mus_box'
import Home from './common/home'
import MyMusic from './common/mymusic'
import Friend from './common/friend'
import Song from './common/song'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}/>
          <Route path="/fmusic" exact component={MyMusic}/>
          <Route path="/friend" exact component={Friend}/>
          <Route path="/song" exact component={Song}/>
        </BrowserRouter>
        <FooMus />
      </>
    )
  }
}

export default App