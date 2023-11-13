const VideoList = ({ videos }) => {
    return (
      <div>
        {videos.map(video => <VideoItem key={video.id} video={video} />)}
      </div>
    );
  };

// VideoList.jsx
export default VideoList;