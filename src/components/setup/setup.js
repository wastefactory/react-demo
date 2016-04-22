import React, {Component} from 'react';
import { Link } from 'react-router';
import PageTitle from './../page_title';

class Setup extends Component{
  render(){

    const pageInfo = {
      title: [<label className="theme" key="0">Setting</label>, " it up"],
      description: "Let's get started"
    };

    return (
      	<div className="home-page">
	        <PageTitle info={pageInfo}/>

          <div className="description">
            <p>I have created a simple react starter kit using webpack + babel as our compiler. Here is the <a href="https://github.com/wastefactory/react-starter-kit" target="_blank" className="link">link</a> of the github starter kit that I created specially just for you.</p>
            <div>So, There are two ways for getting started with this repository, if you are familiar with <a href="https://github.com/" target="_blank" className="link">git</a> here are the steps: </div>


            <div className="setup-code">
              <code className="comment">{"// First we need to clone the react-starter-kit repo to your workspace."}</code>
              <code className="comment">{"// Then we need to install the project dependencies by running 'npm install'"}</code>
              <code className="comment">{"// After installing all dependencies we then can run the app by running 'npm start'"}</code>
              <code className="comment">{"// 'npm start' will start our boilerplate package and run a local server from which we can view the output of our project."}</code>
            </div>

            <div className="setup-code">
              <code>> git clone https://github.com/wastefactory/react-starter-kit.git</code>
	            <code>> cd react-starter-kit</code>
	            <code>> npm install</code>
	            <code>> npm start</code>
	            <code>> go to http://localhost:8080/</code>
            </div>

            <p>If you are not familiar with git, dont worry. We can just download the repository to your workspace. you can download the repo <a href="https://github.com/wastefactory/react-starter-kit" target="_blank" className="link">here</a>, and here are the steps:</p>
            <div className="setup-code">
	            <code>> cd react-starter-kit</code>
	            <code>> npm install</code>
	            <code>> npm start</code>
	            <code>> go to http://localhost:8080/</code>
            </div>
            <p>Now let's take a look at the project files for us to familiarize with the structure and the flow on what's going on behind the app.</p>
            <p><img src="./images/behind_the_scenes.jpg" /></p>
            <p>So, now that you've got some idea on what will happen behind the scenes. Now, let's take a look at <Link to="jsx" className="link">JSX</Link> and why we want to use it.</p>

          </div>
      	</div>
    );
  }
}

export default Setup;
