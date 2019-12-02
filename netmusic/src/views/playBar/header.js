import React from "react"
import playBarCss from "../../assets/css/playBar.module.css"
class Header extends React.Component {
    goback(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div style={{ clear: "both",paddingTop:"25px",lineHeight:"20px" }}>
                <img className={playBarCss.goback} onClick={this.goback.bind(this)} src={require("../../assets/icons/goback.png")} alt="" />
                <div className={playBarCss.songInfo}>
                    <div className={playBarCss.songName}>{this.props.songTitle}</div>
                    <div className={playBarCss.singer}>{this.props.singer}</div>
                </div>
            </div>
        )
    }
}
export default Header