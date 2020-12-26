import React from 'react'
import { CommonTitle, TitleIcon, TitleContent, More, NewCdContentWrapper, NewCdContent } from './style'

function NewCd (props) {
    return (
      <>
        <CommonTitle>
          <TitleIcon>
            <span className="iconfont">&#xe661;</span>
          </TitleIcon>
          <TitleContent>
            <div className="titleText"><a href="/#">新碟上架</a></div>
          </TitleContent>
          <More>
            <a href="/#">更多</a>
            <span className="iconfont">&#xe600;</span>
          </More>
        </CommonTitle>
        <NewCdContentWrapper>
          <NewCdContent>
            <ul className="cd-list">
              {getList(props.newCdList)}
            </ul>
          </NewCdContent>
        </NewCdContentWrapper>
      </>
    )
}

const getList = (newCdList) => {
  if(newCdList.length) {
    return newCdList.map(item =>(
      <li className="cd-item" key={item.id}>
        <div className="img-wrapper">
          <img src={item.picUrl} alt=""></img>
        </div>
        <p className="cd-name">{item.name}</p>
        <p className="cd-author">{item.artist.name}</p>
      </li>
    ))
  }
}

export default NewCd