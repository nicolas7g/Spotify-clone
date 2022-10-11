import React, {useState} from 'react';
import './SongRow.css';
//import ReactAudioPlayer from 'react-audio-player';//npm install --save react-audio-player




function SongRow({spotify, track='test'}) {
    //console.log("1",spotify);
    const [song, setSong] = useState(new Audio("https://open.spotify.com/track/2fCh6DVc566GDXr7NaNTtC"));


    
    const handleClick = (spotify, track) =>{
        console.log(track.external_urls.spotify);
        //setSong(new Audio(track.external_urls.spotify))
        console.log(song);
        song.play();
   /*     spotify.play({ "devices": [{"id": "1f74be12b080c45cd228a2b6fdb7884309ad78cd"}], 
                        "uris": [`spotify:track:${track.id}`]}).then(response=>console.log("play(): ",response));
   
        <ReactAudioPlayer
                        src={track.external_urls.spotify}
                        autoPlay
                        controls
                      />            
  
        var audio = new Audio(track.external_urls.spotify);  
        console.log("audio",audio);
        audio.play()  */ 
        
        
    }


    return (
        
    <div className='songRow' 
    key={track.id}
    onClick={()=>handleClick(spotify, track)}
     >
        <img className='songRow__album' src={track.album.images[0].url} alt=''/>
        <div className='songRow__info'>
        <h1>{track.name}</h1>
        <p>
            {track.artists.map(artist => artist.name).join(',')}
            {track.album.name}
                
            

        </p>
        </div>
    </div>
  )
}

export default SongRow;
