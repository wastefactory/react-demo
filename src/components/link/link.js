import React, {Component} from 'react';
import PageTitle from './../page_title';

class Link extends Component{
render(){

  const pageInfo = {
    title: ["Linking ", <label className="theme" key="0">Routers</label>],
    description: "Now let's create a link for our routers."
  };

  return (
    	<div className="home-page">
        <PageTitle info={pageInfo}/>

        <div className="description">
          <p>Hold your horses, I{"'"}m working on it</p>
        </div>
    	</div>
  );
}
}

export default Link;
