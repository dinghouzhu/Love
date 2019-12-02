const defaultState = {
    videohRes: [],
    videoOne: ''
}

const data = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case 'VIDEO_LIST':
            return payload
        default:
            return state
    }
}
const dataOne = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case 'VIDEO_DEC':
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        videohRes: data(state.videohRes, action),
        videoOne: dataOne(state.videoOne, action),
    }
}