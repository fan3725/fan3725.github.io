import styled from 'styled-components'

export const SwiperWrapper = styled.div`
  width: 100%;
  height: 258px;
  background-color: #A68AC4;
  .swiperContent{
    margin: 0 auto;
    width: 730px;
    height: 258px;
  }
  .swiper-slide{
    width: 730px;
    height: 258px;
    a{
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .swiper-container .hide{
    opacity:0;
  }
  .swiper-button-next,.swiper-button-prev{
    transition:opacity 0.5s;
  }
  .swiper-wrapper{
    cursor: pointer;
  }
`
