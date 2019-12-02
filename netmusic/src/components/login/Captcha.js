import React from "react"
import { NavBar, Icon,Toast} from 'antd-mobile';
import {connect} from "react-redux"
import { testcaptcha } from "../../actions/login" 

const mapStateProps =(state)=>{
    console.log(state)
    return { 
       state
    }
  }
  const mapDispatchProps =(dispatch)=>{
      return{
        test(phone,captcha){
          testcaptcha(dispatch,phone,captcha)
        }
      }
    }
  
@connect(mapStateProps,mapDispatchProps)


class Captcha extends React.Component {
    constructor(){
        super()
        this.state={
        phone:"",
        captcha:""
        }
      }
      iptcaptcha(e){
        this.setState({
          phone:this.props.location.state,
          captcha:e.target.value
        })
        
      }
      testcaptcha(){
        let phone=this.state.phone
        let captcha=this.state.captcha
        this.props.test(this.state.phone,this.state.captcha)
        fetch('http://106.12.10.151:3000/captcha/verify?phone='+phone + '&captcha=' + captcha)
        .then(body=>body.json())
        .then(res=>{
          if(this.props.state.captcha.captcha.code===200){
            this.props.history.push({pathname:"/register"},[this.state.phone,this.state.captcha])
          }else{
            Toast.offline('验证码错误', 1);
          }
        return res 
  
    })
        
        



    }
    render(){    
        return (
            <div>
            <NavBar
            mode="light"
            icon={<Icon type="left" style={{color:"black"}}/>}
            onLeftClick={() => this.props.history.goBack()}
            >输入验证码</NavBar>
            <div className="phone_login">
            <div className="container">
             <input type="text" className="password" placeholder="请输入验证码"
              value={this.state.captcha}
              onChange={this.iptcaptcha.bind(this)}
             />
             <button onClick={this.testcaptcha.bind(this)}>验证验证码</button>    
             </div>
             </div> </div>
        )
    }
}

export default Captcha