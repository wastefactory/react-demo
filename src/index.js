/*import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search/search_bar';
import VideoList from './components/video/video_list';
import VideoDetail from './components/video/video_detail';
const API_KEY = 'AIzaSyCBPdh8hzDrvmCPEuuGRHPF1cUya25PhGM';

class App extends Component{
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});			
	}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return(
			<div>
				<SearchBar onSearch={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
*/

import React from 'react';
import ReactDOM from 'react-dom';

// Notice that we've organized all of our routes into a separate file.
import Router from './router';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('container'));