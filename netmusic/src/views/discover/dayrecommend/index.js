import React from "react"
import store from "../../../store"
import { getDayRec } from "../../../actions/discover"
import discoverCss from "../../../assets/css/discover.module.css"
import { Toast} from 'antd-mobile';
let arr = []
class DayRecommend extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '根据你的音乐口味，为你推荐好音乐'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                title: ''
            })
        }, 5000);
        store.dispatch(getDayRec())
        Toast.info('根据你的音乐口味，为你推荐好音乐', 1);
    }
    goback() {
        this.props.history.go(-1)
    }
    playSong(id, arr) {
        console.log(arr)
        this.props.history.push("/playbar?id=" + id)
        localStorage.setItem("id", id)
        localStorage.setItem("recentSongList", JSON.stringify(arr))
    }
    render() {
         
        let { dayRecommend } = store.getState().dayRec
        try {
            return (
                <div>
                    <div className={discoverCss.songList} style={{ backgroundColor: '#fff' }}>
                        <div className={discoverCss.dayRecHeader}>
                            <img className={discoverCss.dayRecGoback} onClick={this.goback.bind(this)} src={require("../../../assets/icons/goback.png")} alt="" />
                            {/* <span className={discoverCss.dayRecTitle}>{this.state.title}</span> */}
                            <span className={discoverCss.dayRecTime}>{new Date().toLocaleDateString()}</span>
                            <div className={discoverCss.songShow}>
                                <div className={discoverCss.songNav}>
                                    <img className={discoverCss.songNavIcon} src={require('../../../assets/icons/bofangCircle.png')} alt="" />
                                    <p className={discoverCss.songNavP}>
                                        <b className={discoverCss.songNavPlay} style={{ color: "#000" }}>播放全部</b>
                                    </p>
                                    <i className={discoverCss.duoxuanFat}>
                                        <img className={discoverCss.duoxuan} src={require("../../../assets/icons/duoxuan.png")} alt="" />
                                        <span className={discoverCss.duoxuanSpan}>多选</span>
                                    </i>
                                </div>
                                <ul className={discoverCss.songListUl}>
                                    {dayRecommend.map((item, index) => {
                                        arr.push(item.id)
                                        return (
                                            <li className={discoverCss.songListLI} key={item.id} onClick={this.playSong.bind(this, item.id, arr)}>
                                                <p className={discoverCss.songListP}>
                                                    <span className={discoverCss.songListLeft}><img className={discoverCss.dayRecImg} src={item.album.picUrl} alt="" /></span>
                                                    <span className={discoverCss.songListSpan}><span className={discoverCss.Alia}>{item.name}</span></span>
                                                </p>
                                                <span className={discoverCss.songListAr}>{item.artists[0].name}-{item.album.name}</span>
                                                <img className={discoverCss.songIconVideoPlay} src={require('../../../assets/icons/videoplay.png')} alt="" />
                                                <img className={discoverCss.songIconMeausonglist} src={require('../../../assets/icons/meauSonglist.png')} alt="" />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div >
                </div >
            )
        } catch (e) {
            return null
        }
    }
}
export default DayRecommend