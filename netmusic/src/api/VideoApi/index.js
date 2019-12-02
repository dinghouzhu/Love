// 获取视频下标签
export const getVideoLists = () => {
    return (
        fetch('http://106.12.10.151:3000/video/group/list',{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 获取标签对应视频
export const getVideo = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/video/group?id=${id}`,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 获取某个视频
export const getVideoOne = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/video/url?id=${id}`,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 相关视频
export const get_aboutVideo = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/related/allvideo?id=${id}`,{credentials:'include'})      //相关视频，id为视频 id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
//视频评论
export const get_videoComment = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/comment/video?id=${id}`,{credentials:'include'})      //视频下的评论，id为视频 id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 视频点赞
export const get_videoLove = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/resource/like?t=1&type=5&id=${id}`,{credentials:'include'})      //视频点赞，t=1点赞，其他为取消，id为视频 id,type=5为视频
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}