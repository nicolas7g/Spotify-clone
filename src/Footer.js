import React from 'react'
import './Footer.css'
import  PlayCircleOutlineIcon  from '@mui/icons-material/PlayCircleOutline'
import  SkipPreviousIcon  from '@mui/icons-material/SkipPrevious'
import  SkipNextIcon from '@mui/icons-material/SkipNext'
import  ShuffleIcon  from '@mui/icons-material/Shuffle'
import  RepeatIcon  from '@mui/icons-material/Repeat'
import PlaylistIcon  from '@mui/icons-material/PlaylistPlay'
import VolumenDownIcon  from '@mui/icons-material/VolumeDown'
import Grid  from '@mui/material/Grid'
import Slider  from '@mui/material/Slider'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <img className='footer__albumLogo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Alcy_Caluamba.jpg/600px-Alcy_Caluamba.jpg' 
                alt=''/>
            
            <div className='footer_songInfo'>
                <h4>Yeah!</h4>
                <p>Mee</p>
            </div>
        </div>
        <div className='footer__center'>
            <ShuffleIcon className='footer__green'/>
            <SkipPreviousIcon className='footer__icon'/>
            <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
            <SkipNextIcon className='footer__icon'/>
            <RepeatIcon className='footer__green'/>
        </div>   
        <div className='footer__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistIcon/>
                </Grid>
                <Grid item>
                    <VolumenDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>    
        </div>      
    </div>
  )
}

export default Footer
