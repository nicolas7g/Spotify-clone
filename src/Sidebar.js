import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
  //this pulls playlists out
  const [{playlists}, dispatch] = useDataLayerValue(); //reemplaza al useState para setear variables, porque las convierte en globales

  return (
      <div className='sidebar'>
        <img className='sidebar__logo'
              src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' 
              alt=''
              />

         <SidebarOption Icon={HomeIcon} title='Home'/> 
         <SidebarOption Icon={SearchIcon} title='Search'/> 
         <SidebarOption Icon={LibraryMusicIcon} title='Your Library'/>        

         <br/>
         <strong className='sidebar__title'>PLAYLIST</strong>
         <hr/>

         {playlists?.items?.map(playlist =>(// for each playlist render a SidebarOption with each title
              
              <SidebarOption title={playlist.name} />

         ))}

      </div>
  )
}

export default Sidebar
