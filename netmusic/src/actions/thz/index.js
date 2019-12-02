// 用户播放排行
export const userPlayRank = (result) => {
    return {
        type: USER_PLAY_RANK,
        result: result
    }
}

export const userPlayRankAxios = (id, _type) => {
    return (dispatch) => {
        api.getUserPlayBack(id, _type).then(res => {
            if (res.data.code === 200) {
                if (_type === 1) {
                    console.log('week')
                    dispatch(userPlayRank({ID: id, data: { musicArray: res.data.weekData, isCall: true }}))
                }
            }
            else {
                dispatch(userPlayRank({ data: { msg: '由于对方设置，你不能查看听歌排行', isCall: false }}))
            }
        })
    }
}