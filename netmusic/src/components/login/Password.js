import React from "react"
import { NavBar, Icon,Toast } from 'antd-mobile';
import {connect} from "react-redux"
import { phonelogin, pushcount } from "../../actions/login" 

const mapStateProps =(state)=>{
    console.log(state)
    return { 
       state
    }
  }
  const mapDispatchProps =(dispatch)=>{
      return{
        usephonelogin(phone,password){
          phonelogin(dispatch,phone,password)
        },
        countchuandi(count){
          pushcount(dispatch,count)
        }
      }
    }
@connect(mapStateProps,mapDispatchProps)

class Password extends React.Component {
    constructor(){
        super()
        this.state={
        phone:"",
        password:"",
        }
      }
      iptpassword(e){
        this.setState({
            phone:this.props.location.state,
            password:e.target.value
        })
        
      }
       
    cellPhoneLogin(){
      let phone=this.state.phone
      let password=this.state.password

      this.props.usephonelogin(phone,password)
      fetch('http://106.12.10.151:3000/login/cellphone?phone='+phone + '&password=' + password,{credentials:'include'})
      .then(body=>body.json())
      .then(res=>{
        console.log(res)
        if(res.code===200){
          let userid = this.props.state.passwordReducer.password.account.id
          console.log(userid)
          this.props.countchuandi(userid)
          this.props.history.push({pathname:"/found/discover"})
          Toast.success('登录成功', 3);
        }if(res.code===502){
          Toast.offline('密码输入错误', 2);
          }
         return res })
        }
        
   
    render(){
        return (
            <div>
            <NavBar
            mode="light"
            icon={<Icon type="left" style={{color:"black"}}/>}
            onLeftClick={() => this.props.history.goBack()}
            >输入密码</NavBar>
            <div className="phone_login">
            <div className="container">
             <input type="password" className="password" placeholder="请输入密码"
              value={this.state.password}  
              onChange={this.iptpassword.bind(this)}
             />
             <button onClick={this.cellPhoneLogin.bind(this)}>登录</button>   
             </div>
             </div> </div>
        )
    }
}

export default Password