let newsongdata={
    kjlj:""
}
const newlistsong=(state=[],action)=>{
    
    // console.log(action)
    switch(action.type){
        case "DengLuShuJu":
            return action.payload
        default:
            return state
    }
    // console.log(state)
}

export default (state=newsongdata,action)=>{
    // console.log(state)
    return{
        kjlj:newlistsong(state.kjlj,action)
    }
}