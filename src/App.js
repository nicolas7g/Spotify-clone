
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import React, {useEffect, useState} from "react";
import SpotifyWebApi from 'spotify-web-api-js'//react-spotify-web-playback
import PLayer from './PLayer';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  //const [token, setToken] = useState(null);
  const [{/*user,*/ token}, dispatch] = useDataLayerValue(); //reemplaza al useState para setear variables, porque las convierte en globales

  useEffect(() =>{
      const hash = getTokenFromUrl();

      window.location.hash=""; //borro el token de la url por "seguridad"
      const _token = hash.access_token;
      if (_token){//si hay un token
          dispatch({ //setea el datalayer con el user para que pueda ser accedido desde cualquier componente
            type: 'SET_TOKEN', 
            token: _token,
        });


        spotify.setAccessToken(_token);
        console.log("token: ", _token);
        spotify.getMyDevices().then(response=>console.log("devices", response));

        spotify.getMe().then((user)=>{
          dispatch({ //setea el datalayer con el user para que pueda ser accedido desde cualquier componente
              type: 'SET_USER', 
              user: user,
          });
        });

        spotify.getUserPlaylists().then((playlists)=>{
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,

          });
        });

      spotify.getPlaylist('37i9dQZEVXcG20swPRGtTa').then(response=>{
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,

          });
        });

      }
    
  },[]); //va a correr 1 vez, pero si ademas que paso una variable tambien va a correr cada vez que la variable name tome un nuevo valor
  
  //console.log("app spotify", spotify);
  return (
    <div className="app">

      {//si tengo un token ingreso a la app, sino vuelvo al login
        token ? <PLayer spotify={spotify}/>: <Login/> }
      


    
    </div>
  );
}

export default App;
