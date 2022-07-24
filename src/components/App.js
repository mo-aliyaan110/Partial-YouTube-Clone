import React from 'react';
import YoutubeApi from '../api/YoutubeApi';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './VideoItem.css';

class App extends React.Component{
    state = {term : [], selectedVideo: null}

    updatedTerm = async(term) => {
        const data = await YoutubeApi.get('youtube/v3/search', {
            params : {
                q : term,
            }
        })
        this.setState({term : data.data.items});
        this.setState({selectedVideo : data.data.items[0]})
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo : video});
    }

    componentDidMount(){
        this.updatedTerm('dubai');
    }
    render(){
        
        
        return(
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar updateTerm = {this.updatedTerm} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail myselectedVideo = {this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList methodSelectedVid = {this.onVideoSelect} videos = {this.state.term} style={{display: 'flex', alignSelf: 'flex-end'}} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App