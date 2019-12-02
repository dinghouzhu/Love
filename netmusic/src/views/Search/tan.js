import React from 'react'
import { Popover } from 'antd-mobile';
import "../../assets/css/forceChange.css"
const Item = Popover.Item;

class Pao extends React.Component {
    state = {
        selected: '',
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
        });
    };
    tiao(key) {
        // console.log(key)
        console.log(this.props)
        this.props.history.push('/searchres?keywords=' + key)
    }
    render() {
        const searchLikeThis = this.props.result.map((item, index) => (<Item style={{ color: 'grey', verticalAlign: 'middle', width: "100%" }} key={index} value={item.keyword} data-seed="logId">
            <div id="cjy" onClick={this.tiao.bind(this, item.keyword)} style={{ width: "100%", height: '100%' }}>
                <img src={require('../../assets/icons/search.png')} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '20px' }} alt="" />
                {item.keyword}
            </div>
        </Item>))
        return (<div>
            <Popover
                visible={this.props.flag}
                overlay={[
                    (<Item key='adsfdf' style={{ color: 'grey' }} value={`搜索 "${this.props.value}"`} data-seed="logId">{`搜索${this.props.value}`}</Item>),
                    ...searchLikeThis
                ]}
                id="Popover"
            >
                <div>

                </div>
            </Popover>
        </div>);
    }
}
export default Pao
