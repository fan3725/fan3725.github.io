import React from 'react'
import store from '../../../../store'
import { CommonTitle, TitleIcon, TitleContent, More, TopListWrapper, OneTypeTopList } from './style'


function TopList (props) {
    return (
      <>
        <CommonTitle>
          <TitleIcon>
            <span className="iconfont">&#xe661;</span>
          </TitleIcon>
          <TitleContent>
            <div className="titleText"><a href="/#">榜单</a></div>
          </TitleContent>
          <More>
            <a href="/#">更多</a>
            <span className="iconfont">&#xe600;</span>
          </More>
        </CommonTitle>
        <TopListWrapper>
          {getTopList(props.topList)}
        </TopListWrapper>
      </>
    )
}

const getTopList = (topList) => {
  if(topList.length) {
    return topList.map((item, index) => (
      <OneTypeTopList key={item.id}>
        <dt className="top-list">
          <div className="img-wrapper">
            <img src={item.coverImgUrl} alt=""></img>
          </div>
          <ol>
            {
              item.tracks.map((item_track, index) => (
                index < 10 ? 
                  <li className={index%2===1 ? '' : 'odd'} key={item_track.id}>
                    <p>{index+1}</p>
                    <a href={"/song?id="+item_track.id}>{item_track.name}</a>
                  </li> : ''
              ))
            }
          </ol>
        </dt>
      </OneTypeTopList>
    ))
    
  }
}

const  handleSongClick = async (id) => {

  store.dispatch({
    type: 'change_mp3_id',
    mp3_id: id
  })
}

export default TopList