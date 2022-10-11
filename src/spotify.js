export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = window.location.origin+'/';// 'http://localhost:3000/';

const clientId = '3c6ddbd0300f481db083be774406a454'

const scopes = [
    "user-read-currently-playing",
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'streaming'

];


// la url despues de la autenticacion devuelve 
//un token(un string que se usa el resto de la sesion como 'carnet de autorizacion' para las <> funcionalidades) 
//url con token devuelta --->   http://localhost:3000/#access_token=BQCbG_CUwnP5ju...
//logica para extraer el token de la url
export const getTokenFromUrl = () =>{
 return window.location.hash //se para despues del ultimo /
    .substring(1)   // extrae todo el string desde el caracter 1 (despues del #)
    .split('&') //detiene el substring en el primer &, que se usa para listar parametros
    .reduce((initial, item) =>{   // todo esto es una fumada para obtener el codigo del token despues del caracter =
        var parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial

    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;