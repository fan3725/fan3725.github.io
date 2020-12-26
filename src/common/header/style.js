import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 70px;
  background-color: RGB(244,156,156);
`

export const Nav = styled.div`
  position: relative;
  width: 1100px;
  height: 70px;
  margin: 0 auto;
  ul{
    float: left;
    height: 70px;
    color: white;
    li{
      float: left;
      height: 70px;
      line-height: 70px;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 16px;
      text-align: center;

      &.fMusic {
        width: 94px;
      }
      &.fFriend {
        width: 66px;
      }

      :hover{
        background-color: RGB(244,108,98);
      }

      a{
        text-decoration:none;
        color: RGB(255,255,255);
      }
      a:hover{
        color: RGB(255,255,255);
      }
    }
  }
`

export const HeaderIcon = styled.div`
  position: relative;
  float: left;
  width: 400px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: RGB(255,255,255);
  span{
    display: inline-block;
    &.font{
      position: absolute;
      right: 125px;
      font-size: 30px;
    }
    &.iconfont{
      position: absolute;
      right: 65px;
      font-size: 40px;
    }
  }
`

export const HeaderRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 70px;
  font-size: 14px;
  color: RGB(255,255,255);
`

export const Select = styled.div`
  width: 158px;
  height: 32px;
  line-height: 32px;
  margin-top: 18px;
  border-radius: 16px;
  border: 1px solid white; 
  background-color: RGB(255,255,255);
  span{
    display: inline-block;
    margin-left: 6px;
    font-size: 15px;
    color: RGB(72,72,72);
  }
`

export const SearchInput = styled.input.attrs({
  placeholder: '音乐/视频/电台/用户'
})`
  display: inline-block;
  width: 121px;
  height: 16px;
  margin-left: 5px;
  font-size: 12px;
  outline: none;
  border:none;
`

export const Login = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  line-height: 70px;
  a{
    text-decoration:none;
    color: RGB(255,255,255);
  }
`
