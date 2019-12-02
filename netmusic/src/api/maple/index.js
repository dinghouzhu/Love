//获取用户歌单
// import
export const getnewsong = (userid) => {
    return fetch(`http://106.12.10.151:3000/user/playlist?uid=${userid}`)
        .then(body => body.json())
        .then(res => {
            // console.log(res)
            return res.playlist
        })
}


//新建歌单接口*需要登录
// /playlist/create?name=测试歌单

export const newsongapi = (params) => {
    let url = "http://106.12.10.151:3000/playlist/create?name=" + params
    console.log(url)
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            console.log(res)
            return res
        })
}
//获取歌单歌曲的接口
export const getalistofsongs = (id) => {
    let url = "http://106.12.10.151:3000/playlist/detail?id=" + id
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            // console.log(res)
            return res.playlist
        })
}

//获取歌曲播放地址
export const getsongdatail = (id) => {
    let url = "http://106.12.10.151:3000/song/url?id=" + id
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            // console.log(res.data)
            return res
        })
}

//获取歌词信息等地址
export const getlyricmessage = (id) => {
    // if(!id){
    //     return ''
    // }
    let url = "http://106.12.10.151:3000/lyric?id=" + id
    // console.log(url)
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            // console.log(res)
            return res
        })
}
//判断手机号码是否注册过
export const panduan = (id) => {
    // console.log(id)
    let url = "http://106.12.10.151:3000/cellphone/existence/check?phone=" + id
    //  console.log(url)
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            //  console.log(res)
            return res
        })
}

//调用私人FM接口
export const sirenfm = () => {
    let url = "http://106.12.10.151:3000/personal_fm"
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            return res
        })
}


//获取歌曲详细的接口(照片)
export const songdraw = (id) => {
    let url = "http://106.12.10.151:3000/song/detail?ids=" + id
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            console.log(res)
            return res
        })
}
//默认登录接口
export const dengluhaha = (userid) => {
    return fetch(`http://106.12.10.151:3000/login/cellphone?phone=18856486021&password=1234567`)
        .then(body => body.json())
        .then(res => {
            console.log(res)
            return res
        })
}

//刷新登录接口

//排行榜接口
export const gotolistsongbai = () => {
    return fetch('http://106.12.10.151:3000/toplist/detail')
        .then(body => body.json())
        .then(res => {
            console.log(res)
            return res
        })
}

//排行榜进入页面接口
export const paihangbangdetail = (xsid) => {
    let url = "http://106.12.10.151:3000/top/list?idx=" + xsid
    return fetch(url)
        .then(body => body.json())
        .then(res => {
            console.log(res)
            return res
        })
}