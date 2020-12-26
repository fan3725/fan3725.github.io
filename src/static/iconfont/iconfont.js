import {createGlobalStyle} from 'styled-components'

export const IconfontGlobal = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1590244977481'); /* IE9 */
  src: url('./iconfont.eot?t=1590244977481#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAV8AAsAAAAACxwAAAUsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCECAqICIZjATYCJAMoCxYABCAFhG0HgQYblwkRFaSFkf1MsG0jrP1VbNyiTppvggei8+3NzIb7BRREUAEp/VEBZwQn7gEIgzGYOG0AbOqs+OBfFk2/BceuTzvujisZAsrJcuHqMPnb+IPV/W4P8op3X2tJaRQOBThApXQrlTIBTkDCsQhxFvA2JFxAuBwCsJNGCaJDpx4OrGgI2wlATJk4fiRWlxUthiqwGswhh2qI7Ziwyg3yJWCb/v3iG6qEFSQmhXClPuM6jqGNgTFOeYIehigPnvLcwOkoUEAJoIHYHOpdizKzJSjsj9+iMQgIw4rEbCjDZCQaLYyRxrhgEAP3qFAUhBEjdoMZExqqjH94NiwIEGZIG4KUJTkbGMhCmMEQQpjAkEJoYCgNus6EZqyoS0QN6XQtUFqebiSasaBuHMpnW2tXD4kBIkBkgbiBoO+g5xUCQRoprhIekR6SExKichIUVbK0atTiTQ8SiRArHumh5ueAEeE3HqTK/a81CLv5Rpo69Giss1bfVC9c7vq6OJerbmOMw1ETU1MT63R4Ymtr4xfPOH4zybLvVu7MM57F1NTYQ6SHeOwb64QK4REr6vVQxaVvqkWG3mmx9zOH73Nn4Au331jg97sCAbfP5/R6J40csdh5mNfreMqbwRFfR33TueRBMX9B7jmj688GssVR/8iNDw8Vjz+3omjc2YOPbuWOPXMFT58xNceLFB+iWdza16iJSZR3vT283raP+9yvBrKUs3ZT/d4JL/nLLgZ6v+orveAdnLbH4ffPdD0KiGZg766bAq2dDVbuT4qyjbEfT6xONJF8f+qpXuMy3pcz7XsOtzq8xz5Tvj98Ub+UCGUab5aOhu0athjZP66iU8OwhgoyUhGR7Ww5AQ8kHUrE1LSlwY5+7uWH/o5vZPviodsTXU3ryA/u2z/Qhw7Vv9fv8+S02gdkKM/bWkaG9raIVKwo7ZbQY/ceaP/+q6HqAWNUcqjl3eVBcRUaVO5Vq25cXC8BMTJL2nRqrxYoZfU2UdEbJC3UxJ2bp0oe3LlFTmouN0RHxd2CJqMTZPfIyV3JYmYT0T3qevrkJrXfZ3fI8q662kmG6vOUZjJpTxFSsTJil1wfJVauFKgaxRiV/N5URQ05e25ezLyOVnn3wVI+6VnWfLNeWB/Vt/ha23E5xpJF82I+UFXJO+aq5/YUTF51da752b3FE3j0SE7Ztm0KqiQvklNo9SeLX3mlKGdcE7nu+vV1pJJkk+so1GRcztHwKPMfQ/hItVa+D8En1BDVEoI71E9qOoB6TL4Gwf0KVQzBS+p11ReCH6siFQHBv2qd+qz/DPtXn/9yeHiL36y6BsA7P7hn6l1Bj4bywIdRR2rZJ1uWco72VAg2u3afniz/AXW3QgEgXcvswKc6GMUHZTtiqcctsLLsBBILqaCwkkPQKCVgQqcBmLHSGuwU0/lonWhmoRCaDShiDYAggksgCeMRKCJ4maBR3gcTcXwHZiKEAjsuEX1KHd+riOZN0CqeYbhDdLyQ5FBjNH6jL5MVp0Kn/aPkmICubr2FL1xQytgjX3yvSkDCM3zC1XCaGFbhhE7roLqemobCnqh2PG8Mb4JW8QwMdyA6XkhdWo3v67/Rl8lKzIQP0X+UHFcOdNS0KQhf2iXVhG1pzxffo5QmgE71PAOf5MZJzDKwhm+U0GlNyJFeTzS0EKXV1vXr56Wt+ONMIjyQEam0sWzH9fx4mR24OLv4FO3jwGSau6ezOQfUPXjKDigpmoDUolzuUtnTvdglyJXHe1yoPE9jZaWYdbMBAAAA') format('woff2'),
  url('./iconfont.woff?t=1590244977481') format('woff'),
  url('./iconfont.ttf?t=1590244977481') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1590244977481#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .icon-shoucangjia:before {
  content: "\e666";
  }

  .icon-bofang1:before {
  content: "\e619";
  }

  .icon-jiashang:before {
  content: "\e603";
  }

  .icon-bofang:before {
  content: "\e602";
  }

  .icon-erji:before {
  content: "\e601";
  }

  .icon-jiantouyou:before {
  content: "\e600";
  }

  .icon-yuanhuan:before {
  content: "\e661";
  }

  .icon-yinfu:before {
  content: "\e605";
  }

  .icon-icon-test:before {
  content: "\e63c";
  }
`

