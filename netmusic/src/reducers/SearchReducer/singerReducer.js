const defaultState = {
    singerDec: '',
    singerMusic: [],
    singerAlbum: [],
    singerMv: [],
    music: []
}
const datas = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case 'GET_Singer':
            // console.log("++", payload)
            return payload
        default:
            return state
    }
}
const data = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case 'GET_Singer_HotMusic':
            // console.log("-----", payload)
            return payload
        default:
            return state
    }
}
const album = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case 'GET_Singer_Album':
            // console.log("-----", payload)
            return payload
        default:
            return state
    }
}
const mv = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case 'GET_Singer_Mv':
            // console.log("-----", payload)
            return payload
        default:
            return state
    }
}
const musicOpen = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case 'GET_Singer_Music':
            console.log("-----", payload)
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        singerDec: datas(state.singerDec, action),
        singerMusic: data(state.singerMusic, action),
        singerAlbum: album(state.singerAlbum, action),
        singerMv: mv(state.singerMv, action),
        music: musicOpen(state.music, action),
    }
}