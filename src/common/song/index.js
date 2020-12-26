import React, {Component} from 'react'
import { SongWrapper, LeftImg, RightDetail, SongPageRight } from './style'
import axios from 'axios'
import store from '../../store'

class Song extends Component {
  constructor(props) {
    super(props)
    this.getLyric = this.getLyric.bind(this)
    this.handleExt = this.handleExt.bind(this)
    this.handleShorten = this.handleShorten.bind(this)
    this.setSongdetail = this.setSongdetail.bind(this)
    this.getSimilarSongList = this.getSimilarSongList.bind(this)
    this.getSimilarSongs = this.getSimilarSongs.bind(this)
    this.state = {lyricList: [], songdetail: {}, similarSongList: [], similarSongs: []} 
  }
  componentDidMount() {
    // 获得song的id
    let songId = this.props.location.search.split('=')[1]

    // 正则切掉【时间】得到文章
    let reg = /\[\d{2}:\d{2}.\d{2,3}\]/g
    axios.get(`/lyric?id=${songId}`).then(res=>{
      let  txt = res.data.lrc.lyric
      this.setState({lyricList: txt.split(reg)})
    })

    // 歌曲详情
    axios.get(`/song/detail?ids=${songId}`).then(
      res => {
        this.setSongdetail(res)
      }
    )

    // 获取相似歌单数据
    axios.get(`/simi/playlist?id=${songId}`).then(
      res => {
        this.setState({similarSongList: res.data.playlists})
        console.log(res.data.playlists)
      }
    )

    axios.get(`/simi/song?id=${songId}`).then(
      res => {
        this.setState({similarSongs: res.data.songs})
        console.log(res.data)
      }
    )
  }
  render() {
    return (
      <SongWrapper>
        <div className="contain-wrapper">
          <div className="mainbody-wrapper">
            <LeftImg>
              <div className="img-div">
                <img src={this.state.songdetail.imgUrl} alt=""></img>
              </div>
            </LeftImg>
            <RightDetail>
              <div className="song-tit">
                <div className="tit-top">
                  <div className="label">单曲</div>
                  <div className='tit-text'>
                    <div className="txt-top">{this.state.songdetail.album}</div>
                    <div className="txt-bottom">{this.state.songdetail.alia?this.state.songdetail.alia:''}</div>
                  </div>
                </div>
                <div className="tit-bottom">
                  <div className="author">
                    <p>歌手 :</p>
                    <p>{this.state.songdetail.singer}</p>
                  </div>
                  <div className="album">
                    <p>所属专辑 :</p>
                    <p>{this.state.songdetail.album}</p>
                  </div>
                  <div className="song-opt">
                    <div className="play" onClick={this.handlePlayClick.bind(this, this.state.songdetail.id)}>播放</div>
                    <div className="symbol">+</div>
                    <div className="col-sh-dw-com">收藏</div>
                    <div className="col-sh-dw-com">分享</div>
                    <div className="col-sh-dw-com">下载</div>
                    <div className="col-sh-dw-com">评论</div>
                  </div>

                </div>
                
              </div>
              <div className="lyric-container">
                {this.state.lyricList.length?this.getLyric(this.state.lyricList):''}
              </div>
              <div
              className="extend-lyric"
              onClick={
                (e) => {
                  const txt = e.target.innerText
                  if(txt === '展开') {
                    this.handleExt(e)
                  } 
                  if(txt === '收起') {
                    console.log('zz')
                    this.handleShorten(e)
                  }
                }
              }>
              展开
              </div>
              <div style={{height:'5000px'}}></div>
            </RightDetail>
          </div>

          <SongPageRight>
            <div className="similar-album">
              <div className="tit">包含这首歌的歌单</div>
              {this.state.similarSongList.length?this.getSimilarSongList():''}
            </div>
            <div className="similar-song">
              <div className="tit">相似歌曲</div>
              {this.getSimilarSongs()}
            </div>
          </SongPageRight>
        </div>
      </SongWrapper>
    )
  }
  // 得到文章布局
  getLyric(lyricList) {
    let akey = 0
    return lyricList.map((txt, index) => {
      if(txt!=='') {
        return <div key={akey++} className={index<20?'lyric-sty': 'hid lyric-sty'}>{txt}</div>
      }
    })    
  }
  // 展开
  handleExt(e) {
    // 合成事件导致下面这句话会随着for循环一起重新执行。
    let hidArr = document.getElementsByClassName('hid')
    const len = hidArr.length
    for(let i=0; i<len; i++) {
      hidArr[0].className = 'lyric-sty'
    }
    e.currentTarget.innerText = '收起'
  }

  // 收起
  handleShorten(e) {
    let hidArr = document.getElementsByClassName('lyric-sty')
    const len = hidArr.length
    for(let i=len; i>20; i--) {
      hidArr[hidArr.length-1].className = 'hid'
    }
    e.currentTarget.innerText = '展开'
  }

  // 点击播放
  handlePlayClick(id) {
    store.dispatch({
      type: 'change_mp3_id',
      mp3_id: id
    })
  }

  // 请求得到songdetail
  setSongdetail = (res) => {
    let obj = {}
    let songDet = res.data.songs[0]
    obj.singer = songDet.ar[0].name
    obj.songName = songDet.name
    obj.album = songDet.al.name
    obj.imgUrl = songDet.al.picUrl
    obj.alia = songDet.alia[0]
    obj.id = songDet.id
    this.setState({songdetail: obj})
  }

  // 创建相似歌单布局
  getSimilarSongList() {
    return this.state.similarSongList.map(item => (
      <div className="simi-album-contain" key={item.id}>
        <div className="s-a-c-img">
          <img src={item.coverImgUrl}></img>
        </div>
        <div className="s-a-c-right">
          <div className="s-a-c-name">{item.name}</div>
          <div className="s-a-c-singer">{item.creator.nickname}</div>
        </div>
      </div>
    ))
  }

  // 创建相似音乐布局
  getSimilarSongs() {
    return this.state.similarSongs.map(item =>(
      <div className="si-so-wrapper">
        <div className="si-so-wr-left">
          <div className="song-name">{item.name}<a href={"/song?id="+item.id}></a></div>
          <div className="singer">{item.artists[0].name}</div>
        </div>
        <div className="si-so-wr-right iconfont play" onClick={this.handlePlayClick.bind(this, item.id)}>&#xe619;</div>
        <div className="si-so-wr-right iconfont add">&#xe603;</div>
      </div>
    ))
  }
}



export default Song