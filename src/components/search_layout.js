import React, {Component} from 'react';

class SearchLayout extends Component{
  render(){
    return (
      <div className="search">
        <header className="search-header" />
        <div className="search-results">
          {this.props.children}
        </div>
        <footer className="search-footer" />
      </div>
    );
  }
}

export default SearchLayout;