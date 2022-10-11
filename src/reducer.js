export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token:null,

};

const reducer = (state, action) =>{
    
    switch(action.type){
      
        case 'SET_USER':
            return{
                ...state, //keep what is in the current state
                user:action.user, // but update user
            };
        case 'SET_TOKEN':
             return{
                ...state, 
                token:action.token, 
            };    
 
        case 'SET_PLAYLISTS':
            return{
               ...state, 
               playlists: action.playlists,
            };
        
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state, 
                discover_weekly: action.discover_weekly, 
            };    
            
            
    default:
        return state;
    }
}

export default reducer;