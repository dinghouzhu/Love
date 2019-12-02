const defaultState = {
    songUrl: [{
        url: ''
    }]
}
const cartState = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "PLAY_SONG":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        songUrl: cartState(state.songUrl, action),
    }
}