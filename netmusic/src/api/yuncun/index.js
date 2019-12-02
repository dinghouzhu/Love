// 云村广场
export const yuncun = () => {
    return (
        fetch(`http://106.12.10.151:3000/event?pagesize=30`,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 视频点赞
export const get_DongtaiLove = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/resource/like?t=1&type=5&id=${id}`,{credentials:'include'})      //视频点赞，t=1点赞，其他为取消，id为视频 id,type=5为视频
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}