const defaultState = {
    songStatus: {}
}
const cartState = (state = {}, action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SONG_STATUS":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        songStatus: cartState(state.songStatus, action)
    }
}