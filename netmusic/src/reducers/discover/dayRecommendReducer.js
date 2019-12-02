const defaultState = {
    dayRecommend: []
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_DAY_RECOMMEND":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        dayRecommend: cartState(state.dayRecommend, action),
    }
}