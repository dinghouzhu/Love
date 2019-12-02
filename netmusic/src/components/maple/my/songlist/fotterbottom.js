import React from "react";
import {connect} from "react-redux";
import { getsongdetailaction,songdrawdetail} from "../../../../actions/maple/CreateSongnew";
import store from "../../../../store";
import FT from  "./fotter.module.css"
//字体图标的引入
import ZuoJianTou from "../icon-my/left.png"
import FenXiangs from "../icon-my/sharess.png"
import ShouCang from "../icon-my/xin.png"
import XiaZai1 from "../icon-my/download.png"
import Yu from "../icon-my/xin.png"
import PoFang from "../icon-my/playSong1.png"
import Pinglunle from "../icon-my/talklog.png"
import DuoJiazai from "../icon-my/talklog.png"
import PoFangLieBiao from "../icon-my/playList.png"
import ShangYiShou from "../icon-my/prev.png"
import XiaYiShou from "../icon-my/next.png"
import SuJi from "../pull-down/pull-down-icon/随机播放.png";
import PoFangTiao from "./PoFangTiao";
const mapStateToProps=state=>{
  // console.log(state)
    return{
      // yemiansongid=this.state.getSongDatil.songdatail.id
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
      getsongurl(id){
        getsongdetailaction(dispatch,id)
      },
      getsongurlok(id){
        songdrawdetail(dispatch,id)
      },
      canshulail(id){
        songdrawdetail(dispatch,id)
      }
    }
  }
  
  @connect(mapStateToProps,mapDispatchToProps)





class FotterBottom extends React.Component{
    constructor(props){
        super(props)
        this.state={
          zhi:this.props.location.state.kl,
          songolname:this.props.location.state.songname,
          yemianid:this.props.location.state.id
        }
    }
    componentDidMount(){
      // console.log(11)
    }
    stopstart(){
      
    }
    laile(){
      
    }
    huiqu(){
      this.props.history.go(-1)
    }
    bf(){
        var audio = document.getElementById('music1'); 
        // console.log(audio.duration)
        if(audio!==null){             
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
            // alert(audio.paused);
            if(audio.paused){                 
                audio.play();//audio.play();// 这个就是播放  
            }else{
                audio.pause();// 这个就是暂停
            }
        } 
    }
    xiayige(songdata){
      var nextsong=store.getState().newSong.newlistsong[songdata+1]
      if(!nextsong){
        nextsong=store.getState().newSong.newlistsong[0]
        this.setState({
          zhi:0,
          songolname:store.getState().newSong.newlistsong[0].name,
          yemianid:store.getState().newSong.newlistsong[0].id
        })
      }else{
        this.setState({
          zhi:songdata+1,
          songolname:store.getState().newSong.newlistsong[songdata+1].name,
          yemianid:store.getState().newSong.newlistsong[songdata+1].id
        })
      }
      
      let id=nextsong.id
      this.props.canshulail(id)
      this.props.getsongurl(id)
    }
    shangyige(songdata){
      var nextsongds=store.getState().newSong.newlistsong[songdata-1]
      if(!nextsongds){
        nextsongds=store.getState().newSong.newlistsong.length-1
        this.setState({
          zhi:nextsongds,
          songolname:store.getState().newSong.newlistsong[nextsongds].name,
          yemianid:store.getState().newSong.newlistsong[nextsongds].id
        })
        nextsongds=store.getState().newSong.newlistsong[nextsongds]
      }else{
        this.setState({
          zhi:songdata-1,
          songolname:store.getState().newSong.newlistsong[songdata-1].name,
          yemianid:store.getState().newSong.newlistsong[songdata-1].id
        })
      }
      let id=nextsongds.id
      this.props.canshulail(id)
      this.props.getsongurl(id)
    }
    pinglun(){
      // console.log(this.state.yemianid)
      let id=this.state.yemianid
      this.props.history.push({pathname:`/plt`,state:{id}})
    }
    render(){
      try{
        let kl=this.state.zhi
        let songname=this.state.songolname
        let shuju=store.getState()
        let {url}=shuju.getSongDatil.songdatail
        let {picUrl}=shuju.Songhuoyugeshou.drawsonghei
        // console.log(this.props)
          return(
              <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              {/* 上面展示部分 */}
                  <div style={{display:"flex",justifyContent:"space-between"}} className={FT.fotter_top}>
                    <div style={{display:"flex"}}>
                        <div onClick={this.huiqu.bind(this)} style={{paddingLeft:"10px"}}><img style={{marginTop:"10px",width:"20px",height:"20px"}} src={ZuoJianTou} alt=""/></div>
                        <div style={{display:"flex",flexDirection:"column",paddingLeft:"20px",fontSize:"20px"}}>
                          <span>{songname}</span>
                          <span></span>
                        </div>
                    </div>
                    
                    <div style={{paddingRight:"10px"}}>
                      <img 
                      style={{marginTop:"10px",width:"20px",height:"20px"}}
                      src={FenXiangs} alt=""/>
                    </div>
                  </div>
                  {/* 中间部分 */}
                  <div  className={FT.fotter_middle}>
                    <div style={{
                      border:"1px solid #ccc",
                      width:"220px",
                      height:"220px",
                      borderRadius:"110px",
                      marginTop:"80px",
                      overflow:"hidden"
                      }}>
                        <img src={picUrl} alt="" style={{width:"220px",
                      height:"220px"}} />
                    </div>
                  </div>
                  {/* 中下部分点击跳转的组件 */}
                  <div>
                    {/* <ul className={FT.fotter_middle_bottom}> */}
                    <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",marginBottom:"20px"}}>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        <img  src={ShouCang} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>评论</span> */}
                      </div>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        <img src={XiaZai1} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>分享</span> */}
                      </div>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        <img src={Yu} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>下载</span> */}
                      </div>
                      <div onClick={this.pinglun.bind(this)} style={{display:"flex",flexDirection:"column"}}>
                        <img src={Pinglunle} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>评论</span> */}
                      </div>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        <img src={DuoJiazai} style={{paddingLeft:"3px",width:"20px",height:"20px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>多选</span> */}
                      </div>
                    </div>
                    {/* </ul> */}
                  </div>
                  <PoFangTiao/>
                  <div style={{marginTop:"20px"}}>
                      <audio controls="controls" preload="true" id="music1" onClick={this.laile.bind(this)} controls="controls" autoPlay="autoPlay" src={url} style={{width:"0px",height:"0px"}} />
                  <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",marginBottom:"20px"}}>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        <img  src={SuJi} style={{paddingLeft:"3px",width:"23px",height:"23px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>评论</span> */}
                      </div>
                      <div onClick={this.shangyige.bind(this,kl)} style={{display:"flex",flexDirection:"column"}}>
                        <img src={ShangYiShou} style={{paddingLeft:"3px",width:"23px",height:"23px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>上一首</span> */}
                      </div>
                      <div onClick={this.bf.bind(this)} position="relative" style={{display:"flex",flexDirection:"column"}}>
                        <img position="absolute" src={PoFang} style={{paddingLeft:"3px",width:"23px",height:"23px",zIndex:10}} alt=""/>
                        {/* </audio> */}
                        {/* <span style={{marginTop:"3px"}}>暂停/播放</span> */}
                      </div>
                      <div onClick={this.xiayige.bind(this,kl)} style={{display:"flex",flexDirection:"column"}}>
                        {/* <span style={{marginTop:"3px"}}>下一首</span> */}
                  
                        <img src={XiaYiShou} style={{paddingLeft:"3px",width:"23px",height:"23px"}} alt=""/>

                      </div>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        <img src={PoFangLieBiao} style={{paddingLeft:"3px",width:"23px",height:"23px"}} alt=""/>
                        {/* <span style={{marginTop:"3px"}}>多选</span> */}
                      </div>
                    </div>
                  </div>
              </div>
          )
        }catch{
          
        return <h1>页面正在加载中....</h1>
      }
      
    }

}

export default FotterBottom