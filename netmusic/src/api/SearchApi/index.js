// 搜索功能
export const Search = (val, limit, type) => {   //val:输入框值，limit:显示条数，type：默认显示综合
    return (
        fetch(`http://106.12.10.151:3000/search?keywords=${val}&limit=${limit}&type=${type}`)
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}

// 热搜榜
export const Search_hot = () => {
    return (
        fetch('http://106.12.10.151:3000/search/hot/detail')
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 热门歌手
export const Singer_hot = () => {
    return (
        fetch(`http://106.12.10.151:3000/top/artists?offset=0&limit=50`)
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}

// 歌手描述
export const Singer_dec = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/artist/desc?id=${id}`)    //id为歌手id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}

// 歌手热门50首歌曲  (歌手单曲)
export const Singer_hot_music = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/artists?id=${id}`)   //id为歌手id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}

// 歌手专辑
export const Singer_album = (id, limit = 30) => {
    return (
        fetch(`http://106.12.10.151:3000/artist/album?id=${id}&limit=${limit}`)      //id为歌手id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}

// 歌手Mv
export const Singer_mv = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/artist/mv?id=${id}`)      //id为歌手id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}

// 点击音乐播放
export const Singer_Music_Open = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/song/url?id=${id}`)      //id为歌手id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}

// // 收藏或取消歌手
// export const Singer_love = (id, t = 1) => {
//     return (
//         fetch(`http://106.12.10.151:3000/artist/sub?id=${id}&t=${t}`)   //id为歌手id,t默认为1收藏，其他为取消
//             .then(body => body.json())
//     )
// }

// 模糊查询
export const Search_about = (key) => {
    return (
        fetch(`http://106.12.10.151:3000/search/suggest?keywords=${key}&type=mobile`)      //key为搜索关键词,type:传 'mobile' 则返回移动端数据
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// // 入驻歌手
// export const Search_Singer_come = () => {
//     return (
//         fetch(`http://106.12.10.151:3000/artist/list?cat=5001&limit=99`)
//             .then(body => body.json())
//     )
// }

// 播放Mv
export const Search_Mv = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/mv/url?id=${id}`)      //传入 mv id,可获取 mv 播放地址
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// 相关视频
export const Search_aboutVideo = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/related/allvideo?id=${id}`)      //mv下的相关视频，id为Mv id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}
// Mv评论
export const Search_mvComment = (id) => {
    return (
        fetch(`http://106.12.10.151:3000/comment/mv?id=${id}`)      //mv下的评论，id为Mv id
            .then(body => body.json())
            .then(res => {
         return res
      })
    )
}