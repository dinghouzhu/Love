import React from "react"
import "./pofang.css"
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';
class PoFangTiao extends React.Component{
  // log = (name) => {
  //   return (value) => {
  //     // console.log(`${name}: ${value}`);
  //   };
  // }
  render() {
    return (
      <div className="am-slider-example">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Slider
            style={{ marginLeft: 30, marginRight: 30 ,}}
            defaultValue={0}
            min={0}
            max={100}
            onChange={this.log('change')}
            onAfterChange={this.log('afterChange')}
          />
        </WingBlank>
      </div>
    );
  }
}
// }

export default PoFangTiao
