import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



class LikeButton extends React.Component {
  // must super
  constructor(props) {
    super(props)
    // state
    this.state = {
      likeState1: 'Like',
    
      likeCount1: 106,
      comment: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'Comment'
    } 
    
  }
  
  
  render() {
    return (
     
      <div className="like-social">
      <div className="open_video_likes_div">
            <span className="open_video_likes_count"> 109 Views | {this.state.likeCount1} likes | 22 Comments | </span> 
            <i className={this.state.heart}></i>
          </div> 
          <div className="open_video_likes">
          <span class="comment">
            <button className="myButton" onClick={this.changeState.bind(this)}>{this.state.likeState1}</button>{this.state.comment}
            </span>
          </div>

        
        </div> 
      )
  }


changeState(event) {
  if (this.state.likeState1 === 'Like') {
    this.setState({
      likeCount1: this.state.likeCount1 + 1,
      likeState1: 'Unlike',
    })
  } else {
    this.setState({
      likeCount1: this.state.likeCount1 - 1,
      likeState1: 'Like',
    })
  }
}


};



class LikeButton1 extends React.Component {
  // must super
  constructor(props) {
    super(props)
    // state
    this.state = {
      likeState: 'Share',
      likeCount: 7,
    } 
  }
  render() {
    return (
      <div className="like-social1">
      <div className="open_video_likes_div">
            <span className="open_video_likes_count1"> {this.state.likeCount} shares </span> 
            <i className={this.state.heart}></i>
          </div> 
          <div className="open_video_likes">
            <button className="myButton1" onClick={this.changeState.bind(this)}>{this.state.likeState}</button>
          </div>

        
        </div> 
      )
  }


changeState(event) {
  if (this.state.likeState === 'Share') {
    this.setState({
      likeCount: this.state.likeCount + 1,
      likeState: 'Unshare',
    })
  } else {
    this.setState({
      likeCount: this.state.likeCount - 1,
      likeState: 'Share',
    })
  }
}
};
ReactDOM.render(<LikeButton />, document.getElementById('app'));
ReactDOM.render(<LikeButton1 />, document.getElementById('share'));








