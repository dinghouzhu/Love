const defaultState = {
    serachRes: [],
    searchVideo: [],
    searchSinger: [],
    searchAlbum: [],
    searchLists: [],
    // searchLRadios: [],
    searchUser: [],
    searchMv: ''
}

const data = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SEARCH_RES":
            return payload
        default:
            return state
    }
}
const dataVideo = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SEARCH_VIDEO_RES":
            return payload
        default:
            return state
    }
}
const dataSinger = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SEARCH_SINGER_RES":
            return payload
        default:
            return state
    }
}
const dataAlbum = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SEARCH_ALBUMS_RES":
            return payload
        default:
            return state
    }
}
const dataLists = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SEARCH_PLAYLIST_RES":
            return payload
        default:
            return state
    }
}
// const dataDj = (state = [], action) => {
//     let { type, payload } = action
//     switch (type) {
//         case "GET_SEARCH_DJRADIO_RES":
//             return [...payload]
//         default:
//             return state
//     }
// }
const dataUser = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_SEARCH_USER_RES":
            return payload
        default:
            return state
    }
}
const dataMv = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case "GET_Singer_Mv":
            return payload
        default:
            return state
    }
}

export default (state = defaultState, action) => {
    return {
        serachRes: data(state.serachRes, action),
        searchVideo: dataVideo(state.searchVideo, action),
        searchSinger: dataSinger(state.searchSinger, action),
        searchAlbum: dataAlbum(state.searchAlbum, action),
        searchLists: dataLists(state.searchLists, action),
        // searchLRadios: dataDj(state.searchLRadios, action),
        searchUser: dataUser(state.searchUser, action),
        searchMv: dataMv(state.searchMv, action),
    }
}