import React from 'react'
import Social from './Social'
import cloud from '../images/cloud.png'
import mountain from '../images/mountain.png'

const Cover = (props) => {
    return (
        <div class="top-container">
        <img class="top-cloud" src={cloud} alt="cloud"/>
        <div class="title-text">
          <h1>I'm Aaron.</h1>
          <h2>a <span class="pro">pro</span>grammer.</h2>
        </div>
        <img class="bottom-cloud" src={cloud}  alt="cloud"/>
        <img class="mountain" src={mountain}  alt="mountain-img"/>
        <Social />
      </div>
    )
}

export default Cover