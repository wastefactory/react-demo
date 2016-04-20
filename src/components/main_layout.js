import React, {Component} from 'react';
import { Link } from 'react-router';

class MainLayout extends Component{
  render(){
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul className="nav-bar">
            <li className="logo"><Link to="/" className="theme">React Demo</Link></li>
            <li><Link to="setup" activeClassName="active">Setup</Link></li>
            <li><Link to="render" activeClassName="active">Render</Link></li>
            <li><Link to="jsx" activeClassName="active">JSX</Link></li>
            <li><Link to="route" activeClassName="active">Route</Link></li>
            <li><Link to="users" activeClassName="active">Users</Link></li>
            <li className="author"><a href="https://github.com/wastefactory" target="_blank"><i className="fa fa-github"></i></a></li>
          </ul>
        </aside>

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