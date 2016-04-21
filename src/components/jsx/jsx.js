import React, {Component} from 'react';
import { Link } from 'react-router';

class JSX extends Component{
  render(){
    return (
      	<div className="home-page">
	        <div className="title">
	        	<h1 className="logo-font">Using <label className="theme">JSX</label></h1> <span>A XML-like syntax extension to ECMAScript without any defined semantics.</span>
	        </div>
          <divider />

          <div className="description">
            <p>This Demo uses <a href="http://es6-features.org/" target="_blank" className="link">ES6</a>, <a className="link" href="https://facebook.github.io/jsx/" target="_blank">JSX</a> and webpack+babel to tranlate JSX and ES6 codes into actual Vanilla Javascript that the browser can understand.</p>
            <p><code>{"<div>Hi there!</div>"}</code> : this HTML looking code is what we refer to as JSX. It is a subset or a dialect in javascript that allows us to write what looks like HTML inside in our javascript code but is really just javascript. So, what is the purpose of JSX and why do we use it? we use JSX because this is what produces the actual HTML that gets inserted into the DOM. I'll show you an example on why using JSX is much better using <a className="link" href="http://babeljs.io/repl/#?evaluate=true&presets=es2015%2Creact%2Cstage-2&code=const%20App%20%3D%20function()%20%7B%0A%20%20return%20%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%3B%0A%7D" target="_blank">babeljs.io</a> which is our transpiler for this demo app.</p>
            <p><img src="./images/jsx.jpg" /></p>
            <div>As you can see on the above example, on the left you can see JSX and on the write its transformed into a pure javascript that the browser can understand and it also called react's createElement function with first argument as the tag which is 'div' and the third argument as the value which is 'Hi!', using JSX on react is much easier and concise. it's much more understandable, and this is what the user sees when it is rendered on the DOM.</div>

            <p>JSX can also be nested inside itself. <a className="link" href="http://babeljs.io/repl/#?evaluate=true&presets=es2015%2Creact%2Cstage-2&code=const%20App%20%3D%20function()%20%7B%0A%20%20return%20%3Cdiv%3E%0A%20%20%20%20%3Cspan%3EHello%20World!%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3Ethis%20is%20a%20demo%20app%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3Eand%20its%20great%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%3B%0A%7D" target="_blank">babeljs.io nested jsx</a></p>
            <p><img src="./images/jsx_nested.jpg" /></p>
            <p>So, as our component starts to get more complex with alot more jsx inside that produces more html, the javascript that gets produced gets more complicated as well. So, thats the purpose of JSX, is to make our component more cleaner and concise.</p>
            <p>Now, let's start writing our first react <Link to="component" className="link">component</Link>.</p>
          </div>
      	</div>
    );
  }  
}

export default JSX;