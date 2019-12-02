const creator = (type, payload) => ({ type, payload })
// 共享歌曲状态
export const getSongStatus = (obj) => dispatch => {
    dispatch(creator("GET_SONG_STATUS", obj))
}