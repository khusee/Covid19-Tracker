import React from 'react';
import Home from './components/Home/home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/search' component={Search}/>
          <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
