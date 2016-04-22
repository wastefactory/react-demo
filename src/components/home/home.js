import React, {Component} from 'react';
import { Link } from 'react-router';
import PageTitle from './../page_title';

class Home extends Component{
  render(){

    const pageInfo = {
      title: ["This is a demo ", <label className="theme" key="0">React</label>],
      description: "A javascript library for building user interfaces"
    };

    return (
      <div className="home-page">
        <PageTitle info={pageInfo}/>

        <div className="description">
        	<p>The purpose of this simple demo is to help developers that just started looking into react, like me. I am trying to make a demo app and I will try to use all the basic implementation, using react, of course. <Link to="setup" className="link">So let's get started</Link></p>
        </div>
      </div>
    );
  }
}

export default Home;
