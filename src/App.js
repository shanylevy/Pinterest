import React, { Component } from 'react';
import './component/header/header.css';
import Header from './component/header/mainHeader';
import PlusBtn from './component/createPin/PlusBtn';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from 'react-router-dom';
import Feed from '../src/component/feed'
import pinPage from '../src/component/pinPage/pinPage'
import CreatePin from '../src/component/createPin2/createPin'
import ProfilePage from '../src/component/profilePage/profilePage'
import UnderConts from '../src/component/underConts/underConts'


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Feed}/>
          <Route exact path="/pinPage/" component={pinPage}/> 
                    <CreatePin/>
          <Route exact path = "/shany" component={ ProfilePage }/>
          <Route exact path = "/underconts" component={ UnderConts }/>




        </div>
      </BrowserRouter>

    )

  }
}

export default App;
