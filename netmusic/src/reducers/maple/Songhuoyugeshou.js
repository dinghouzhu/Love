let nejdf={
    drawsonghei:""
}
const newlistsong=(state=[],action)=>{
    
    // console.log(action.payload)
    switch(action.type){
        case "GET_DRAW_GOTO_DO":
            return action.payload.songs[0].al
        default:
            return state
    }
    // console.log(state)
}

export default (state=nejdf,action)=>{
    // console.log(state)
    return{
        drawsonghei:newlistsong(state.drawsonghei,action)
    }
}