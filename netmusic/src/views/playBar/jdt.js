import { Progress } from 'antd-mobile';
import React from "react"
import playBarCss from "../../assets/css/playBar.module.css"
class PlayProgress extends React.Component {
    state = {
        percent: 0,
        totaltime: 0,
        ctime: 0
    };
    add = () => {
        let p = this.state.percent + 10;
        if (this.state.percent >= 100) {
            p = 0;
        }
        this.setState({ percent: p });
    }
    componentDidMount() {

    }
    tou(e){
        console.log(e)
    }
    componentWillReceiveProps(nextProps) {
        let cm = Math.floor((this.props.currentTime) / 60)
        let cs = Math.floor((this.props.currentTime) % 60)
        let m = Math.floor((this.props.duration) / 60)
        let s = Math.floor((this.props.duration) % 60)
        let totaltime = 0
        let ctime = 0
        if (s >= 10) {
            totaltime = "0" + m + ":" + s
        } else {
            totaltime = "0" + m + ':0' + s
        }
        if (cs >= 10) {
            ctime = "0" + cm + ":" + cs
        } else {
            ctime = "0" + cm + ':0' + cs
        }
        this.setState({
            percent: (nextProps.currentTime / nextProps.duration) * 100,
            totaltime: totaltime,
            ctime: ctime
        })
    }
    changeTime(e){
        this.setState({
            percent:((e.clientX-60)/250)*100
        })
        this.props.changeTime(((e.clientX-60)/250)*this.props.duration)
    }
    render() {
        const { percent, totaltime, ctime } = this.state;
        return (
            <div>
                <div className={playBarCss.jingdutiao} style={{height:'5px'}}>
                    <div className={playBarCss.jingdu} onClick={this.changeTime.bind(this)} onTouchMove={this.tou.bind(this)}><Progress  barStyle={{border:"1px solid #6ff"}} style={{ height: '2px',backgroundColor:"#ccc",borderRadius:'2px' }} percent={percent} position="normal" /></div>
                    <div aria-hidden="true" className={playBarCss.totaltime}>{totaltime}</div>
                    <div className={playBarCss.ctime}>{ctime}</div>
                </div>
            </div>
        );
    }
}

export default PlayProgress