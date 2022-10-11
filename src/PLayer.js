import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function PLayer({spotify}) {
  //console.log("player spotify", spotify);
  return (
    <div className='player'>
        <div className='player__body'>
          <Sidebar/> 
          <Body spotify={spotify}/>

        </div>
        <Footer/>
    </div>
  )
}

export default PLayer
