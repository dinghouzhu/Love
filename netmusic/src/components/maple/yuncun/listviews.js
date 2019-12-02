/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from "react"
import { ListView, PullToRefresh, TabBar } from 'antd-mobile';
import TabBarer from './TabBar'
import "./kl.css"
import {toDetail} from "../../Store/actionCreator"
import {connect} from 'react-redux'
//这是个容器 包裹了listView
function MyBody(props) {
    // console.log(props)
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}
const mapStateToProps = state =>{
  // console.log(state)
  return {

  }
}
const mapDispatchToProps = dispatch =>{
  return{
    zhanshi(id)
      {
        toDetail(dispatch,id)

      }
  }
}
@connect(mapStateToProps,mapDispatchToProps)

class BookList extends React.Component {
  constructor(props) {
    super(props);
    //定义数据源 ListView diff算法
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      refreshing: true,//如果为true 那么会触发刷新动画
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight,//设置listView的高度

    };
  }
  //页面加载的时候 将数据传入dataSource
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    //请求服务器参数 将获取到的新数据(数组类型) 传入到dataSource.cloneWithRows()
    fetch("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1574301760916")
      .then(body => body.json())
      .then(res => {
          // console.log(res)
        this.setState({
            // dataSource:res.data,
          dataSource: this.state.dataSource.cloneWithRows(res.data),
          isLoading: false
        })
      })
  }
  onEndReached = (event) => {
    this.setState({
      isLoading: false
    })
  };
  //下拉刷新的事件处理函数
  onRefresh() {
    //fetch是ES6里面原生的基于promise的HTTP语法
    fetch("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1574301760916")
      .then(body => body.json())
      .then(res => {
        this.setState({
            // dataSource:res.data,
          dataSource: this.state.dataSource.cloneWithRows(res.data),
          refreshing: false
        })
      })
  }
  indetail(id){
    // console.log(this.props)
    this.props.zhanshi(id);
    // props.zhanshi(id)
    // console.log(id)
    this.props.history.push('/bookList/detail')
  }
  render() {
    // console.log(this.props)
    // let {indetail}=this.props
      const row = (rowData, sectionID, rowID) => {
        //rowData就是数据源里面的每一项{}
        // console.log(rowData.tags.split(','))
        return (
          //每一行内容的结构 可以根据自己的需求更改样式
          <div key={rowID} style={{ padding: '0 15px',display: '-webkit-box',background:'#C1F5E2',margin:'10px' }}>
            <div
              style={{
                lineHeight: '50px',
                color: '#888',
                fontSize: 18,
                borderBottom: '1px solid #F6F6F6',
              }}
            >{rowData.name}</div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0'}}>
              <div style={{ lineHeight: 1 }}>
                <div style={{fontSize: '14px', marginBottom: '8px', fontWeight: 'light' }}>{rowData.title}</div>
                   <div>
                        <p style={{ fontSize: '12px', color: '#999',display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',WebkitLineClamp: 2,width:'243.2px',height:'36px',lineHeight:'20px',textOverflow:'ellipsis',overflow:'hidden' }}>{rowData.sdesc}</p>
                        {<span>{
                          rowData.tags.split(',').map((item,i)=>{
                            // console.log(item)
                                return <span key={i} style={{border:'1px solid grey',padding:'2px',display:'inline-block',margin:'3px',marginBottom:'10px'}}>{item}</span>
                            })
                        }</span>}
                    </div>
              </div>
                         <div style={{float:'right'}} onClick={this.indetail.bind(this,rowData.id)}>
                          <img src={rowData.items[0].cover}
                           style={{marginLeft:'30px',marginTop:'22px', width:'60px',height:'80px',position:'relative'}}/>
                        </div>
            </div>
          </div>
        );
      };

    return (
      <ListView
        initialListSize={10} //初始渲染几个 必须保证占满元素的高度
        ref={el => this.lv = el}
        dataSource={this.state.dataSource} //数据源
        renderHeader={() => <div>
            <TabBarer/>
        </div>}//顶部渲染的结构
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '正在加载...' : '加载完毕'}
        </div>)}//底部渲染的结构
        renderBodyComponent={() => <MyBody />}
        renderRow={row} //渲染listView里面的每一行的结构
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        pageSize={1}
        onScroll={() => { "11" }}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}//只要refreshing属性值为true那么就会有刷新动画
          onRefresh={this.onRefresh.bind(this)}//下拉的时候触发的事件
        />}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached} //数据全部渲染完毕之后触发的方法
        onEndReachedThreshold={10}
      />
    );
  }
}

export default BookList