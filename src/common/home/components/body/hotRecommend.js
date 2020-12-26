import React from 'react'
import { HotCmdTitle, TitleIcon, TitleContent, More, HotCmdBody } from './style'

function HotRecommend (props) {
  let hotCmdList = props.hotCmdList
    return (
      <div>
        <HotCmdTitle>
          <TitleIcon>
            <span className="iconfont">&#xe661;</span>
          </TitleIcon>
          <TitleContent>
            <div className="titleText">热门推荐</div>
          </TitleContent>
          <div className="tab">
            <a href="/#">华语</a>
            <span>|</span>
            <a href="/#">流行</a>
            <span>|</span>
            <a href="/#">摇滚</a>
            <span>|</span>
            <a href="/#">民谣</a>
            <span>|</span>
            <a href="/#">电子</a>
          </div>
          <More>
            <a href="/#">更多</a>
            <span className="iconfont">&#xe600;</span>
          </More>
        </HotCmdTitle>
        <HotCmdBody>
          {productCmdContent(hotCmdList)}
        </HotCmdBody>
      </div>
    )
}

const productCmdContent = (hotCmdList) => {
  if(hotCmdList.length) {
    return hotCmdList.map(item => (
      <li key={item.id}>
        <div className="img-wrraper">
          <img src={item.picUrl} alt=""></img>
          <a className="imgA" href="/#"> </a>
          <div className="bottom-info">
            <div className="iconfont icon-left">&#xe601;</div>
            <div className="number">58万</div>
            <a className="iconfont icon-right" href="/#">&#xe602;</a>
          </div>
        </div>
        <p className="dec">
          <a href="/#">{item.name}</a>
        </p>
      </li>
    ))
  }
}

export default HotRecommend

// (
  // <li>
  //   <div className="img-wrraper">
  //     <img src="http://p1.music.126.net/9srY7NsRhk-kaZj05iNuTA==/109951164898506738.jpg?param=140y140"></img>
  //     <a className="imgA" href="javascript:void(0);"></a>
  //     <div className="bottom-info">
  //       <div className="iconfont icon-left">&#xe601;</div>
  //       <div className="number">58万</div>
  //       <a className="iconfont icon-right" href="javascript:void(0);">&#xe602;</a>
  //     </div>
  //   </div>
  //   <p className="dec">
  //     <a>这辈子我们拥有过最值钱的东西，叫青春</a>
  //   </p>
  // </li>
// )