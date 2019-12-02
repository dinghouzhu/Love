import React from "react"
import {connect} from "react-redux"
import discoverCss from "../../../../assets/css/discover.module.css"
import store from "../../../../store"
import PingLun from "../icon-my/talklog.png"
import FenXiang from "../icon-my/sharess.png"
import XiaZai from "../icon-my/download.png"
import DuoXuan from "../icon-my/xin.png"
import ZuoJianTou from "../icon-my/left.png"
import PoFang from "../icon-my/playSong.png"
import DianD from "../icon-my/dian.png"
import { BangDetail } from "../../../../actions/maple/CreateSongnew"
const mapStateProps=state=>{
    return{

    }
};
const mapGetProps=dispatch=>{
    return{
        chufazhuanhuan(xsid){
            BangDetail(dispatch,xsid)
        }

    }
};
@connect(mapStateProps,mapGetProps)
class BangDanSong extends React.Component{
    constructor(){
        super()
        this.state={
            cunzhi:''
        }
    }

    componentDidMount(){
        let toxsid=this.props.location.state.toxsid
        this.props.chufazhuanhuan(toxsid)
    }
    tiaozhuangedanyemian(id,arrid){
        localStorage.setItem("recentSongList",JSON.stringify(arrid))
        localStorage.setItem("id",id)
        this.props.history.push(`/playbar?id=${id}`)
    }
    // jhome(){
    //     this.props.history.go(-1)
    // }
    zuojianhuiqu(){
        this.props.history.go(-1)
    }
    render(){
        // console.log(this.props)
        try{

            let arrsong=store.getState().PaiHangDetail.detailpaihang.playlist.tracks
            let zhutisong=store.getState().PaiHangDetail.detailpaihang.playlist
            let gedandate=zhutisong.trackIds
            let arrdetail = []
            // console.log(zhutisong.name)
            gedandate.map(item=>arrdetail.push(item.id))
            return(
                <div>
                    <div className={discoverCss.songList} style={{background:"#fff"}}>
                        {/* <h1>Nihao1</h1> */}
                        <div className={discoverCss.header} style={{background:`url(${zhutisong.coverImgUrl})`}}>
                            <img onClick={this.zuojianhuiqu.bind(this)} className={discoverCss.dayRecGoback} style={{ top: "0px" }} src={ZuoJianTou} alt="" />
                            <span className={discoverCss.songListTitle}>{zhutisong.name}</span>
                            <div className={discoverCss.headerBox}>
                                <img className={discoverCss.headerImg} src="" alt="" />
                                <div className={discoverCss.headerDiv}>
                                </div>
                            </div>
                            <ul className={discoverCss.headerUL}>
                                <li className={discoverCss.headerLI} >
                                    <img className={discoverCss.headerULIMG} src={PingLun} alt="" />
                                    <span>评论</span>
                                </li>
                                <li className={discoverCss.headerLI}>
                                    <img className={discoverCss.headerULIMG} src={FenXiang} alt="" />
                                    <span>分享</span>
                                </li>
                                <li className={discoverCss.headerLI}>
                                    <img className={discoverCss.headerULIMG} src={XiaZai} alt="" />
                                    <span>下载</span>
                                </li>
                                <li className={discoverCss.headerLI}>
                                    <img className={discoverCss.headerULIMG} src={DuoXuan} alt="" />
                                    <span>多选</span>
                                </li>
                            </ul>
                        </div>
                        <div className={discoverCss.songShow}>
                            <div className={discoverCss.songNav}>
                                <img className={discoverCss.songNavIcon} src="" alt="" />
                                <p className={discoverCss.songNavP}>
                                    <b className={discoverCss.songNavPlay}>播放全部</b>
                                    <span className={discoverCss.songNavNum}>(共100首)</span>
                                    <i className={discoverCss.songNavI}>
                                        <b>+</b>
                                        &nbsp;
                                        &nbsp;
                                    <span>收藏</span>
                                    <span>{"("+(Math.floor((zhutisong.subscribedCount)/10000))+"万)"}</span>
                                    </i>
                                </p>
                            </div>
                            <ul className={discoverCss.songListUl}>
                                {arrsong.map((item, index) => {
                                    return (
                                        <li onClick={this.tiaozhuangedanyemian.bind(this,item.id,arrdetail)} className={discoverCss.songListLI} key={item.id}>
                                            <p className={discoverCss.songListP}>
                                                <span className={discoverCss.songListLeft}>{index + 1}</span>
                                    <span className={discoverCss.songListSpan}><span className={discoverCss.Alia}>{item.name}</span><span>{item.tns}</span></span>
                                            </p>
                                    <span className={discoverCss.songListAr}>{item.ar[0].name}</span>
                                            <img className={discoverCss.songIconVideoPlay} src={PoFang} alt="" />
                                            <img className={discoverCss.songIconMeausonglist} src={DianD} alt="" />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        catch{
            return (
                <div>
                    <h1>正在加载中......</h1>
                </div>
            )
        }
    }
}

export default BangDanSong
