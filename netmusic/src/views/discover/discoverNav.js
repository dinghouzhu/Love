import React from "react"
import discoverCss from "../../assets/css/discover.module.css"
class DiscoverNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }
    toDayRecommend() {
        this.props.props.history.push('/discover/dayrecommend')
    }
    toAllPlayList() {
        this.props.props.history.push('/discover/allplaylist')
    }
    toBangHang(){
        this.props.props.history.push('/discover/baihangpang')
    }
    render() {
        return (
            <div style={{ display: "flex", width: '100%', justifyContent: 'space-around' }}>
                <div style={{textAlign:'center'}} onClick={this.toDayRecommend.bind(this)}>
                    <div style={{display:'block'}} className={discoverCss.Navitem}><img className={discoverCss.navIc}  src={require("../../assets/icons/recommend1.png")} alt="" /></div>
                    <span>推荐</span>
                </div>
                <div style={{textAlign:'center'}} onClick={this.toAllPlayList.bind(this)}>
                    <div style={{display:'block'}} className={discoverCss.Navitem}><img className={discoverCss.navIc}  src={require("../../assets/icons/songsList1.png")} alt="" /></div>
                    <span>歌单</span>
                </div>
                <div style={{textAlign:'center'}}>
                    <div style={{display:'block'}} onClick={this.toBangHang.bind(this)} className={discoverCss.Navitem}><img className={discoverCss.navIc}  src={require("../../assets/icons/toplist1.png")} alt="" /></div>
                    <span>排行榜</span>
                </div>
            </div>
        );
    }
}

export default DiscoverNav