import React from "react"
import PlayProgress from "./jdt"
import playBarCss from "../../assets/css/playBar.module.css"
import { setInterval } from "core-js"
let timerIntval = undefined
let index;
class Features extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: this.props.time,
            currentTime: 0,
            status: true
        }
    }
    changeState() {
        this.setState({
            duration: this.refs.AUDIO.duration,
            currentTime: this.refs.AUDIO.currentTime
        })
    }
    componentDidMount() {
        this.interVal();
        if (!localStorage.getItem("recentSongList")) {
            localStorage.setItem("recentSongList", JSON.stringify([26568862, 403710016, 515453363]))
        }
        let recentSongList = JSON.parse(localStorage.getItem("recentSongList"));
        let currentIndex = recentSongList.indexOf(parseInt(localStorage.getItem("id")));
        // console.log(currentIndex)
        index = currentIndex
    }
    interVal() {
        timerIntval = setInterval(() => {
            this.changeState()
        }, 1000)
    }
    changeStatus() {
        if (this.refs.AUDIO !== null) {
            if (this.refs.AUDIO.paused) {
                this.interVal();
                this.refs.AUDIO.play();
                this.setState({
                    status: true
                });
                this.props.changePicStatus(true)
            } else {
                clearInterval(timerIntval);
                this.refs.AUDIO.pause();
                this.setState({
                    status: false
                });
                this.props.changePicStatus(false)
            }
        }
    }
    NextSong() {
        let recentSongList = JSON.parse(localStorage.getItem("recentSongList"));
        index += 1;
        // console.log(index)
        if (index > recentSongList.length - 1) {
            index = 0
        }
        this.props.changeSongs(recentSongList[index]);
        this.props.history.push("/playbar?id="+recentSongList[index]);
        // console.log(this.props.location)
        localStorage.setItem("status", 'songlist')
    }
    PrevSong() {
        let recentSongList = JSON.parse(localStorage.getItem("recentSongList"))
        index -= 1;
        // console.log(index)
        if (index < 0) {
            index = recentSongList.length - 1
        }
        this.props.changeSongs(recentSongList[index])
        this.props.history.push("/playbar?id="+recentSongList[index])
        localStorage.setItem("status", 'songlist')
    }
    tosongComment(id) {
        if (localStorage.getItem("status") === "songlist") {
            let recentSongList = JSON.parse(localStorage.getItem("recentSongList"))
            this.props.history.push('/discover/comment?songCommentId=' + recentSongList[index])
        } else if (localStorage.getItem("status") === "single") {
            this.props.history.push('/discover/comment?songCommentId=' + localStorage.getItem("id"))
        }
    }
    componentWillUnmount() {
        clearInterval(timerIntval)
    }
    changeTime(ctime) {
        // console.log(111)
        this.refs.AUDIO.currentTime = ctime
    }
    render() {
        return (
            <div style={{ clear: "both" }}>
                <div className={playBarCss.funcList}>
                    <img className={playBarCss.next} src={require("../../assets/icons/ILike.png")} alt="" />
                    <img className={playBarCss.next} src={require("../../assets/icons/download.png")} alt="" />
                    <img className={playBarCss.next} src={require("../../assets/icons/yinzhi.png")} alt="" />
                    <img className={playBarCss.next} onClick={this.tosongComment.bind(this)} src={require("../../assets/icons/songComment.png")} alt="" />
                    <img className={playBarCss.next} src={require("../../assets/icons/meau.png")} alt="" />
                </div>
                <audio onEnded={this.PrevSong.bind(this)} autoPlay={true} ref="AUDIO" src={this.props.songUrl[0].url}></audio>
                <PlayProgress changeTime={this.changeTime.bind(this)} duration={this.props.time / 1000} currentTime={this.state.currentTime} />
                <div className={playBarCss.PlayBox}>
                    <img className={playBarCss.prev} onClick={this.PrevSong.bind(this)} src={require("../../assets/icons/prev.png")} alt="" />
                    <img className={playBarCss.PauseOrRunning} onClick={this.changeStatus.bind(this)} src={this.state.status ? require("../../assets/icons/pause.png") : require("../../assets/icons/play.png")} alt="" />
                    <img className={playBarCss.next} onClick={this.NextSong.bind(this)} src={require("../../assets/icons/next.png")} alt="" />
                </div>
            </div>
        )
    }
}
export default Features