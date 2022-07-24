import React from 'react';

const VideoDetail = (props) => {
    if(!props.myselectedVideo){
        return <div> Loading </div>
    }
    
    const videoSrc = `https://www.youtube.com/embed/${props.myselectedVideo.id.videoId}`;

    
    return(
        
        <div className='ui segment'>
            <div className='ui embed'>
                <iframe src={videoSrc} title='hey' />
            </div>
            <h4 className='ui header'> {props.myselectedVideo.snippet.title} </h4> 
            <p>
                {props.myselectedVideo.snippet.description}
            </p>
            
        </div>
    )
    
}

export default VideoDetail;