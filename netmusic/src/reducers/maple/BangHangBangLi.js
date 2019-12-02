
let todohangbai={
    togobanghai:[]
}
const togobanghai=(state=[],action)=>{
    // console.log(action)
    switch(action.type){
        case "BHANG_PANG_GO_TO":
            return action.payload
        default:
            return state
    }
}

export default (state=todohangbai,action)=>{
    return{
        togobanghai:togobanghai(state.togobanghai,action)
    }
}