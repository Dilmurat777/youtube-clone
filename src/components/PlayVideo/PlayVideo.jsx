import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { useEffect, useState } from 'react';
import { API_KEY, valueConverter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const { videoId } = useParams();

  const fetchVideoData = async () => {
    //Fetching data from api
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchChannelData = async () => {
    if (!apiData || !apiData.snippet) {
      return;
    }
    //Fetching data from api
    const videoChannelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

    await fetch(videoChannelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
    //Fetching comment Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);
  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
      <h3>{apiData ? apiData.snippet.localized.title : 'Title here'}</h3>
      <div className="play-video-info">
        <p>
          {valueConverter(apiData ? apiData.statistics.viewCount : '0')} Views &bull;{' '}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? valueConverter(apiData.statistics.likeCount) : '155'}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : { user_profile }}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : 'Channel Name'}</p>
          <span>
            {channelData ? valueConverter(channelData.statistics.subscriberCount) : '10'} Subscribe
          </span>
        </div>
        <button>Subscribers</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Description Here'}</p>

        <hr />
        <h4>{apiData ? valueConverter(apiData.statistics.commentCount) : '10'} comments</h4>
        {commentData.map((comment) => {
          return (
            <div key={comment.id} className="comments">
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>
                  {comment.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span>
                </h3>
                <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                <div className="comments-action">
                  <img src={like} alt="" />
                  <span>{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
