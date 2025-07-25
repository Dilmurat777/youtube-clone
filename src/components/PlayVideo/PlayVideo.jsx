import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
	<div className='play-video'>
		  <video src={video1} controls autoPlay muted></video>
		  <h3>Best Youtube chanel To learn Web Development</h3>
		  <div className="play-video-info">
			  <p>1535 Views &bull; 2 days ago</p>
			  <div>
				  <span><img src={like} alt="" />125</span>
				  <span><img src={dislike} alt="" />5</span>
				  <span><img src={share} alt="" />Share</span>
				  <span><img src={save} alt="" />Save</span>
			  </div>
		  </div>
		  <hr />
		  <div className="publisher">
			  <img src={jack} alt="" />
			  <div>
				  <p>Mr Dilmurat Stack</p>
				  <span>1m Subscribers</span>
			  </div>
			  <button>Subscribe</button>
		  </div>
		  <div className="vid-description">
			  <p>Channel that makes learning Easy</p>
			  <p>Subscribe Mr Dilnmurat to watch more Tutorial on web development</p>
			  <hr />
			  <h4>130 comments</h4>
			  <div className="comments">
				  <img src={user_profile} alt="" />
				  <div>
					  <h3>Jack Nicholson <span>1 day ago</span></h3>
					  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto incidunt, quasi amet distinctio rerum quae? Fuga, voluptas nam temporibus asperiores veniam molestias. Sequi iusto corporis doloremque doloribus aut et.</p>
					  <div className="comments-action">
						  <img src={like} alt="" />
						  <span>244</span>
						  <img src={dislike} alt="" />
					  </div>
				  </div>
			  </div>
			  <div className="comments">
				  <img src={user_profile} alt="" />
				  <div>
					  <h3>Jack Nicholson <span>1 day ago</span></h3>
					  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto incidunt, quasi amet distinctio rerum quae? Fuga, voluptas nam temporibus asperiores veniam molestias. Sequi iusto corporis doloremque doloribus aut et.</p>
					  <div className="comments-action">
						  <img src={like} alt="" />
						  <span>244</span>
						  <img src={dislike} alt="" />
					  </div>
				  </div>
			  </div>
			  <div className="comments">
				  <img src={user_profile} alt="" />
				  <div>
					  <h3>Jack Nicholson <span>1 day ago</span></h3>
					  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto incidunt, quasi amet distinctio rerum quae? Fuga, voluptas nam temporibus asperiores veniam molestias. Sequi iusto corporis doloremque doloribus aut et.</p>
					  <div className="comments-action">
						  <img src={like} alt="" />
						  <span>244</span>
						  <img src={dislike} alt="" />
					  </div>
				  </div>
			  </div>
			  <div className="comments">
				  <img src={user_profile} alt="" />
				  <div>
					  <h3>Jack Nicholson <span>1 day ago</span></h3>
					  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto incidunt, quasi amet distinctio rerum quae? Fuga, voluptas nam temporibus asperiores veniam molestias. Sequi iusto corporis doloremque doloribus aut et.</p>
					  <div className="comments-action">
						  <img src={like} alt="" />
						  <span>244</span>
						  <img src={dislike} alt="" />
					  </div>
				  </div>
			  </div>
		  </div>
	</div>
  )
}

export default PlayVideo
