import React, { Component } from 'react'
import { HeaderWrapper, Nav, HeaderIcon, HeaderRight, Select, SearchInput,  Login } from './style'

class Header extends Component {
  render() {
    return (
      <>
        <HeaderWrapper>
          <Nav>
            <ul>
              <li className='fMusic'>
                <a href="/#">发现音乐</a>
              </li>
              <li className='fMusic'>
                <a href="/fmusic">我的音乐</a>
              </li>
              <li className='fFriend'>
                <a href="/friend">朋友</a>
              </li>
            </ul>
            <HeaderIcon>
              <span className="font">Dida</span>
              <span className="iconfont">&#xe605;</span>
            </HeaderIcon>
            <HeaderRight>
              <Select>
                <span className="iconfont">&#xe63c;</span>
                <SearchInput />
              </Select>
              <Login>
                <a href="/#">登陆</a>
              </Login>
            </HeaderRight>
          </Nav>
        </HeaderWrapper>
      </>
    )
    
  }
}

export default Header