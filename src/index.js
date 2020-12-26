import React, { Fragment } from 'react'
import reactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './style'
import {IconfontGlobal} from './static/iconfont/iconfont'

reactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontGlobal />
    <App />
  </Fragment>,
  document.getElementById('root')
)
