import React from 'react'
import { yuncun, get_DongtaiLove } from '../../api/yuncun'
import {  Badge } from 'antd-mobile';
import yuncunCss from '../../assets/css/yuncun.module.css'

const tabs = [
    { title: <Badge>广场</Badge> },
    { title: <Badge>动态</Badge> }
];

class YunCount extends React.Component {
    constructor() {
        super()
        this.state = {
            yuncunLists: [],
            flag: false,
            loves: []
        }
    }
    componentDidMount() {
        yuncun()
            .then(res => {
                // console.log(res)
                this.setState({
                    yuncunLists: res.event
                })
            })
    }
    like(id) {
        // console.log(id)
        get_DongtaiLove(id)
            .then(res => {
                if (res.code === 200) {
                    let data = this.state.loves.indexOf(id) == -1
                    // console.log(data)
                    if (data) {
                        this.state.loves.push(id)
                        this.setState({
                        })
                    }
                    else {
                        let arr = this.state.loves.filter(item => item !== id)
                        this.setState({
                            loves: arr
                        })
                    }
                    console.log(this.state.loves)
                }
            })
    }
    render() {
        let { yuncunLists, loves } = this.state
        console.log(loves)
        try {
            console.log(yuncunLists)
        } catch (e) {
            return null
        }
        return (
            <div>
                <ul>
                    {yuncunLists.map(item => {
                        return (
                            <li key={item.id} className={yuncunCss.yuncunLi}>
                                <div className={yuncunCss.yuncunDiv}>
                                    <img className={yuncunCss.yuncunImg} src={item.user.avatarUrl} alt="" />
                                    <div className={yuncunCss.yuncunbig}>
                                        <div className={yuncunCss.yuncunHeader}>
                                            <span className={yuncunCss.yuncunNcn}>{item.user.nickname}</span>
                                            <span className={yuncunCss.yuncunPub}>发布视频：</span>
                                        </div>
                                        <div className={yuncunCss.yuncunfans}>{item['rcmdInfo'] ? item.rcmdInfo.userReason : ""}</div>
                                    </div>
                                    <button className={yuncunCss.yuncunbtn}>+关注</button>
                                </div>
                                <div className={yuncunCss.yuncunComment}>
                                    {JSON.parse(item.json).msg}
                                </div>
                                <div>
                                    <ul>
                                        {item.pics.map((item, index) =>
                                            <li key={index}>
                                                <div className={yuncunCss.yuncunDivImg}>
                                                    <img className={yuncunCss.yuncunPic} src={item.originUrl} alt="" />
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className={yuncunCss.yuncunIcon}>
                                    <div className={yuncunCss.yuncuncount}>
                                        <img className={yuncunCss.yuncunIcon1} src={require('../../assets/icons/sharePic.png')} alt="" />
                                        <span className={yuncunCss.yuncunSpan}>{item.insiteForwardCount}</span>
                                    </div>
                                    <div className={yuncunCss.yuncuncount}>
                                        <img className={yuncunCss.yuncunIcon2} src={require('../../assets/icons/talk.png')} alt="" />
                                        <span className={yuncunCss.yuncunSpan}>{item.info.commentCount}</span>
                                    </div>
                                    <div className={yuncunCss.yuncuncount} onClick={this.like.bind(this, item.id)}>
                                        <img className={yuncunCss.yuncunIcon3} src={loves.indexOf(item.id) == -1 ? require('../../assets/icons/dianzan.png') : require('../../assets/icons/dianzan1.png')} alt="" />
                                        <span className={yuncunCss.yuncunSpan}>{loves.indexOf(item.id) == -1 ? item.info.likedCount : item.info.likedCount + 1}</span>
                                    </div>
                                    <div className={yuncunCss.yuncuncount}>
                                        <img className={yuncunCss.yuncunIcon4} src={require('../../assets/icons/more.png')} alt="" />
                                    </div>
                                </div>
                                <hr className={yuncunCss.yuncunHr} />
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        )
    }
}
export default YunCount