import React, {Component} from 'react';
import { Link } from 'react-router';

class Setup extends Component{
  render(){
    return (
      	<div className="home-page">
	        <div className="title">
	        	<h1 className="logo-font"><label className="theme">Setting</label> it up</h1> <span>Let's get started</span>
	        </div>
          <divider />

          <div className="description">
            <p>I have created a simple react starter kit using webpack + babel as our compiler. Here is the <a href="https://github.com/wastefactory/react-starter-kit" target="_blank" className="link">link</a> of the github starter kit that I created speically just for you.</p>
            <div>So, There are two ways for getting started with this repository, if you are familiar with <a href="https://github.com/" target="_blank" className="link">git</a> here are the steps: </div>

            <div className="setup-code">
	            <code>> git clone https://github.com/wastefactory/react-starter-kit.git</code><br />
	            <code>> cd react-starter-kit</code><br />
	            <code>> npm install</code><br />
	            <code>> npm start</code><br />
	            <code>> go to http://localhost:8080/</code>            
            </div>

            <p>If you are not familiar with git, dont worry. We can just download the repository to your workspace. you can download the repo <a href="https://github.com/wastefactory/react-starter-kit" target="_blank" className="link">here</a>, and here are the steps:</p>
            <div className="setup-code">
	            <code>> cd react-starter-kit</code><br />
	            <code>> npm install</code><br />
	            <code>> npm start</code><br />
	            <code>> go to http://localhost:8080/</code>            
            </div>
            <p>Now let's take a look at the project files for us to familiarize with the structure and the flow on what's going on behind the app.</p>
            <p><img src="./images/behind_the_scenes.jpg" /></p>
            <p>So, now that you've got some idea on what happened behind the scenes. Now, let's take a look at <Link to="jsx" className="link">JSX</Link> and why we want to use it.</p>

          </div>
      	</div>
    );
  }  
}

export default Setup;