let data={
    captcha:[]

}
const phone = (state=[],action) =>{
    let {type,payload} = action
    switch(type){
        case "TEST_CAPTCHA":
            return payload
        default:
            return state 
    }
}

export default (state=data,action) => {
    return {
        captcha: phone(state.captcha,action),
    }
}

