import React from "react"
import store from "../../store"
class PlayBarFixed extends React.Component {
    render() {
        let { songUrl } = store.getState().playSong
        console.log(songUrl)
        return (
            <div>
                <audio ref="playbarfixed" autoPlay={true} controls src={songUrl[0].url}></audio>
            </div>
        )
    }
}
export default PlayBarFixed