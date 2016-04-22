import React from 'react';

const PageTitle = ({info}) => {

	return(
    <div className="page-title">
      <h1 className="logo-font">{info.title}</h1> <span>{info.description}</span>
    </div>
  );
};

export default PageTitle;
