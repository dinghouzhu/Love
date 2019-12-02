import React from "react"
import { Drawer, List, NavBar, Icon} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link,} from "react-router-dom"
import "./side-Menu.css"
import {connect} from "react-redux"
import Discover from "../../views/discover"
import My from "../maple/my";
import Video from "../../views/Video/video";
import YunCount from "../../views/YunCount";
 
const mapStateProps =(state)=>{
  // console.log(state)
    return {
       state
    }
  }
  const mapDispatchProps =(dispatch)=>{
      return{
        
        }
      }
@connect(mapStateProps,mapDispatchProps)
class Found extends React.Component {
    state = {
        open:false,
        docked: false
      }
      onOpenChange = (...args) => {
        this.setState({ open: !this.state.open});
      }
     
      toLogin(){ 
        this.props.history.push({pathname:"/"})
        this.props.state.passwordReducer.password =[]
        this.props.state.pushcount.userid =""
      }
      toSearch(){
        // console.log(11111)
        this.props.history.push({pathname:"/search"})
      }
      render() {
        let  userinfo  =  this.props.state.passwordReducer.password
         const sidebarone = (<List>
          {[0, 1, 2, 3, 4].map((i, index) => {
            if (index === 0) {
              if(this.props.state.passwordReducer.password.loginType===1){
              return (<List.Item key={index} className="top"
              style={{
                backgroundImage:`url(${userinfo.profile.backgroundUrl})`
              }}
              >
              <div className="login">
              <div className="avatar" style={{ backgroundImage:`url(${userinfo.profile.avatarUrl})`}}>
              
              </div>
              <div className="info">
              <div className="username">{userinfo.profile.nickname}</div>
              <div className="info_l">Lv.8</div>
              <div className="info_r">签到</div>
              </div>
              </div> 
              </List.Item>);
              }
              if(this.props.state.passwordReducer.password){
                console.log("nologin")
                return (<List.Item key={index} className="cover">
                <div className="nologin">
                <p>登录网易云音乐</p>
                <p>手机电脑多端同步，尽享海量高品质音乐</p>
                <button onClick={this.toLogin.bind(this)}>立即登录</button>
                </div>
                </List.Item>);
              }
            } 
            if(index===1){
            return (
            <List.Item key={index}>
            <ul className="usernav">
            <li className="nav">
              <div className="icon iconfont icon-xiaoxi1"></div>
              <div className="text">我的消息</div>
            </li>
            <li className="nav ">
              <div className="icon iconfont icon-haoyou"></div>
              <div className="text">我的好友</div>
            </li>
            <li className="nav ">
              <div className="icon iconfont icon-huatong"></div>
              <div className="text">听歌识曲</div>
            </li>
            <li className="nav ">
              <div className="icon iconfont icon-huanfu"></div>
              <div className="text">个性换肤</div>
            </li>
          </ul>
            </List.Item>);
            }
            if(index===2){
                return(<List.Item key={index}>
            <ul className="listOne">
            <li className="item">
              <span className="icon iconfont icon-huopiaotongxing"></span>
              <span className="text">演出</span>
              <span className="text_r">雅尼音乐会</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-icon01"></span>
              <span className="text">商城</span>
              <span className="text_r">真无线 59元</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-fujin"></span>
              <span className="text">附近的人</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-icon--"></span>
              <span className="text">口袋铃声</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-icon3"></span>
              <span className="text">我的订单</span>
            </li>
          </ul>
                </List.Item>)
            }
            if(index===3){
                return(<List.Item key={index}>
            <ul className="listTwo">
            <li className="item">
              <span className="icon iconfont icon-time"></span>
              <span className="text">定时停止播放</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-saoma"></span>
              <span className="text">扫一扫</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-paidui"></span>
              <span className="text">音乐闹钟</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-liuliang"></span>
              <span className="text">在线听歌免流量</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-youxi"></span>
              <span className="text">游戏推荐</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-wodeyouhuijuan"></span>
              <span className="text">优惠券</span>
            </li>
            <li className="item">
              <span className="icon iconfont icon-zhibo"></span>
              <span className="text">我要直播</span>
            </li>
          </ul>
                </List.Item>)
            }
            if(index===4){
                return(<List.Item key={index} className="bottom">
            <div className="footer">
                <div className="item">
                 <span className="icon iconfont icon-yejianmoshi"></span>
                <span>夜间模式</span>
                 {/* <span>日间模式</span> */}
                </div>
                <div className="item">
                <span className="icon iconfont icon-shezhi"></span>
                <span>设置</span>
                </div>
                <div className="item">
                <span className="icon iconfont icon-tuichu"></span>
                <span onClick={this.toLogin.bind(this)}>退出</span>
                </div>
            </div>
            </List.Item>)
            }
          })}
        </List>);

       let { url } = this.props.match
       return (
       <div>
          {/* 标题栏 */}
          <NavBar 
          icon={<Icon type="ellipsis" style={{color:"black"}}/>} 
          mode="light" 
          onLeftClick={this.onOpenChange}
          rightContent={<Icon key="0" type="search" 
                        style={{ marginRight: '16px',color:"black" }} 
                        onClick={this.toSearch.bind(this)}/> }
          >
             <ul >
               <li><Link to={`${url}/My`}>我的</Link></li>
               <li><Link to={`${url}/discover`}>发现</Link></li>
               <li><Link to={`${url}/yuncun`}>云村</Link></li>
               <li><Link to={`${url}/video`}>视频</Link></li>
             </ul>
              
          </NavBar>
          <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight }}
            enableDragHandle
            contentStyle={{paddingTop:0}}
            sidebar={sidebarone}
            open={this.state.open}
            touch={!this.state.touch}
            onOpenChange={this.onOpenChange}
          >
          {/* <Router> */}
          
          <Route path={`${url}/discover`} exact component={Discover} />
          <Route path={`${url}/My`} exact component={My} />
          <Route path={`${url}/video`} exact component={Video} />
          <Route path={`${url}/yuncun`} exact component={YunCount} />


          {/* </Router> */}
          </Drawer>
         </div>
        );
      }
}


export default Found