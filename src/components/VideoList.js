import React from 'react'; 
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.videos.map((video) => {
            return(
                <div key={video.snippet.title} className='ui relaxed divided list'>
                    
                    <VideoItem onSelectedVid = {props.methodSelectedVid} videoData = {video} />
                </div>

            )
            
    })



    return(
        
        <div> {renderedList} </div>
    )

}
export default VideoList;