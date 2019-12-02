let newsongdata={
    songlistname:""
}
const newlistsong=(state=[],action)=>{
    
    // console.log(action.payload)
    switch(action.type){
        case "GET_A_LIST_OF_SONGS":
            return action.payload
        default:
            return state
    }
    // console.log(state)
}

export default (state=newsongdata,action)=>{
    // console.log(state)
    return{
        songlistname:newlistsong(state.songlistname,action)
    }
}