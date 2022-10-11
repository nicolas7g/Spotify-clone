import React from 'react'
import './body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHirozIcon from '@mui/icons-material/MoreHoriz'
import SongRow from './SongRow'

function Body({spotify}) {
  
  const [{discover_weekly}, dispatch] = useDataLayerValue();
  //console.log("body spotify", spotify);
  return (
    
    <div className='body'>
        <Header spotify={spotify}/>
        
        <div className='body__info'>
          <img src={discover_weekly?.images[0].url} alt='' />  
          <div className='body__infoText'>
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>

        <div className='body__songs'>
          <div className='body__icons'>
            <PlayCircleFilledIcon className='body__shuffle'/>
            <FavoriteIcon fontSize='large'/>
            <MoreHirozIcon/>
        </div>
       
        {discover_weekly?.tracks.items.map(item =>   
          <SongRow spotify={spotify} track={item.track}/>
        )}
      </div>
    </div>
  )
}

export default Body
