import React, {Component} from 'react';
import Header from './header';

class MainLayout extends Component{
  render(){
    return (
      <div className="app">
        <Header />
        <div id="content">
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default MainLayout;
