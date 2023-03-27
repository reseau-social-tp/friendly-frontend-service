import '../styles/home.css';
import toko from "../assets/images/toko.jpg"
import pat from "../assets/images/pat.jpg"
import parfait from "../assets/images/parfait.jpg"
import userIcon from "../assets/images/user.svg"
import {
    faThumbsUp,
    faMessage,
    faShare,
    faVideoCamera,
    faPhotoVideo,
    faFaceLaughBeam
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home(props) {

    return (
        
        <div className="feed">
            <div className="storyReel">
                <div style={{backgroundImage:`url(${toko})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Toko Ekambi</h4>
                </div>
                <div style={{backgroundImage:`url(${toko})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Toko Ekambi</h4>
                </div>
                <div style={{backgroundImage:`url(${toko})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Toko Ekambi</h4>
                </div>
                <div style={{backgroundImage:`url(${toko})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Toko Ekambi</h4>
                </div>
                <div style={{backgroundImage:`url(${pat})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Pat</h4>
                </div>
                <div style={{backgroundImage:`url(${pat})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Somanath Goudar</h4>
                </div>
                <div style={{backgroundImage:`url(${toko})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Somanath Goudar</h4>
                </div>
                <div style={{backgroundImage:`url(${parfait})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Parfait</h4>
                </div>
                <div style={{backgroundImage:`url(${toko})`}} className="story" >
                    <img
                        className="user-avatar story-avatar"
                        src={userIcon}
                        alt=""
                    />
                    <h4>Somanath Goudar</h4>
                </div>
                
            </div>


        <div className="messageSender">
            <div className="messageSender__top">
            <img
                className="user-avatar story-avatar"
                src={userIcon}
                alt=""
            />
            <form>
                <input className="messageSender__input" placeholder="What's on your mind?" type="text" />
            </form>
            </div>

            <div className="messageSender__bottom">
            <div className="messageSender__option">
                <FontAwesomeIcon
                icon={faVideoCamera}
                color="red"
                className="icon"
                />  
                <h3>Live</h3>
            </div>

            <div className="messageSender__option">
                <FontAwesomeIcon
                icon={faPhotoVideo}
                color="green"
                className="icon"
                />  
                <h3>Photo</h3>
            </div>

            <div className="messageSender__option">
                <FontAwesomeIcon
                icon={faFaceLaughBeam}
                color="orange"
                className="icon"
                />  
                <h3>Feeling</h3>
            </div>
            </div>
        </div>
        


        <div className="post">
            <div className="post__top">
            <img
                className="user-avatar story-avatar"
                src={userIcon}
                alt=""
            />
            <div className="post__topInfo">
                <h3>Somanath Goudar</h3>
                <p>25 April at 20:30</p>
            </div>
            </div>

            <div className="post__bottom">
            <p>Message</p>
            </div>

            <div className="post__image">
            <img
                src={toko}
                alt=""
            />
            </div>

            <div className="post__options">
            <div className="post__option">
                <FontAwesomeIcon
                icon={faThumbsUp}
                color="gray"
                className="icon"
                />  
                <p>Like</p>
            </div>

            <div className="post__option">
                <FontAwesomeIcon
                icon={faMessage}
                color="gray"
                className="icon"
                /> 
                <p>Comment</p>
            </div>

            <div className="post__option">
                <FontAwesomeIcon
                icon={faShare}
                color="gray"
                className="icon"
                /> 
                <p>Share</p>
            </div>
            </div>
        </div>
        
        <div className="post">
            <div className="post__top">
            <img
                className="user-avatar story-avatar"
                src={userIcon}
                alt=""
            />
            <div className="post__topInfo">
                <h3>Somanath Goudar</h3>
                <p>25 April at 20:30</p>
            </div>
            </div>

            <div className="post__bottom">
            <p>Post Without Image</p>
            </div>

            <div className="post__options">
            <div className="post__option">
                <span className="material-icons"> thumb_up </span>
                <p>Like</p>
            </div>

            <div className="post__option">
                <span className="material-icons"> chat_bubble_outline </span>
                <p>Comment</p>
            </div>

            <div className="post__option">
                <span className="material-icons"> near_me </span>
                <p>Share</p>
            </div>
            </div>
        </div>
        
        <div className="post">
            <div className="post__top">
            <img
                className="user-avatar story-avatar"
                src={userIcon}
                alt=""
            />
            <div className="post__topInfo">
                <h3>Somanath Goudar</h3>
                <p>25 April at 20:30</p>
            </div>
            </div>

            <div className="post__bottom">
            <p>Message</p>
            </div>

            <div className="post__image">
            <img src="https://wallpapercave.com/wp/wp7357832.jpg" alt="" />
            </div>

            <div className="post__options">
            <div className="post__option">
                <span className="material-icons"> thumb_up </span>
                <p>Like</p>
            </div>

            <div className="post__option">
                <span className="material-icons"> chat_bubble_outline </span>
                <p>Comment</p>
            </div>

            <div className="post__option">
                <span className="material-icons"> near_me </span>
                <p>Share</p>
            </div>
            </div>
        </div>
        
        </div>
    );
}
