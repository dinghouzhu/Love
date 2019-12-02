let newsongdata={
    songdatail:""
}
const newlistsong=(state=[],action)=>{
    
    // console.log(action)
    switch(action.type){
        case "GET_SONG_DATAIL":
            return action.payload.data[0]
        default:
            return state
    }
    // console.log(state)
}

export default (state=newsongdata,action)=>{
    // console.log(state)
    return{
        songdatail:newlistsong(state.songdatail,action)
    }
}