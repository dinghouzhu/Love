let newsongdata={
    songxinxi:[]
}
const newlistsong=(state=[],action)=>{
    
    // console.log(action.payload)
    switch(action.type){
        case "GET_SONG_XINXI":
            return action.payload
        default:
            return state
    }
    // console.log(state)
}

export default (state=newsongdata,action)=>{
    // console.log(state)
    return{
        songxinxi:newlistsong(state.songxinxi,action)
    }
}