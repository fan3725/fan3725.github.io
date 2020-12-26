import styled from 'styled-components'

export const BodyWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(#A68AC4,#e66465);
`

export const BodyContent = styled.div`
  width:728px;
  margin: 0 auto;
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;
  background-color: #EAE2D5;
  border: 1px solid RGB(211,211,211);
`

export const HotCmdTitle = styled.div`
  height: 35px;
  border-bottom: 2px solid RGB(193,13,12);
  span{
    display: inline-block;
  }

  .tab{
    float: left;
    margin-left: 20px;
    font-size: 12px;
    color: #666;
    span{
      margin-top: 10px;
      margin-left: 15px;
      margin-right: 15px;
    }
    a{
      color: #666;
      text-decoration: none;
    }
  }
`

export const TitleIcon = styled.div`
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  .iconfont{
    color: RGB(193,13,12);
  }
`

export const TitleContent = styled.div`
  float: left;
  .titleText{
    margin-left: 10px;
    margin-top: 5px;
    font-size: 20px;
  }
  a{
    color: black;
    text-decoration: none;
  }
`

export const More = styled.div`
  float: right;
  margin-right: 20px;
  margin-top: 10px;
  font-size: 12px;
  color: #666;
  .iconfont{
    font-size: 12px;
    color: RGB(193,13,12);
  }
  a{
    color: #666;
    text-decoration: none;
  }
`

export const CommonTitle = styled.div`
  height: 35px;
  border-bottom: 2px solid RGB(193,13,12);
  span{
    display: inline-block;
  }
`


export const HotCmdBody = styled.ul`
  width: 731px;
  height: 468px;
  margin: 20px 0 0 -42px;
  a{
    cursor: pointer;
  }
  li{
    display: block;
    float: left;
    width: 182px;
    height: 234px;
    padding: 0 0 30px 42px;
    box-sizing: border-box;
  }
  p{
    display: block;
    margin-top: 5px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    a{
      cursor: pointer;
      line-height: 16px;
      letter-spacing: 1px;
      color: black;
      text-decoration: none;
    }
    a:hover{
      text-decoration: underline;
    }
  }
  .img-wrraper{
    width: 140px;
    height: 140px;
    position: relative;
    font-size: 12px;

    img{
      width: 100%;
      height: 100%;
    }

    .imgA{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .bottom-info{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 27px;
      line-height: 27px;
      background-color: black;
      background-position: 0 -537px;
      opacity: 0.8;
      color: white;

      .icon-left{
        float: left;
        margin-left: 10px;
      }

      .icon-right{
        float: right;
        margin-right: 7px;
        color: white;
        text-decoration: none;
      }

      .number{
        float: left;
        margin-left: 5px;
      }
    }
  }
`

export const NewCdContentWrapper = styled.div`
  width: 689px;
  height: 188px;
  margin: 20px 0 37px 0;
  border: 1px solid #d3d3d3;
  background-color: RGB(245,245,245);
`

export const NewCdContent = styled.div`
  width: 669px;
  height: 184px;
  padding-left: 16px;
  ul{
    width: 645px;
    height: 150px;
    margin-top: 28px;
    padding-left: 20px;
    box-sizing: border-box;
    box-shadow: 5px 5px 3px #888888;
    img{
      width: 100px;
      height: 100px;
    }
    li{
      position: relative;
      float: left;
      .img-wrapper{
        width: 100px;
        height: 100px;
        margin-right: 20px;
        box-shadow: 2px 2px 2px #888;
      }
      p{
        width: 100px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .cd-name{
        margin: 5px;
      }
      .cd-author{
        margin: 3px;
        color: #666;
      }
    }
  }
`

export const TopListWrapper = styled.div`
  width: 691px;
  height: 445px;
  margin-top: 20px;
  padding-left: 1px;
  box-sizing: border-box;
`

export const OneTypeTopList = styled.dl`
  float: left;
  width: 228px;
  height: 445px;
  border: 1px solid RGB(195,195,195);
  background-color: RGB(244,244,244);
  .top-list{
    width: 230px;
    height: 120px;
    padding-top: 20px;
    box-sizing: border-box;
    
    .img-wrapper{
      text-align: center;
      margin-bottom: 20px;
      transform:rotate(7deg);
      img{
        width: 80px;
        height: 80px;
        box-shadow: 3px 3px 2px #666;
      }
    }

    ol{
      width: 230px;
      height: 500px;
      color: black;
      font-size: 14px;
      li{
        height: 32px;
        list-style: none;

        &.odd{
          background-color: RGB(232,232,232);
        }

        p{
          float: left;
          width: 20px;
          height: 20px;
          font-size: 16px;
          margin-top: 8px;
          margin-left: 50px;
          text-align: center;
          display: inline-block;
          color: #c10d0c;
        }

        a{
          float: left;
          width: 130px;
          height: 32px;
          line-height: 32px;
          margin-left: 15px;
          display: inline-block;
          color: #000000;
          text-decoration: none;
          cursor: pointer;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
`