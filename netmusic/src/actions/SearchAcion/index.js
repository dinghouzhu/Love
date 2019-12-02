import { Search, Singer_dec, Singer_hot_music, Singer_album, Singer_mv, Singer_Music_Open, Search_about, Search_Mv } from "../../api/SearchApi"
const creator = (type, payload) => ({ type, payload })
// 搜索功能
export const getSearchRes = (val) => dispatch => {
    // 单曲
    Search(val, 20, 1)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_SEARCH_RES", res.result.songs))
        })
    // 视频
    Search(val, 20, 1014)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_SEARCH_VIDEO_RES", res.result.videos))
        })
    // 歌手
    Search(val, 20, 100)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_SEARCH_SINGER_RES", res.result.artists))
        })
    // 专辑
    Search(val, 20, 10)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_SEARCH_ALBUMS_RES", res.result.albums))
        })
    // 歌单
    Search(val, 20, 1000)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_SEARCH_PLAYLIST_RES", res.result.playlists))
        })
    // 主播电台
    // Search(val, 20, 1009)
    //     .then(res => {
    //         // console.log(res)
    //         dispatch(creator("GET_SEARCH_DJRADIO_RES", res.result.djRadios))
    //     })
    // 用户
    Search(val, 20, 1002)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_SEARCH_USER_RES", res.result.userprofiles))
        })

}

// 歌手详情
export const getSinger = (id) => dispatch => {
    Singer_dec(id)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_Singer", res.briefDesc))
        })
}

// 歌手热门50首歌曲以及获取歌手部分信息
export const getHotMusic = (id) => dispatch => {
    Singer_hot_music(id)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_Singer_HotMusic", res))
        })
}
//歌手专辑
export const getAlbum = (id) => dispatch => {
    Singer_album(id)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_Singer_Album", res.hotAlbums))
        })
}
// 歌手Mv
export const getMv = (id) => dispatch => {
    Singer_mv(id)
        .then(res => {
            // console.log(res
            dispatch(creator("GET_Singer_Mv", res.mvs))
        })
}
// 歌曲播放
export const getMusic = (id) => dispatch => {
    Singer_Music_Open(id)
        .then(res => {
            // console.log("...", res)
            dispatch(creator("GET_Singer_Music", res.data))
        })
}
// // 关注/取消关注歌手
// export const getSingerLove = (id) => dispatch => {
//     Singer_love(id, t = 1)
//         .then(res => {
//             console.log("...", res)
//             // dispatch(creator("GET_Singer_Music", res.data))
//         })
// }

// 模糊搜索
export const getAboutSearch = (key) => dispatch => {
    Search_about(key)
        .then(res => {
            // console.log("...", res)
            // dispatch(creator("GET_Singer_Music", res.data))
        })
}

// 播放Mv
export const getMusicMv = (id) => dispatch => {
    Search_Mv(id)
        .then(res => {
            // console.log("...", res)
            dispatch(creator("GET_Singer_Mv", res.data.url))
        })
}
