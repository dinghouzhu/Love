import React from "react"
import { NavBar, Icon,Toast} from 'antd-mobile';
import {connect} from "react-redux"
import { UserRegister , pushcount } from "../../actions/login" 

const mapStateProps =(state)=>{
    console.log(state)
    return { 
       state
    }
  }
  const mapDispatchProps =(dispatch)=>{
      return{
        userRegister(phone,password,captcha,nickname){
            // console.log(phone,password,captcha,nickname)
            UserRegister(dispatch,phone,password,captcha,nickname)
        },
        countchuandi(count){
            pushcount(dispatch,count)
        }
      }
    }
  
@connect(mapStateProps,mapDispatchProps)


class Register extends React.Component {
    constructor(){
        super()
        this.state={
        phone:"",
        captcha:"",
        password:"",
        nickname:""
        }
      }
    iptnickname(e){
        this.setState({
          phone:this.props.location.state[0],
          captcha:this.props.location.state[1],
          nickname:e.target.value
        })
      }
      iptpassword(e){
        this.setState({
          password:e.target.value
        })
      }
    userRegister(){
        this.props.userRegister(this.state.phone,this.state.password,this.state.captcha,this.state.nickname)
         console.log(this.props.state.register)
        if(this.props.state.register.userInfo.code===200){
            let userid = this.props.state.register.userInfo.account.id
            this.props.countchuandi(userid)
            this.props.history.push({pathname:"/found/discover"},this.props.state.register.userInfo)
        }
        if(this.props.state.register.userInfo.code===505){
            Toast.offline('该昵称已被占用', 2);
        }
    }
    render(){    
        return (
            <div>
            <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.goBack()}
            >新用户注册</NavBar>
            <div className="phone_login">
            <div className="container">
             <input type="text" className="password" placeholder="请输入昵称"
              value={this.state.nickname}
              onChange={this.iptnickname.bind(this)}
             />
             <input type="password" className="password" placeholder="请输入密码"
              value={this.state.password}
              onChange={this.iptpassword.bind(this)}
             />
             <button onClick={this.userRegister.bind(this)}>注册新用户</button>    
             </div>
             </div> </div>
        )
    }
}

export default Register