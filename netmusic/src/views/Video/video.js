import React from 'react'
import { getVideoLists, getVideo, get_videoLove } from '../../api/VideoApi'
import { Tabs, Badge, PullToRefresh } from 'antd-mobile';
import VideoCss from "../../assets/css/video.module.css"
import VideoListView from './listView';


class Video extends React.Component {
    constructor() {
        super()
        this.state = {
            tabs: [],
            videos: [],
            refreshing: true,
            likes: []
        }
    }
    componentDidMount() {
        // console.log(state)
        localStorage.setItem('key', 75100)
        // 获取标签列表
        getVideoLists()
            .then(res => {
                console.log(res)
                let tab = []
                for (var i = 0; i < 10; i++) {
                    var obj = {
                        title: <Badge key={res.data[i].id}>{res.data[i].name}</Badge>
                    }
                    tab.push(obj)
                }
                console.log(tab)
                this.setState({
                    tabs: tab,
                    refreshing: false
                })
            })
    }
    change(titleObj) {
        console.log(titleObj)
        localStorage.setItem('key', titleObj.title.key)
        // 获取标签对应视频
        getVideo(titleObj.title.key)
            .then(res => {
                console.log(res)
                this.setState({
                    videos: res.datas,
                    refreshing: false
                })
            })
    }
    // 点击评论跳到视频详情
    jumpComment(id, name, times) {
        this.props.history.push(`/comment?keywords=${id}&name=${name}&times=${times}`)
    }
    //点赞
    love(id) {
        console.log(id)
        get_videoLove(id)
            .then(res => {
                console.log(res)
                if (res.code === 200) {
                    if (this.state.likes.indexOf(id) === -1) {
                        this.state.likes.push(id)
                        this.setState({
                        })
                    } else {
                        let arr = this.state.likes.filter(item => item !== id)
                        this.setState({
                            likes: arr
                        })
                    }
                }
            })
    }
    onRefresh() {
        if (!localStorage.getItem('key')) {

            localStorage.setItem('key', 75100)
        }
        getVideo(localStorage.getItem('key'))
            .then(res => {
                console.log(res)
                this.setState({
                    videos: res.datas,
                    refreshing: false
                })
            })
    }
    render() {
        console.log(this.state)
        let { videos, tabs, likes } = this.state
        console.log(likes)
        console.log(videos)
        console.log(tabs)

        return (

            <div>
                <Tabs tabs={tabs} onChange={this.change.bind(this)}

                >
                    {/* 1*/}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            <VideoListView></VideoListView>
                        </PullToRefresh>
                    </div>
                    {/* 2 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>

                    {/* 3 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                    {/* 4 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                    {/* 5 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                    {/* 6 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                    {/* 7 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                    {/* 8 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                    {/* 9 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                    {/* 10 */}
                    <div>
                        <PullToRefresh
                            refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
                            onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
                        >
                            {videos.map((item, i) => <li key={i}
                                className={VideoCss.videoLi}>
                                <video src={item.data.urlInfo.url}
                                    className={VideoCss.videocss}
                                    poster={item.data.coverUrl}
                                    controls="controls"></video>
                                <div className={VideoCss.videoTitle}>
                                    {item.data.title}
                                </div>
                                <div className={VideoCss.videofooter}>
                                    <img src={item.data.creator.avatarUrl} className={VideoCss.videoImg} alt="" />
                                    <span className={VideoCss.videoSpan1}>{item.data.creator.nickname}</span>
                                    <span className={VideoCss.videoSpan2} onClick={this.love.bind(this, item.data.vid)}>
                                        <img className={VideoCss.videoImg2} src={likes.indexOf(item.data.vid) !== -1 ? require('../../assets/icons/dianzan1.png') : require('../../assets/icons/dianzan.png')} alt="" />
                                        <span>{likes.indexOf(item.data.vid) !== -1 ? item.data.praisedCount + 1 : item.data.praisedCount}</span>
                                    </span>
                                    <span className={VideoCss.videoSpan3} onClick={this.jumpComment.bind(this, item.data.vid, item.data.title, item.data.playTime)}>
                                        <img className={VideoCss.videoImg3} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span>{item.data.commentCount}</span>
                                    </span>
                                    <img className={VideoCss.videoImg4} src={require('../../assets/icons/more.png')} alt="" />
                                </div>
                            </li>
                            )}
                        </PullToRefresh>
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default Video