const defaultState = {
    VideoList: []
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_VIDEOLIST":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        VideoList: cartState(state.VideoList, action)
    }
}