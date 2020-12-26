import React from 'react'
import NewCd from './newCd'
import TopList from './topList'
import HotRecommend from './hotRecommend'
import { BodyWrapper, BodyContent } from './style'


function Body (props) {
    return (
      <BodyWrapper>
        <BodyContent>
          <HotRecommend hotCmdList={props.hotCmdList}/>
          <NewCd newCdList={props.newCdList}/>
          <TopList topList={props.topList}/>
        </BodyContent>
      </BodyWrapper>
    )
      
    
}

export default Body