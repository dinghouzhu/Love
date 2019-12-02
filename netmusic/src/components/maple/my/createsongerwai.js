import { ActionSheet, WingBlank, Button} from 'antd-mobile';
import React from "react"
import Mycss from "./my.module.css"
import DinaD from "./icon-my/dianDian.png"
// import ShiYan from './pull-down/shiyan';
import "./my.css"
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Createsongerwai extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  }

  showActionSheet = (e) => {
      let {goto}=this.props
    const BUTTONS = goto?['创建新歌单', '歌单管理', '截图导入歌单', '恢复歌单']:["歌单管理"];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
    //   cancelButtonIndex: BUTTONS.length - 1,
    //   destructiveButtonIndex: BUTTONS.length - 2,
    //   title: 'title',
      message: goto?'创建的歌单':'收藏的歌单',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
    e.stopPropagation();
  }

  render() {
    return (<WingBlank className={Mycss.mycreatesong_erwai}>
      <Button onClick={this.showActionSheet} style={{textAlign:"center"}}><img style={{width:"23px",height:"23px",marginTop:"10px"}} src={DinaD} alt=""/></Button>
    </WingBlank>
    );
  }
}

export default Createsongerwai


