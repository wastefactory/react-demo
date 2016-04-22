import React, {Component} from 'react';
import PageTitle from './../page_title';

class Routing extends Component{
  render(){

    const pageInfo = {
      title: ["React ", <label className="theme" key="0">Router</label>],
      description: "So, one of the most important thing for an app is routing states."
    };

    return (
      	<div className="home-page">
	        <PageTitle info={pageInfo}/>

        	<div className="description">
              <p>For the router, we need to use a library called <a className="link" href="https://github.com/reactjs/react-router" target="_blank">react-router</a>, it is a complete routing library for React and basically it is a component. Let{"'"}s try it.</p>

              <div className="setup-code">
                <code className="comment">{"// First we need to create 2 new components."}</code>
                <code className="comment">{"// And we can name it home.js and about.js and put it under 'src' folder"}</code>
              </div>

              <div className="setup-code">
                <code className="comment">{"// For home.js we can write a simple component that just returns 'This is my home page.'"}</code>
                <code className="comment">{"// Import react library"}</code>
                <code>{"import React from 'react';"}</code>
                <code>{""}</code>
                <code>{"const Home = () => {"}</code>
                <code><span className="indent">{"return <div>This is my home page.</div>;"}</span></code>
                <code>{"}"}</code>
                <code className="comment">{"// And then we need to export it so that we can import it and can be used on other components."}</code>
                <code>{"export default Home;"}</code>
              </div>

              <div className="setup-code">
                <code className="comment">{"// And for about.js let's write 'This is my about page.'"}</code>
                <code>{"import React from 'react';"}</code>
                <code>{""}</code>
                <code>{"const About = () => {"}</code>
                <code><span className="indent">{"return <div>This is my about page.</div>;"}</span></code>
                <code>{"}"}</code>
                <code>{"export default About;"}</code>
              </div>

              <div className="setup-code">
                <code className="comment">{"// And we also need to create a router component. we can just name it as simple as router.js and also put it under 'src' folder"}</code>
                <code className="comment">{"// Import react library and react-router library with the following components : Router, Route, browserHistory, IndexRoute"}</code>
                <code>{"import React from 'react';"}</code>
                <code>{"import { Router, Route, browserHistory, IndexRoute } from 'react-router';"}</code>
                <code>{""}</code>
                <code className="comment">{"// And then we need to import the 2 new components we just created."}</code>
                <code>{"import Home from './home';"}</code>
                <code>{"import About from './about';"}</code>
                <code>{""}</code>
                <code>{"const AppRouter = () => {"}</code>
                <code><span className="indent">{"return("}</span></code>
                <code><span className="indentTwo">{"<Router history={browserHistory}>"}</span></code>
                <code>{""}</code>
                <code className="comment">{"// And then we need to a path and add the components we imported."}</code>
                <code className="comment">{"// And also let's set home as the default page by setting '/' as the path."}</code>
                <code><span className="indentThree">{"<Route path='/' component={Home} />"}</span></code>
                <code><span className="indentThree">{"<Route path='about' component={About} />"}</span></code>
                <code><span className="indentTwo">{"</Router>"}</span></code>
                <code><span className="indent">{");"}</span></code>
                <code>{"}"}</code>
                <code>{"export default AppRouter;"}</code>
              </div>

              <div className="setup-code">
                <code className="comment">{"// And Finally let's open up index.js"}</code>
                <code>{"import React from 'react';"}</code>
                <code>{"import ReactDOM from 'react-dom';"}</code>
                <code>{""}</code>
                <code className="comment">{"// Let's import our router component."}</code>
                <code>{"import AppRouter from './router';"}</code>
                <code>{""}</code>
                <code className="comment">{"// And now we can remove this functional component since we already have 2 separate components for home and about"}</code>
                <code className="comment">{"// const App = () => {"}</code>
                <code className="comment"><span className="indent">{"// return <div>Hi there!</div>;"}</span></code>
                <code className="comment">{"// }"}</code>
                <code>{""}</code>
                <code className="comment">{"// And instead of rendering the App component, we now render our router component."}</code>
                <code>{"ReactDOM.render(<AppRouter />, document.getElementById('container'));"}</code>
                <code className="comment">{"// And that's it."}</code>
              </div>
              <p>Let's check it out, let's open our browser and go to <code>http://localhost:8080</code> and we should be able to see 'This is my home page.' as we set home as our default page, and if you go to <code>http://localhost:8080/about</code> you should be able to see 'This is my about page.'</p>
        	</div>
      	</div>
    );
  }
}

export default Routing;
