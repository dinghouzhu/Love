let loginState={
    phone:[]

}
const phone = (state=[],action) =>{
    let {type,payload} = action
    switch(type){
        case "TEST_PHONE":
            return payload
        case "SENT_CAPTCHA":
            return payload
        default:
            return state 
    }
}

export default (state=loginState,action) => {
    return {
        phone: phone(state.phone,action),
    }
}


