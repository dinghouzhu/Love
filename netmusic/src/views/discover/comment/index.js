import React from "react"
import QS from "query-string"
import { getRecommendListDetails, getSongDetails } from "../../../api/discover"
import { getPlayListComments, getsongComments } from "../../../actions/discover"
import store from "../../../store"
import discoverCss from "../../../assets/css/discover.module.css"
class Comment extends React.Component {
    constructor() {
        super()
        this.state = {
            url: '',
            title: '',
            avatar: '',
            nickname: ''
        }
    }
    componentDidMount() {
        let idObj = QS.parse(this.props.location.search)
        if (idObj.playlistComment) {
            store.dispatch(getPlayListComments(idObj.playlistComment))
            getRecommendListDetails(idObj.playlistComment)
                .then(res => {
                    this.setState({
                        url: res.playlist.coverImgUrl,
                        title: res.playlist.name,
                        avatar: res.playlist.creator.avatarUrl,
                        nickname: res.playlist.creator.nickname
                    })
                })
        } else if (idObj.songCommentId) {
            store.dispatch(getsongComments(idObj.songCommentId))
            getSongDetails(idObj.songCommentId)
                .then(res => {
                    console.log(res)
                    this.setState({
                        url: res.songs[0].al.picUrl,
                        title: res.songs[0].name,
                        nickname: res.songs[0].ar[0].name
                    })
                })
        }
    }
    goback() {
        this.props.history.go(-1)
    }
    render() {
        let { comments } = store.getState().comment
        console.log(comments)
        try {
            return (
                <div>
                    <div className={discoverCss.commentHeader}>
                        <img onClick={this.goback.bind(this)} className={discoverCss.commentGoback} src={require("../../../assets/icons/gobackBlack.png")} alt="" />
                        <span className={discoverCss.commenttotal}>评论({comments.total})</span>
                        <p className={discoverCss.playlistP}>
                            <img className={discoverCss.playlistImg} src={this.state.url} alt="" />
                            <span className={discoverCss.playlistTitle}>{this.state.title}</span>
                            <span className={discoverCss.playlistNickname}>by <span style={{ color: "rgb(23, 200, 253)" }}>{this.state.nickname}</span></span>
                        </p>
                    </div>
                    <div className={discoverCss.commentTitle}>精彩评论</div>
                    <ul>
                        {comments.hotComments.map(item => {
                            return (
                                <li key={item.commentId} className={discoverCss.commentLI}>
                                    <p className={discoverCss.commentP}>
                                        <img className={discoverCss.commentAvatar} src={item.user.avatarUrl} alt="" />
                                        <span className={discoverCss.commentNickname}>{item.user.nickname}</span>
                                        <i className={discoverCss.commentI}>
                                            <span className={discoverCss.commentlikedCount}>{item.likedCount}</span>
                                            <img className={discoverCss.commentIcons} src={require("../../../assets/icons/liked.png")} alt="" />
                                        </i>
                                        <span className={discoverCss.commentTime}>{new Date(item.time).toLocaleDateString()}</span>
                                    </p>
                                    <p className={discoverCss.commentContent}>{item.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={discoverCss.commentTitle}>最新评论</div>
                    <ul>
                        {comments.comments.map(item => {
                            return (
                                <li key={item.commentId} className={discoverCss.commentLI}>
                                    <p className={discoverCss.commentP}>
                                        <img className={discoverCss.commentAvatar} src={item.user.avatarUrl} alt="" />
                                        <span className={discoverCss.commentNickname}>{item.user.nickname}</span>
                                        <i className={discoverCss.commentI}>
                                            <span className={discoverCss.commentlikedCount}>{item.likedCount}</span>
                                            <img className={discoverCss.commentIcons} src={require("../../../assets/icons/liked.png")} alt="" />
                                        </i>
                                        <span className={discoverCss.commentTime}>{new Date(item.time).toLocaleDateString()}</span>
                                    </p>
                                    <p className={discoverCss.commentContent}>{item.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        } catch (e) {
            return <span>加载中，请稍后</span>
        }
    }
}
export default Comment