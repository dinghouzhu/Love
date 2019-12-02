import React from "react"
import { NavBar, Icon,Toast} from 'antd-mobile';
import {connect} from "react-redux"
import { testPhone,sentcptcha } from "../../actions/login" 

const mapStateProps =(state)=>{
    console.log(state.phoneReducer.phone)
    return { 
      phone:state.phoneReducer.phone
    }
  }
  const mapDispatchProps =(dispatch)=>{
    
      return{
        test(phone){
            testPhone(dispatch,phone)
        },
        sent(phone){
            sentcptcha(dispatch,phone)
        }
      }
  }
@connect(mapStateProps,mapDispatchProps)

//------------------------

class Phone extends React.Component {
    constructor(){
        super()
        this.state={
        phone:""
        }
      }

      

      testCellphone(){
      let phone = this.state.phone
      this.props.test(this.state.phone)
      fetch('http://106.12.10.151:3000/cellphone/existence/check?phone='+ phone)
      .then(body=>body.json())
      .then(res=>{
        if(res.hasPassword){
          this.props.history.push({pathname:"/password"},this.state.phone)
          Toast.info('请输入密码', 2);
        }
        if(!res.hasPassword){
          this.props.sent(this.state.phone)
          this.props.history.push({pathname:"/captcha"},this.state.phone)
          Toast.info('已发送验证码', 2);
          
        }
         return  res
      })
        // this.props.test(this.state.phone)
        // let ishas = this.props.phone.hasPassword
        // if(ishas===true){
        //   this.props.history.push({pathname:"/password"},this.state.phone)
        //   Toast.offline('请输入密码', 1);
        //   }
        // if(ishas===false){
        //   this.props.sent(this.state.phone)
        //   this.props.history.push({pathname:"/captcha"},this.state.phone)
        //   Toast.offline('已发送验证码', 2);
        // }
       
        }
      iptphone(e){
        this.setState({
            phone:e.target.value
        })
      }
      
    render(){
        try{
          return (
            <div>
            <NavBar
            mode="light"
            icon={<Icon type="left" style={{color:"black"}} />}
            onLeftClick={() => this.props.history.goBack()}
            >手机号登录</NavBar>
            <div className="phone_login">
            <div className="container">
             <p>未注册手机号登录后将自动创建账号</p>
             <input type="number" className="phone" placeholder="请输入手机号" 
                value={this.state.phone}  
                onChange={this.iptphone.bind(this)}
                />
             <button onClick={this.testCellphone.bind(this)}
              >下一步</button>
             </div>
             </div> 
              </div>
        )
        }
        catch{
          return (
            <div>
              <h2>正在加载</h2> 
            </div>
          )
        }
        
    }

}

export default Phone