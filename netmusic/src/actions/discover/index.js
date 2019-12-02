import { getMVUrl, getMVDetials, getRecommendListDetails, getSongDetails, getSongUrl, getVideoListView, getDayRecommend, getKindOfPlayList, getPlaylist, getHighQualitylist, getDayRecommendlist, getPlayListComment, getsongComment } from "../../api/discover"
const creator = (type, payload) => ({ type, payload })
// 获取歌单详情
export const getRecommendListDetail = (id) => dispatch => {
    getRecommendListDetails(id)
        .then(res => {
            const trackid = res.playlist.trackIds
            var idStr = trackid[0].id
            trackid.forEach((item, index) => {
                if (index !== 0) {
                    idStr += ',' + item.id
                }
            })
            const playlist = res.playlist
            // console.log(res)
            getSongDetails(idStr)
                .then(res => {
                    // console.log(res)
                    dispatch(creator("GET_SONG_DETAILS", res.songs))
                })
            dispatch(creator("GET_SONGLIST_DETAILS", playlist))
        })
}
// 获取歌曲地址
export const getPlaySongUrl = (id) => dispatch => {
    getSongUrl(id)
        .then(res => {
            // console.log(res)
            dispatch(creator("PLAY_SONG", res.data))
        })
}
// 获取视频
export const getVideoList = () => dispatch => {
    getVideoListView()
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_VIDEOLIST", res.datas))
        })
}
// 获取日推
export const getDayRec = () => dispatch => {
    getDayRecommend()
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_DAY_RECOMMEND", res.recommend))
        })
}
// 获取mv地址
export const getMvUrl = (id) => dispatch => {
    getMVUrl(id)
        .then(res => {
            console.log(res)
            dispatch(creator("GET_MV_URL", res.data.data))
        })
}
// 获取mv地址
export const getMVDetial = (id) => dispatch => {
    getMVDetials(id)
        .then(res => {
            console.log(res)
            dispatch(creator("GET_MV_DETIALS", res.data.data))
        })
}
// 获取mv地址
export const getHotPlayList = () => dispatch => {
    getKindOfPlayList()
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_HOT_PLAYLIST_TAGS", res.tags))
        })
}
// 获取热门标签下的歌单
export const getPlaylists = (cat) => dispatch => {
    getPlaylist(cat)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_PLAYLIST", res.playlists))
        })
}
// 获取推荐标签
export const getRecommendLists = () => dispatch => {
    getDayRecommendlist()
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_PLAYLIST", res.result))
        })
}
// 获取精品
export const getHighQualitylists = () => dispatch => {
    getHighQualitylist()
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_PLAYLIST", res.playlists))
        })
}
// 获取歌单评论
export const getPlayListComments = (id) => dispatch => {
    getPlayListComment(id)
        .then(res => {
            // console.log(res)
            dispatch(creator("GET_PLAYLIST_COMMENT", res))
        })
}
// 获取歌曲评论
export const getsongComments = (id) => dispatch => {
    getsongComment(id)
        .then(res => {
            dispatch(creator("GET_PLAYLIST_COMMENT", res))
        })
}

