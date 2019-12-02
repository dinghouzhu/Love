const defaultState = {
    songDetails: []
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SONG_DETAILS":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        songDetails: cartState(state.songDetails, action),
    }
}