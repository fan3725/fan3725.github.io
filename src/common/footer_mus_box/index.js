import React, { Component } from 'react'
import store from '../../store'
import axios from 'axios'
import './style.css'

class FooMus extends Component {
  constructor(props) {
    super(props)
    this.state = {musComponent: ''}
    store.subscribe(()=>{
      // console.log(store.getState().mp3_id)
      axios.get(`/song/url?id=${store.getState().mp3_id}`).then(
        res => {
          this.setState(
            {musComponent: res.data.data[0].url},
            // 在setState的回调中重新加载audio组件就可以实现动态修改src并生效
            ()=>{this.audioRef.load()}
          )
        }
      )
    })
  }
  render() {
    return (
      <div className="audio-div">
        <audio controls className="audio" autoPlay={true} ref={audioRef => { this.audioRef=audioRef }}>
          <source src={this.state.musComponent} type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}

export default FooMus