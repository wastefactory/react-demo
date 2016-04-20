import React, {Component} from 'react';
import { Link } from 'react-router';

class Home extends Component{
  render(){
    return (
      <div className="home-page">
        <div className="title">
        	<h1 className="logo-font">This is a demo for <a href="http://facebook.github.io/react/" className="theme" target="_blank">React</a></h1> <span>A javascript library for building user interfaces</span>
        </div>
        <divider />

        <div className="description">
        	<p>The purpose of this simple demo is to help developers that just started looking into react, like me. I am trying to make a demo app and I will try to use all the basic implementation, using react, of course. <Link to="render" className="link">So let's get started</Link></p>        
        </div>
      </div>
    );
  }
}

export default Home;