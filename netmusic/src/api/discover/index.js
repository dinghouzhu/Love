// 发现页轮播图片
export const bannerDiscover = () => {
    return (
        fetch("http://106.12.10.151:3000/banner?type=1",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 获取发现页推荐歌单
export const getRecommendList = () => {
    return (
        fetch("http://106.12.10.151:3000/personalized?limit=6",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 获取发现页推荐歌单详情
export const getRecommendListDetails = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/playlist/detail?id=${id}`,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 获取歌曲详情

export const getSongDetails = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/song/detail?ids=${id}`,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 新碟上架
export const getNewAlbum = () => {
    return (
        fetch(`http://106.12.10.151:3000/top/album?limit=3`,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 新歌速递
export const getNewSongs = () => {
    return (
        fetch(`http://106.12.10.151:3000/top/song?type=0`,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 获取视频
export const getVideoListView = () => {
    return (
        fetch("http://106.12.10.151:3000/video/group?id=9104",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 获取全部mv
export const getMV = () => {
    return (
        fetch("http://106.12.10.151:3000/mv/all?limit=50",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取歌曲地址
export const getSongUrl = (id) => {
    return (
        fetch("http://106.12.10.151:3000/song/url?id=" + id,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取mv地址
export const getMVUrl = (id) => {
    return (
        fetch("http://106.12.10.151:3000/mv/url?id=" + id,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取mv详情
export const getMVDetials = (id) => {
    return (
        fetch("http://106.12.10.151:3000/mv/detail?id=" + id,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取日推
export const getDayRecommend = () => {
    return (
        fetch("http://106.12.10.151:3000/recommend/songs",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取热门歌单分类
export const getKindOfPlayList = () => {
    return (
        fetch("http://106.12.10.151:3000/playlist/hot",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取热门歌单分类下的歌单列表
export const getPlaylist = (cat) => {
    return (
        fetch("http://106.12.10.151:3000/top/playlist?limit=12&cat=" + cat,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取热门歌单分类下的精品歌单
export const getHighQualitylist = () => {
    return (
        fetch("http://106.12.10.151:3000/top/playlist/highquality?limit=12",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取热门歌单分类下的每日推荐歌单
export const getDayRecommendlist = () => {
    return (
        fetch("http://106.12.10.151:3000/personalized?limit=12",{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取歌单评论
export const getPlayListComment = (id) => {
    return (
        fetch("http://106.12.10.151:3000/comment/playlist?id=" + id,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}
// 获取歌曲评论
export const getsongComment = (id) => {
    return (
        fetch("http://106.12.10.151:3000/comment/music?id=" + id,{credentials:'include'})
            .then(body => body.json())
            .then(res => {
                return res
             })
    )
}


