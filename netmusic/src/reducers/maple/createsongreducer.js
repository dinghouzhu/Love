let songdata={
    all:[]
}
const all=(state=[],action)=>{
    // console.log(action)
    switch(action.type){
        case "GET_SONGDATA":
            return action.payload
        case "GetLists":
            return action.payload
        default:
            return state
    }
}

export default (state=songdata,action)=>{
    return{
        all:all(state.all,action)
    }
}