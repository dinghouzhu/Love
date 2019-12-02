const defaultState = {
    songListDetails: []
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SONGLIST_DETAILS":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        songListDetails: cartState(state.songListDetails, action)
    }
}