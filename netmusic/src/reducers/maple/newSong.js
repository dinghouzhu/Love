let newsongdata={
    newlistsong:[]
}
const newlistsong=(state=[],action)=>{
    
    // console.log(action.payload)
    switch(action.type){
        case "NEW_SONG":
            return [action.payload]
        case "GET_A_LIST_OF_SONGS":
            // console.log(action)
            return action.payload.tracks
        default:
            return state
    }
    // console.log(state)
}

export default (state=newsongdata,action)=>{
    // console.log(state)
    return{
        newlistsong:newlistsong(state.newlistsong,action)
    }
}