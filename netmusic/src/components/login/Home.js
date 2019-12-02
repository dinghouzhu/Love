import React from "react"
import "./login.css"
import { BrowserRouter as Router,Route,Link} from "react-router-dom"

class LoginHome extends React.Component {
    nologin(){
      
      this.props.history.push({pathname:"/found/discover"},{loginType:-1})
    }
    render(){
        return(
            <div className="home">
            <div className="home_container">
              <div className="logo">
                <span className="icon iconfont icon-huabankaobei-" ></span>
              </div>
              <button className="phone">
              <Link to="/phone" className="phone">
                手机号登录
              </Link>
              </button>
              <button onClick={this.nologin.bind(this)} className="go">
                立即体验
              </button>
              <div className="more">
                <span className="icon i_c iconfont icon-qq"></span>
                <span className="icon i_c iconfont icon-weibo"></span>
                <span className="icon iconfont icon-youxiang"></span>
                <span className="icon iconfont icon-weixin"></span>
                {/* <div className="message">
                  请勾选同意《用户协议》和《隐私政策》
                </div> */}
              </div>
              {/* <div className="text">
                <span className="icon iconfont icon-fuxuankuang"  ></span>
                <span className="icon iconfont icon--fuxuankuang" ></span>
                <span>同意</span>
              《用户协议》和《隐私政策》
              </div> */}
            </div>
            </div>
        )
    }


}

export default LoginHome