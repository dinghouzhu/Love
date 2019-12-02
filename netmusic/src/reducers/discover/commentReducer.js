const defaultState = {
    comments: {}
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_PLAYLIST_COMMENT":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        comments: cartState(state.comments, action)
    }
}