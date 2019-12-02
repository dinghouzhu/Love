import React from "react"
import playBarCss from "../../assets/css/playBar.module.css"
class PicScale extends React.Component {
    render() {
        const trans = this.props.flag ? 'running' : 'paused'
        return (
            <div style={{ clear: "both", overflow: 'hidden', padding: '75px 62.5px' }}>
                <img className={playBarCss.picScale} style={{
                    animationPlayState: trans
                }} src={this.props.pic} alt="" />
            </div>
        )
    }
}
export default PicScale