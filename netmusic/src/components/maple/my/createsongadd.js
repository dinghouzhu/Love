import React from "react"

import { Modal, Button, WingBlank } from 'antd-mobile';

import Mycss from "./my.module.css"

import {connect} from "react-redux"
import { newSongAction } from "../../../actions/maple/CreateSongnew";

const prompt = Modal.prompt;


const mapStateToProps=state=>{
    return{
      
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
        createsongdan(name){
            newSongAction(dispatch,name)
        }
    }
  }
  
@connect(mapStateToProps,mapDispatchToProps)
class Createsongadd extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    createsongto(e){
        e.stopPropagation();
        return(
            prompt('新建歌单', '', [
                { text: '取消' },
                { text: '确定', onPress: (value) => {
                    if(!value){
                        return alert("请输入歌单名")
                    }
                    this.props.createsongdan(value)
                    // console.log(value)
                } },
                ], 'default', null,['请输入歌单标题'])
        )
    }
    render(){
        // console.log(value)
        return(
            <WingBlank size="lg" className={Mycss.mycreatesong_add}>
                <Button 
                onClick={this.createsongto.bind(this)
            }
                >+</Button>
            </WingBlank>
        )
    }
}


export default Createsongadd