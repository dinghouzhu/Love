import React from "react"
import Mycss from "./my.module.css"
import "./my.css"
import Createsong from "./createsong"
import CreateNavSong from "./createnavsong"

import {connect} from "react-redux";
import {DengLuGuoLai } from "../../../actions/maple/CreateSongnew";
import mymusic from "../../../assets/my/mymusic.png"
import mydetail from "../../../assets/my/mydetail.png"
import mydiantai from "../../../assets/my/mydiantai.png"
import myxiazai from "../../../assets/my/myxiazai.png"
import myshouchang from "../../../assets/my/myshouchang.png"



const mapStateToProps=state=>{
  // console.log(state)
  return{
    // all:state.Createsongreducer.all,
    // songdata:state.newSong.newlistsong
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    denglulail(){
      dispatch(DengLuGuoLai())
    }
  }
}

@connect(mapStateToProps,mapDispatchToProps)


class My extends React.Component {
  dneglu(){
    this.props.denglulail()
  }
  render(){
    return(
      <div>
        <div className={Mycss.mytab}>
          <CreateNavSong/>
        </div>
        <div className={Mycss.myconnten}>
          <p style={{fontSize:"18px"}}> <img style={{marginTop:"20px",width:"25px",height:"25px"}} src={mymusic} alt=""/> &nbsp; 本体音乐(0)</p>
          <p style={{fontSize:"18px"}}> <img style={{marginTop:"20px",width:"25px",height:"25px"}} src={mydetail} alt=""/> &nbsp; 最近播放(0)</p>
          <p style={{fontSize:"18px"}}> <img style={{marginTop:"20px",width:"25px",height:"25px"}} src={mydiantai} alt=""/> &nbsp; 下载管理(0)</p>
          <p style={{fontSize:"18px"}}> <img style={{marginTop:"20px",width:"25px",height:"25px"}} src={myxiazai} alt=""/> &nbsp; 我的电台(0)</p>
          <p style={{fontSize:"18px"}}> <img style={{marginTop:"20px",width:"25px",height:"25px"}} src={myshouchang} alt=""/> &nbsp; 我的收藏(0)</p>
        </div>
        {/* <button onClick={this.dneglu.bind(this)}>登录</button> */}
        <Createsong to={true}/>
        <Createsong to={false}/>
        
      </div>
    )
  }
}

export default My