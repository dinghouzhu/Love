import React from "react"
import Header from "./header"
import PicScale from "./picScale"
import Features from "./functions"
import playBarCss from "../../assets/css/playBar.module.css"
import store from "../../store"
import { getSongStatus } from "../../actions/playBar"
import { getPlaySongUrl } from "../../actions/discover"
import { getSongDetails } from "../../api/discover"
import QS from "query-string"
class PlayBar extends React.Component {
    constructor() {
        super()
        this.state = {
            pic: '',
            time: 0,
            songTitle: '',
            singer: '',
            flag: true,
            songDetails: [],
            id: ''
        }
    }
    componentDidMount() {
        let idObj = QS.parse(this.props.location.search)
        store.dispatch(getPlaySongUrl(idObj.id))
        getSongDetails(idObj.id)
            .then(res => {
                this.setState({
                    pic: res.songs[0].al.picUrl,
                    songTitle: res.songs[0].name,
                    singer: res.songs[0].ar[0].name,
                    songDetails: res.songs,
                    time: res.songs[0].dt,
                    id: idObj.id
                })
                setTimeout(() => {
                    store.dispatch(getSongStatus(this.state))
                }, 50)
            })
    }
    changePicStatus(flag) {
        this.setState({
            flag: flag
        })
    }
    changeSongs(id) {
        console.log(id)
        store.dispatch(getPlaySongUrl(id))
        getSongDetails(id)
            .then(res => {
                console.log(res)
                this.setState({
                    pic: res.songs[0].al.picUrl,
                    songTitle: res.songs[0].name,
                    singer: res.songs[0].ar[0].name,
                    songDetails: res.songs,
                    time: res.songs[0].dt,
                })
            })
    }
    render() {
        let { songUrl } = store.getState().playSong
        // console.log(songUrl)
        return (
            <div className={playBarCss.playbarBox}>
                <Header singer={this.state.singer} songTitle={this.state.songTitle} history={this.props.history} />
                <PicScale pic={this.state.pic} flag={this.state.flag} />
                <Features id={this.state.id} changeSongs={this.changeSongs.bind(this)} history={this.props.history} location={this.props.location} songUrl={songUrl} changePicStatus={this.changePicStatus.bind(this)} time={this.state.time} />
            </div>
        )
    }
}
export default PlayBar