import React from "react"
import store from "../../../store"
import { getRecommendListDetail } from "../../../actions/discover"
import QS from "query-string"
import discoverCss from "../../../assets/css/discover.module.css"
let recentSongList = []
class SongList extends React.Component {
    componentDidMount() {
        let idObj = QS.parse(this.props.location.search)
        store.dispatch(getRecommendListDetail(idObj.id))
    }
    playSong(id) {
        this.props.history.push('/playbar?id=' + id)
        store.getState().songDetails.songDetails.map(item => recentSongList.push(item.id))
        console.log(recentSongList)
        // if (recentSongList.indexOf(id) === -1) {
        //     recentSongList.push(id)
        localStorage.setItem("recentSongList", JSON.stringify(recentSongList))
        localStorage.setItem("id", id)
        localStorage.setItem("status", 'songlist')
        // }
    }
    goback() {
        this.props.history.go(-1)
    }
    toComment() {
        let idObj = QS.parse(this.props.location.search)
        this.props.history.push('/discover/comment?playlistComment=' + idObj.id)
    }
    render() {
        let { songListDetails } = store.getState().songListDetails;
        let { songDetails } = store.getState().songDetails;
        // console.log(store.getState().playSong.songUrl[0].url)
        console.log(songDetails);
        try {
            return (
                <div>
                    <div className={discoverCss.songList}>
                        <div className={discoverCss.header}>
                            <img className={discoverCss.dayRecGoback} onClick={this.goback.bind(this)} style={{ top: "0px" }} src={require("../../../assets/icons/goback.png")} alt="" />
                            <span className={discoverCss.songListTitle}>歌单</span>
                            <div className={discoverCss.headerBox}>
                                <img className={discoverCss.headerImg} src={songListDetails.coverImgUrl} alt="" />
                                <div className={discoverCss.headerDiv}>
                                    <p className={discoverCss.headerName}>{songListDetails.name}</p>
                                    <img className={discoverCss.headerAvatar} src={songListDetails.creator.avatarUrl} alt="" />
                                    <span className={discoverCss.headerNickname}>{songListDetails.creator.nickname}</span>
                                    <p className={discoverCss.headerDes}>{songListDetails.description}</p>
                                </div>
                            </div>
                            <ul className={discoverCss.headerUL}>
                                <li className={discoverCss.headerLI} onClick={this.toComment.bind(this)}>
                                    <img className={discoverCss.headerULIMG} src={require("../../../assets/icons/comment.png")} alt="" />
                                    <span>{songListDetails.commentCount}</span>
                                </li>
                                <li className={discoverCss.headerLI}>
                                    <img className={discoverCss.headerULIMG} src={require("../../../assets/icons/share.png")} alt="" />
                                    <span>{songListDetails.shareCount}</span>
                                </li>
                                <li className={discoverCss.headerLI}>
                                    <img className={discoverCss.headerULIMG} src={require("../../../assets/icons/xiazai.png")} alt="" />
                                    <span>下载</span>
                                </li>
                                <li className={discoverCss.headerLI}>
                                    <img className={discoverCss.headerULIMG} src={require("../../../assets/icons/checkbox.png")} alt="" />
                                    <span>多选</span>
                                </li>
                            </ul>
                        </div>
                        <div className={discoverCss.songShow}>
                            <div className={discoverCss.songNav}>
                                <img className={discoverCss.songNavIcon} src={require('../../../assets/icons/bofangCircle.png')} alt="" />
                                <p className={discoverCss.songNavP}>
                                    <b className={discoverCss.songNavPlay}>播放全部</b>
                                    <span className={discoverCss.songNavNum}>(共{songListDetails.trackCount}首)</span>
                                    <i className={discoverCss.songNavI}>
                                        <b>+</b>
                                        &nbsp;
                                        &nbsp;
                                    <span>收藏</span>
                                        <span>({songListDetails.subscribedCount > 100000 ? parseInt(songListDetails.subscribedCount / 10000) + "万" : songListDetails.subscribedCount})</span>
                                    </i>
                                </p>
                            </div>
                            <ul className={discoverCss.songListUl}>
                                {songDetails.map((item, index) => {
                                    return (
                                        <li className={discoverCss.songListLI} key={item.id} onClick={this.playSong.bind(this, item.id)}>
                                            <p className={discoverCss.songListP}>
                                                <span className={discoverCss.songListLeft}>{index + 1}</span>
                                                <span className={discoverCss.songListSpan}><span className={discoverCss.Alia}>{item.name}</span>{!item.alia.length ? "" : <span>({item.alia})</span>}</span>
                                            </p>
                                            <span className={discoverCss.songListAr}>{item.ar[0].name}-{item.al.name}</span>
                                            <img className={discoverCss.songIconVideoPlay} src={require('../../../assets/icons/videoplay.png')} alt="" />
                                            <img className={discoverCss.songIconMeausonglist} src={require('../../../assets/icons/meauSonglist.png')} alt="" />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    {/* <audio className={discoverCss.audioPlay} autoPlay={true} controls src={songUrl.length ? store.getState().playSong.songUrl[0].url : ''}></audio> */}
                </div>
            )
        } catch (e) {
            return null
        }
    }
}
export default SongList