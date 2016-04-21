import React, {Component} from 'react';

class ReactComponent extends Component{
  render(){
    return (
      	<div className="home-page">
	        <div className="title">
	        	<h1 className="logo-font">Writing <label className="theme">Components</label></h1> <span>Let's start writing our first simple component</span>
	        </div>
          <divider />

        	<div className="description">
        		<p>So before we start, what is React and what's it doing for us and how are we gonna use it with any type of application? React is a javascript library that is used to produce HTML that is shown to the user in a web browser, so when we are writing react code, we are writing individual components. A component is a collection of javascript function that produces HTML.</p>
            <p>So, let's start, first let's go to our project files and open <code>src/index.js</code></p>
            <div className="setup-code">
              <code className="comment">{"// Import react module"}</code>
              <code>{"import React from 'react';"}</code>
              <code>{"import ReactDOM from 'react-dom';"}</code>
            </div>

            <div className="setup-code">
              <code className="comment">{"// App Component. This should produce some HTML"}</code>
              <code className="comment">{"// '<div>Hi there!</div>' : this HTML looking code is what we refer to as JSX."}</code>
              <code>{"const App = () => {"}</code>
              <code><span className="indent">{"return <div>Hi there!</div>;"}</span></code>
              <code>{"}"}</code>
            </div>

            <div className="setup-code">
              <code className="comment">{"// To render our component we need to use ReactDOM.render"}</code>
              <code className="comment">{"// Create component instance which is in this example the 'App' component and pass it to ReactDOM.render as the first argument"}</code>
              <code className="comment">{"// wrap the 'App' component in JSX which will look like '<App />' and it will create a component instance"}</code>
              <code className="comment">{"// wrapping our 'App' component in JSX will look something like this when transpiled : "}</code>
              <code className="comment">{"// React.createElement(App, null); "}</code>
            </div>

            <div className="setup-code">
              <code className="comment">{"// Then we need to find an element where we want to render our component and pass it as our reatDOM's second argument."}</code>
              <code className="comment">{"// In our index.html we already have a div element that has a 'container' id which is our root element node of the entire react app."}</code>
              <code className="comment">{"// We will just need to pass that element to ReactDOM as a second argument which will look something like: 'document.getElementById('container')'"}</code>
            </div>

            <div className="setup-code">
              <code className="comment">{"// Takes this component's generated HTML and put it into the DOM"}</code>
              <code className="comment">{"// So, it's basically telling ReactDOM to find that element that has 'container' id and try to render the App component into that element."}</code>
              <code>{"ReactDOM.render(<App />, document.getElementById('container'));"}</code>
            </div>  

            <p>So, we can try and check if it's working. First let's make sure our server is up and running, if not just run 'npm start' on the project directory and open our browser and go to<code>http://localhost:8080</code> and we should be able to see 'Hi there!' on the page.</p>          
        	</div>
      	</div>
    );
  }  
}

export default ReactComponent;