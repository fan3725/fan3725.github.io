import React, {Component} from 'react'
import axios from 'axios'
import SwiperComponent from './components/swiperComponent'
import Body from './components/body'

axios.defaults.baseURL='http://localhost:3001'

class Home extends Component {
  constructor(props) {
    super(props)
    this.getBanner = this.getBanner.bind(this)
    this.getSwiperImgUrls = this.getSwiperImgUrls.bind(this)
    this.getHotSongLists = this.getHotSongLists.bind(this)
    this.getNewCdList = this.getNewCdList.bind(this)
    this.getTopList = this.getTopList.bind(this)
    this.state = {swiperBanners: [], swiperImgUrls: [], hotCmdList: [], newCdList: [], topList: []}
  }

  componentDidMount() {
    this.getBanner()
    this.getHotSongLists()
    this.getNewCdList()
    this.getTopList()
    // axios.get('/lyric?id=33894312').then(res=>{console.log(res)})
  }

  render() {
    return (
      <>
        <SwiperComponent swiperImgUrls = {this.state.swiperImgUrls}/>
          <Body
            hotCmdList = {this.state.hotCmdList}
            newCdList = {this.state.newCdList}
            topList = {this.state.topList}
          />
      </>
    )
  }

  // 获取轮播
  getBanner() {
    console.log('heheda')
    axios.get('/banner').then(res => {
      let banners = res.data.banners
      // console.log('banner', banners)
      let urlList = this.getSwiperImgUrls(banners)
      this.setState({swiperBanners: banners, swiperImgUrls: urlList})
    })
  }

  // 处理得到img及tartgetId
  getSwiperImgUrls(banners){
    let swiperObj = {}
    // swiperObj:{ songId: imgUrl }
    for(let i in banners) {
      swiperObj[banners[i].targetId] = banners[i].imageUrl
    }
    return swiperObj
  }

  // 获取热门歌单
  async getHotSongLists() {
    let res = await axios.get('/personalized?limit=8')
    this.setState({hotCmdList: res.data.result})
  }

  // 获得新碟上架列表
  async getNewCdList() {
    let res = await axios.get('/top/album?limit=5')
    this.setState({newCdList: res.data.albums})
  }

  // 获得榜单
  async getTopList() {
    let {data: res0} = await axios.get('/top/list?idx=3')
    let {data: res1} = await axios.get('/top/list?idx=0')
    let {data: res2} = await axios.get('/top/list?idx=2')
    this.setState({topList: [res0.playlist, res1.playlist, res2.playlist]})
  }
}

export default Home