import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
//history这个插件可以方便管理你的浏览记录
// import createBrowserHistory from 'history/createBrowserHistory'
//my maple
// import My from './components/maple/my';
import SongLista from './components/maple/my/songlist';
import FotterBottom from './components/maple/my/songlist/fotterbottom';
// import Pull_Down from './components/maple/my/pull-down';
// import ShiYan from './components/maple/my/pull-down/shiyan';
// import Logindd from './components/maple/my/登录/login';
import PoFangTiao from './components/maple/my/songlist/PoFangTiao';
import YunCount from './views/YunCount';
// import CeShi from './components/maple/my/pull-down/ceshi';
import PingLun from './components/maple/my/songlist/PingLun';
import PingLunTou from './components/maple/my/songlist/PingLuntou';
// import ZhiYing from './components/maple/my/ListView';
// import SiRenFm from './components/maple/my/lingsongwenjian/sirenfm';
//zzy login
import Phone from './components/login/Phone';
import Found from './components/found/found';
import Password from './components/login/Password';
import Captcha from "./components/login/Captcha"
import Register from "./components/login/Register"
import LoginHome from "./components/login/Home"
// import  drawer  from './components/Drawer';
// cui jia hao
import './assets/css/reset.css'
import Video from './views/Video';
import SearchBarer from './views/Search';
// import Discover from "./views/discover"
import SongList from "./views/discover/songList"
import DayRecommend from "./views/discover/dayrecommend"
import AllPlayList from "./views/discover/allPlayList"
import Comment from "./views/discover/comment"
import PlayBar from './views/playBar';
import PaiHangBang from './components/maple/my/paihangbang';
import BangDanSong from './components/maple/my/paihangbang/bangdansong';

//houzhu
// import TopList from "./views/topList/index"
// import SongSheet from "./views/songsheet/index"


class App extends React.Component {
  // console.log(props)
  // const history = createBrowserHistory()
  
  render() {
    return (
      <Router>
        {/* <My/> */}
        <Route path="/My/songlist" exact component={SongLista} />
        {/* <Route path="/My" exact component={My}/> */}
        <Route path="/fotter" exact component={FotterBottom} />
        {/* <Route path="/shiyan" exact component={ShiYan}/> */}
        {/* <Route path="/login" exact component={Logindd}/> */}
        <Route path="/pofangtiao" exact component={PoFangTiao} />
        <Route path="/yuncun" exact component={YunCount} />
        {/* <Route path="/ceshi" exact component={CeShi}/> */}
        <Route path="/xlsx" exact component={PingLun} />
        <Route path="/plt" exact component={PingLunTou} />
        {/* <Route path="/personalfm" exact component={SiRenFm}/> */}
        {/* <Route path="/zhiyi" exact component={ZhiYing}/> */}
        {/* <Route path="/" exact component={Pull_Down}/> */}
        {/* 排行榜 */}
        <Route path="/discover/baihangpang" exact component={PaiHangBang} />
        <Route path="/bangdansong" exact component={BangDanSong} />
        {/* zzy 登录注册*/}
        <Route path="/" exact component={LoginHome} />
        <Route path="/phone" component={Phone} />
        <Route path="/found" component={Found} />
        <Route path="/password" component={Password} />
        <Route path="/captcha" component={Captcha} />
        <Route path="/register" component={Register} />

        {/* cui jia hao */}
        <SearchBarer></SearchBarer>
        <Route path="/search" component={SearchBarer} />
        <Video></Video>
        {/* 发现 */}
        {/* <Route path="/discover" exact component={Discover} /> */}
        <Route path="/songlist" component={SongList} />
        <Route path="/discover/dayrecommend" component={DayRecommend} />
        <Route path="/discover/allplaylist" component={AllPlayList} />
        <Route path="/discover/comment" component={Comment} />
        <Route path="/playbar" component={PlayBar} />
        {/* houzhu
            // <Route path="/songsheet" exact component={SongSheet}></Route>
            // <Route path="/toplist" exact component={TopList}></Route> */}
      </Router>
    )
  }
}

export default App;

