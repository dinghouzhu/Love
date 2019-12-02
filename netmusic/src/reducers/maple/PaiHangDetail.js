let morenshuju={
    detailpaihang:""
}
const newdatailhang=(state=[],action)=>{
    switch(action.type){
        case "BANG_DETAIL_GO_TO":
            return action.payload
        default:
            return 
    }
}

export default (state=morenshuju,action)=>{
    return{
        detailpaihang:newdatailhang(state.detailpaihang,action)
    }
}
    

