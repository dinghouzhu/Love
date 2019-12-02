import{ getnewsong,newsongapi,getalistofsongs,getsongdatail,getlyricmessage,panduan,songdraw,dengluhaha, gotolistsongbai, paihangbangdetail} from "../../api/maple/index"

const actionCreator = (type,payload) => ({type,payload})
//获取用户歌单详情
export const getListnew = (dispatch,userid)=>{//外层一个函数 函数里面又返回了一个函数
    getnewsong(userid)
    .then(res=>{
        // console.log(res)
       dispatch(actionCreator('GetLists',res))
    })
}
//新建歌单
export const newSongAction=(dispatch,params)=>{
    // console.log(params)
    newsongapi(params)
    .then(res=>{
        dispatch(actionCreator("NEW_SONG",res))
    })
}
//获取歌单信息
export const getsonglist=(dispatch,id)=>{
    getalistofsongs(id)
    .then(res=>{
        dispatch(actionCreator('GET_A_LIST_OF_SONGS',res))
    })
}
//获取歌曲信息
export const getsongdetailaction=(dispatch,id)=>{
    // console.log(id)
    getsongdatail(id)
    .then(res=>{
        // console.log(res)
        dispatch(actionCreator('GET_SONG_DATAIL',res))
    })
}

//获取歌词
export const getlyricsong=(dispatch,id)=>{
    // console.log(id)
    getlyricmessage(id)
    .then(res=>{
        // console.log(res)
        dispatch(actionCreator('GET_SONG_XINXI',res))
    })
}
//验证手机号码是否注册
export const shoujiyanzhengsuju=(dispatch,id)=>{
    // console.log(id)
    panduan(id)
    .then(res=>{
        // console.log(res)
        dispatch(actionCreator('SHOU_JI_YAN_ZHENG',res))
    })
}

// 获取歌曲照片的地址即详情
export const songdrawdetail=(dispatch,id)=>{
    songdraw(id)
    .then(res=>{
        // console.log(res)
        dispatch(actionCreator("GET_DRAW_GOTO_DO",res))
    })
}
//手机号码进行登录
export const DengLuGuoLai=(dispatch,userid)=>{
    dengluhaha(userid)
    .then(res=>{
        // console.log(res)
       dispatch(actionCreator('DengLuShuJu',res))
    })
}

//排行榜接口
export const BHANGPANGGOTO=params=>dispatch=>{
    gotolistsongbai()
    .then(res=>{
        // console.log(res)
        dispatch(actionCreator("BHANG_PANG_GO_TO",res))
    })
}

//排行榜接口页面进入接口触发的事件
export const BangDetail=(dispatch,xsid)=>{
    paihangbangdetail(xsid)
    .then(res=>{
        dispatch(actionCreator("BANG_DETAIL_GO_TO",res))
    })
}