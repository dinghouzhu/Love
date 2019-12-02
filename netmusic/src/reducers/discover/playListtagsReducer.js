const defaultState = {
    hotPlayTags: []
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_HOT_PLAYLIST_TAGS":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        hotPlayTags: cartState(state.hotPlayTags, action),
    }
}