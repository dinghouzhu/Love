import React,{Fragment} from "react";
import store from "../../../../store"
import SL from "./songlist.module.css"
import { NavBar, Icon } from 'antd-mobile';
import {connect} from "react-redux"
import PoFang from "../icon-my/playSong.png"
import PingLun from "../icon-my/talklog.png"
import FengXiang from "../icon-my/sharess.png"
import XiaZai from "../icon-my/download.png"
import DuoXuan from "../icon-my/duoxuan.png"
import { getsongdetailaction,songdrawdetail } from "../../../../actions/maple/CreateSongnew";
//修饰符

const mapStateToProps=state=>{
  // console.log(state)
  return{

  }
};

const mapDispatchToProps=dispatch=>{
  return{
    huoqugedan(id){
      getsongdetailaction(dispatch,id)
    },
    canshulail(id){
      songdrawdetail(dispatch,id)
    }
  }
}

@connect(mapStateToProps,mapDispatchToProps)




//UI组件
class SongList extends React.Component {
  constructor(){
    super()
    this.state={

    }
  }
  componentDidMount(){

  }
  jinrugequ(id,i,songname,gedanid,gedan){
    // console.log(gedan)
    // console.log(id)
    localStorage.setItem("recentSongList",JSON.stringify(gedan))
      localStorage.setItem("id",id)
      this.props.history.push(`/playbar?id=${id}`)
    // this.props
    // this.props.huoqugedan(id)
    // this.props.canshulail(id)
    // this.props.history.push({pathname:`/fotter`,state:{kl:i,songname,id}})
  }
  render(){
    try{
      let gequdata=store.getState()
      // console.log(gequdata)
      // console.log(this.props)
      let gedanid=this.props.location.state.id
      let listdatasong=gequdata.newSong.newlistsong
      // let songdatails=gequdata.getSongDatil.songdatail
      let nak=gequdata.newSongName.songlistname.name
      var {picUrl}=listdatasong[0].al
      let urk=picUrl
      let gedansuju=store.getState().newSong.newlistsong
      let arrdetail = []
          gedansuju.map(item=>arrdetail.push(item.id))
      return(
        <Fragment>
          <div style={{position:"absolute",height:"100%",width:"100%"}}>
            <div>
              <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                  this.props.history.push({pathname:"/found/My"})
                }}
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" />
                ]}
              >歌单</NavBar>
            </div>
            <div className={SL.songlist_top}>
              <div className={SL.songlist_top_left}>
                <div ><img src={urk} alt="" /></div>
                <div className={SL.songlist_top_left_div}>
                  <span>{nak}</span>
                  <div>
                    {/* <div>
                      <img/>
                      <span>
                      昵称
                    </span>
                    </div> */}
                    {/* <div>
                      编辑信息 >
                    </div> */}
                  </div>
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-around",marginTop:"10px"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <img  src={PingLun} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                  <span style={{marginTop:"3px"}}>评论</span>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <img src={FengXiang} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                  <span style={{marginTop:"3px"}}>分享</span>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <img src={XiaZai} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                  <span style={{marginTop:"3px"}}>下载</span>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <img src={DuoXuan} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                  <span style={{marginTop:"3px"}}>多选</span>
                </div>
              </div>
            </div>
            <div>
              <h1>播放全部(共{listdatasong.length}首)</h1>
            </div>
            <ul>
              {listdatasong.map((item,i)=>
                <li
                style={{display:'flex',justifyContent:"space-between",textAlign:"center",fontSize:"20px"}}
                  onClick={this.jinrugequ.bind(this,item.id,i,item.name,gedanid,arrdetail)}
                  className={SL.songlist_bottom_ul_li}
                  key={item.id}>
                    <div style={{display:"flex",paddingLeft:"10px"}}>
                      <span style={{marginRight:"10px"}}>{i+1}</span>
                      <span className={SL.songlist_bottom_li_span_zhi}>{item.name}</span>
                    </div>
                    <div style={{paddingRight:"20px"}}>
                      <div style={{marginTop:"6.5px"}}>
                        <img style={{width:"22px",height:"22px"}} src={PoFang} alt=""/>
                      </div>
                    </div>
                </li>)}
            </ul>
          </div>
        </Fragment>
      )
    }catch{
      return (
        <div><h1>正在加载中......</h1></div>
      )
    }

  }
}


export default SongList


