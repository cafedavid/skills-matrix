import {large} from '../styles/media-queries'
import Radium from 'radium'
import React, {PropTypes} from 'react'

const style = {
  padding: '0 0 0 0px',
  [large]: {
    padding: '0 0 0 0px'
  }
}

export const Wrapper = Radium(({children}) => (
  <div style={style}>
    {children}
  </div>
))

Wrapper.propTypes = {
  children: PropTypes.node
}