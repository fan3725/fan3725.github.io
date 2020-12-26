import styled from 'styled-components'

export const SongWrapper = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #F5F5F5;
  .contain-wrapper{
    position: relative;
    width: 982px;
    height: 1000px;
    margin: 0 auto;
    background-color: #fff;
    .mainbody-wrapper{
      width: 709px;
      height: 1000px;
      padding: 40px;
      margin-right: 271px;
      box-sizing: border-box;
      border: 1px solid #D3D3D3;
    }
  }
`

export const LeftImg = styled.div`
  float: left;
  width: 205px;
  height: 205px;
  .img-div{
    float: left;
    width: 130px;
    height: 130px;
    border-radius: 85px;
    border: 20px solid #F49C9C;
    img{
      width: 130px;
      height: 130px;
      border-radius: 65px;
    }
  }
`

export const RightDetail = styled.div`
  width: 414px;
  height: 1000px;
  float: right;
  .song-tit {
    .tit-top{
      width: 414px;
      height: 51px;
    }
    .label{
      float: left;
      width: 54px;
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      color: white;
      background: #DD2020;
    }
    .tit-text{
      float: left;
      margin-left: 10px;
      .txt-top{
        font-size: 24px;
      }
      .txt-bottom{
        margin-top: 7px;
        font-size: 14px;
        color: #BABABA;
      }
    }

    .tit-bottom{
      p{
        display: inline-block;
      }
      p:nth-child(1){
        color: #999999;
      }
      p:nth-child(2){
        margin-left: 5px;
        color: #0C73C2;
      }
      .author{
        margin-top: 10px;
        font-size: 12px;
      }
      .album{
        margin-top: 12px;
        font-size: 12px;
      }
      .song-opt{
        width: 414px;
        height: 32px;
        margin-bottom: 50px;
        div{
          float: left;
          margin-top: 14px;
          cursor: pointer;
          text-align: center;
          border-radius: 2px;
        }
        div:hover{
          background-image: linear-gradient(120deg, #D94A38, #F9CC9D);
        }
        .play{
          width: 66px;
          line-height: 32px;
          border-left: #255E95;
          background-image: linear-gradient(120deg, #F49C9C, #F9CC9D);
        }
        .symbol{
          width: 31px;
          line-height: 32px;
          margin-left: 1px;
          border-right: #255E95;
          background-image: linear-gradient(120deg, #F49C9C, #F9CC9D)
        }
        .col-sh-dw-com{
          width: 54px;
          line-height: 32px;
          margin-left: 5px;
          background-image: linear-gradient(120deg, #F49C9C, #F9CC9D);
        }
      }
    }
  }

  .lyric-container{
    .hid{
      display: none;
    }
    .lyric-sty{
      margin-top: 8px;
      font-size: 13px;
      color: #333;
    }
  }
  .extend-lyric{
    width: 27px;
    margin-top: 20px;
    color: #0c73c2;
    font-size: 13px;
    cursor: pointer;
    
  }
  .extend-lyric:hover{
    border-bottom: 1px solid #0c73c2;
  }

`

export const SongPageRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 271px;
  height: 1000px;
  padding: 20px 40px 40px 30px;
  box-sizing: border-box;
  .tit{
    width: 200px;
    line-height: 24px;
    font-size: 13px;
    font-weight: bold;
    border-bottom: 1px solid #CCCCCC;
  }
  .simi-album-contain{
    width: 200px;
    height: 50px;
    margin-top: 25px;
    margin-bottom: 10px;
    .s-a-c-img{
      float: left;
      img{
        width: 50px;
        height: 50px;
      }
    }
    .s-a-c-right{
      width: 100px;
      margin-left: 10px;
      float: left;
      font-size: 14px;
      .s-a-c-name{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .s-a-c-singer{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 12px;
        color: #99B2D8;
        font-size: 13px;
      }
    }
  }

  .similar-song{
    position: relative;
    width: 200px;
    margin-top: 30px;
    font-size: 12px;
    .si-so-wrapper{
      width: 200px;
      height: 32px;
      margin-top: 20px;
      position: relative;
      .si-so-wr-left{
        width: 156px;
        height: 32px;
        float: left;
        .singer{
          position: absolute;
          bottom: 0;
          color: #D8B299;
          // margin-top: 7px;
        }
        .song-name{
          position: relative;
          padding-bottom: 1px;
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          max-width: 134px;

          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          a{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
        }
        .song-name:hover {
          border-bottom: 1px solid black;
        }
      }
      
      .si-so-wr-right{
        font-size: 12px;
        line-height: 32px;
        position: relative;
        &.play{
          float: left;
        }
        &.add{
          float: right;
          margin-left: 16px;
        }
        &.iconfont{
          cursor: pointer;
        }
      }
    }
    
  }
`