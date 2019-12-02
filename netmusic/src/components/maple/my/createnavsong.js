import React from "react";

import { Tabs, WhiteSpace } from 'antd-mobile';
import Mycss from "./my.module.css"
import DT from "./icon-my/diantai.png"
import YW from "./icon-my/night.png"
import DYJ from "./icon-my/dianLogo.png"
import ACG from "./icon-my/acg.png"
import Xin from "./icon-my/xin.png"
import XinD from "./icon-my/xindong.png"
import "./my.css"
// import {connect} from "react"
class CreateNavSong extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value:""
    }
  }
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      {/* <p>Content of {tab.title}</p> */}
    </div>);
  siren(){
    // console.log(this.props)
    // this.props.history.push("personalfm")
  }
  render() {
    const tabs = [
      { title: <div className={Mycss.mycreatenavsong} onClick={this.siren.bind(this)}>
          <span><img src={DT} alt=""/></span>
          <span>私人FM</span>
      </div> },
      { title: <div className={Mycss.mycreatenavsong}>
          <span><img src={YW} alt=""/></span>
          <span>夜晚</span>
      </div> },
      { title: <div className={Mycss.mycreatenavsong}>
          <span><img src={DYJ} alt=""/></span>
          <span>电音节</span>
      </div> },
      { title: <div className={Mycss.mycreatenavsong}>
          <span><img src={ACG} alt=""/></span>
          <span>ACG专区</span>
      </div> },
      { title: <div className={Mycss.mycreatenavsong}>
          <span><img src={Xin} alt=""/></span>
          <span>交友</span>
      </div> },
      { title: <div className={Mycss.mycreatenavsong}>
          <span><img src={XinD} alt=""/></span>
          <span>私藏推荐</span>
      </div> },
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs tabBarUnderlineStyle={{ border: "none" }} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default CreateNavSong