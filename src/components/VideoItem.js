import React from 'react';

const VideoItem = ({onSelectedVid, videoData}) => {
    return(
        <div  key={videoData.snippet.title} className='item video-item' onClick={() => onSelectedVid(videoData)}>
            <img className='ui image' src={videoData.snippet.thumbnails.medium.url} alt={videoData.snippet.title} />
            <div className='content'>
                <div className='header pad'>
                    {videoData.snippet.title} 
                </div>  
            </div>
        </div>
    )
}
export default VideoItem;
