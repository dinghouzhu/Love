import React, { Fragment } from 'react'
import store from '../../store'
import { getMusicMv } from '../../actions/SearchAcion'
import Qs from 'query-string'
import SearchCss from '../../assets/css/search.module.css'
import { Search_aboutVideo, Search_mvComment } from '../../api/SearchApi'

class SingerMv extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            count: '',
            aboutVideos: [],
            comments: [],
            hotComments: []
        }
    }
    componentDidMount() {
        // console.log(Qs.parse(this.props.location.search))
        // mv的id
        let keywords = Qs.parse(this.props.location.search)
        store.dispatch(getMusicMv(keywords.keywords))
        // mv的title
        let name = Qs.parse(this.props.location.search)
        setTimeout(() => {
            this.setState({
                value: name.name
            })
        }, 200)
        // mv的播放次数
        let times = Qs.parse(this.props.location.search)
        setTimeout(() => {
            this.setState({
                count: times.times
            })
        }, 200)

        // 页面加载获取相关视频
        Search_aboutVideo(keywords.keywords)
            .then(res => {
                // console.log(res)
                this.setState({
                    aboutVideos: res.data
                })
            })
        // 页面加载获取mv评论
        Search_mvComment(keywords.keywords)
            .then(res => {
                console.log(res)
                this.setState({
                    comments: res.comments,
                    hotComments: res.hotComments,
                })
            })
    }
    // 回退
    jumpBack() {
        this.props.history.go(-1)
    }
    render() {
        // console.log(store.getState())
        let { searchMv } = store.getState().SearchReducer
        let { value, count, aboutVideos, comments, hotComments } = this.state
        console.log(aboutVideos)
        return (
            <Fragment>
                <div className={SearchCss.mvDiv}>
                    <div className={SearchCss.mvHeader}>
                        <img src={require('../../assets/icons/left_search.png')} className={SearchCss.mvBack} alt="" onClick={this.jumpBack.bind(this)} />
                        <span className={SearchCss.mvSpan}>{value}</span>
                    </div>
                    <video src={searchMv} className={SearchCss.mvvideo} controls></video>
                </div>
                <div className={SearchCss.mvcount} >{count >= 100000 ? parseInt(count / 10000) + '万次观看' : count + '次观看'}</div>
                <div className={SearchCss.mvIcon}>
                    <img src={require('../../assets/icons/good.png')} className={SearchCss.mvIcons} alt="" />
                    <img src={require('../../assets/icons/add.png')} className={SearchCss.mvIcons} alt="" />
                    <img src={require('../../assets/icons/comment1.png')} className={SearchCss.mvIcons} alt="" />
                    <img src={require('../../assets/icons/share1.png')} className={SearchCss.mvIcons} alt="" />
                </div>
                <hr className={SearchCss.mvhr} />
                {/* 相关视频 */}
                <ul className={SearchCss.mvUl}>
                    {aboutVideos.map(item =>
                        <li key={item.creator[0].userId} className={SearchCss.mvLi}>
                            <span className={SearchCss.mvCount}>{item.playTime >= 10000 ? parseInt(item.playTime / 10000) + '万' : item.playTime}</span>
                            <img className={SearchCss.mvImg} src={item.coverUrl} alt="" />
                            <div className={SearchCss.Pp}>
                                <span className={SearchCss.mvName}>{item.title}</span>
                                <div>
                                    <span className={SearchCss.mvTime}>
                                        {parseInt(item.durationms / 1000 / 60) < 10 ? '0' + parseInt(item.durationms / 1000 / 60) : parseInt(item.durationms / 1000 / 60)}:{(item.durationms / 1000 - 60 * parseInt(item.durationms / 1000 / 60)) < 10 ? '0' + (item.durationms / 1000 - 60 * parseInt(item.durationms / 1000 / 60)) : (item.durationms / 1000 - 60 * parseInt(item.durationms / 1000 / 60))}
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className={SearchCss.mvTime}>{item.creator[0].userName}</span>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                {/* 评论 */}
                <div className={SearchCss.commentTitle}>精彩评论</div>
                <ul>
                    {hotComments.map(item => {
                        return (
                            <li key={item.commentId} className={SearchCss.commentLI}>
                                <div className={SearchCss.commentP}>
                                    <img className={SearchCss.commentAvatar} src={item.user.avatarUrl} alt="" />
                                    <span className={SearchCss.commentNickname}>{item.user.nickname}</span>
                                    <i className={SearchCss.commentI}>
                                        <span className={SearchCss.commentlikedCount}>{item.likedCount}</span>
                                        <img className={SearchCss.commentIcons} src={require("../../assets/icons/good.png")} alt="" />
                                    </i>
                                    <span className={SearchCss.commentTime}>{new Date(item.time).toLocaleDateString()}</span>
                                </div>
                                <div className={SearchCss.commentContent}>{item.content}</div>
                            </li>
                        )
                    })}
                </ul>
                <div className={SearchCss.commentTitle}>最新评论</div>
                <ul>
                    {comments.map(item => {
                        return (
                            <li key={item.commentId} className={SearchCss.commentLI}>
                                <div className={SearchCss.commentP}>
                                    <img className={SearchCss.commentAvatar} src={item.user.avatarUrl} alt="" />
                                    <span className={SearchCss.commentNickname}>{item.user.nickname}</span>
                                    <i className={SearchCss.commentI}>
                                        <span className={SearchCss.commentlikedCount}>{item.likedCount}</span>
                                        <img className={SearchCss.commentIcons} src={require("../../assets/icons/good.png")} alt="" />
                                    </i>
                                    <span className={SearchCss.commentTime}>{new Date(item.time).toLocaleDateString()}</span>
                                </div>
                                <div className={SearchCss.commentContent}>{item.content}</div>
                            </li>
                        )
                    })}
                </ul>
            </Fragment >
        )
    }
}
export default SingerMv