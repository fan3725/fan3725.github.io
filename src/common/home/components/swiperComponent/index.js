import React, {Component} from 'react'
import { SwiperWrapper } from './style'
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import store from '../../../../store'

class SwiperComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {bannerImgList: []}
    this.getSliders = this.getSliders.bind(this)
    this.swiperEffects = this.swiperEffects.bind(this)
  }

  componentDidMount() {
    const mySwiper = new Swiper('.swiper-container', swiperConfig)
    this.swiperEffects(mySwiper)
    // 此时尚未获得sbanner数据
    // console.log(this.props.swiperBanners)
  }

  render() {
    const { swiperImgUrls } = this.props
    return (
      <SwiperWrapper>
        <div className="swiperContent">
          <div className="swiper-container">
            <div className="swiper-wrapper" >
              {this.getSliders(swiperImgUrls)}
            </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev hide"></div>
            <div className="swiper-button-next hide"></div>

            </div>
        </div>
      </SwiperWrapper>
    )
  }

  // map方法得到轮播item
  getSliders(swiperArrProp) {
    let swiperArr = []
    for(let key in swiperArrProp) {
      if(key!=='0')
      swiperArr.push(
        <div className="swiper-slide" key={key} onClick={this.handleSwiperClick.bind(this, key)}>
          <a href={"/song?id="+key}></a>
          <img src={swiperArrProp[key]} style={{height:'258px',width:'730px'}} alt={key}></img>
        </div>
      )
    }
    return swiperArr
  }

  // 移入鼠标显示轮播箭头
  swiperEffects(mySwiper) {
    mySwiper.el.onmouseover=function(){
      mySwiper.navigation.$nextEl.removeClass('hide');
      mySwiper.navigation.$prevEl.removeClass('hide');
    }
    mySwiper.el.onmouseout=function(){
      mySwiper.navigation.$nextEl.addClass('hide');
      mySwiper.navigation.$prevEl.addClass('hide');
    }
  }

  // 播放音乐
  async handleSwiperClick(id) {
    const action = {
      type: 'change_mp3_id',
      mp3_id: id
    }
    store.dispatch(action)
  }
}

// swiper配置
const swiperConfig = {
  direction: 'horizontal',//水平轮播
  loop: true,//无缝轮播
  pagination: {//小圆点分页
      el: '.swiper-pagination',
  },
  navigation: {//左右分页
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  observer:true,
  observeParents:true,
  autoplay:true
}

export default SwiperComponent