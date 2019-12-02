let newsongdata={
    shoujiyanzheng:[]
}
const newlistsong=(state=[],action)=>{
    
    // console.log(action.payload)
    switch(action.type){
        case "SHOU_JI_YAN_ZHENG":
            return action.payload
        default:
            return state
    }
    // console.log(state)
}

export default (state=newsongdata,action)=>{
    // console.log(state)
    return{
        shoujiyanzheng:newlistsong(state.shoujiyanzheng,action)
    }
}