import { getVideo, getVideoOne, get_aboutVideo } from '../../api/VideoApi'
const creator = (type, payload) => ({ type, payload })
// 获取标签列表下视频
export const videoList = (id) => dispatch => {
    getVideo(id)
        .then(res => {
            // console.log(res)
            dispatch(creator('VIDEO_LIST', res.datas))
        })
}
// 获取单个视频
export const videoDec = (id) => dispatch => {
    getVideoOne(id)
        .then(res => {
            // console.log(res)
            dispatch(creator('VIDEO_DEC', res.urls[0].url))
        })
}