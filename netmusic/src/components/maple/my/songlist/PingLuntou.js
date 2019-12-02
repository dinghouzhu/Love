import React from "react"
import ZuoJianTou from "../icon-my/left.png"
import FenXiangs from "../icon-my/sharess.png"
import PingLun from "./PingLun"
class PingLunTou extends React.Component{
    constructor(props){
        super(props)
        this.state={
            zhile:this.props.location.state.id
        }
    }
    huiqule(){
        this.props.history.go(-1)
    }
    
    render(){
        // console.log(this.props)
        return (
            <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex"}}>
                    <div onClick={this.huiqule.bind(this)} style={{paddingLeft:"10px"}}>    
                        <img style={{marginTop:"10px",width:"20px",height:"20px"}} src={ZuoJianTou} alt=""/>
                    </div>
                    <div style={{color:"#ccc",display:"flex",marginTop:"6px",flexDirection:"column",paddingLeft:"20px",fontSize:"22px"}}>
                        <span>评论</span>
                    </div>
                </div>
                <div style={{paddingRight:"10px"}}>
                    <img 
                    style={{marginTop:"6px",width:"20px",height:"20px"}}
                    src={FenXiangs} alt=""/>
                </div>
            </div>
                <PingLun to={this.state.zhile}/>
            </div>
        );
    }
}

export default PingLunTou
