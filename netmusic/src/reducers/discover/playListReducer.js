const defaultState = {
    playlist: []
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_PLAYLIST":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        playlist: cartState(state.playlist, action)
    }
}