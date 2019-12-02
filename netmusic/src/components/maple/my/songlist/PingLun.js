import React from "react"
import {connect} from "react-redux"
import DianZan from "../icon-my/dianZan.png"
import { ListView, PullToRefresh } from 'antd-mobile';
import "./pinglun.css"
function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}


const mapStateProps=state=>{
    return{

    }
}

const mapGetProps=dispatch=>{
    return{

    }
}



@connect(mapStateProps,mapGetProps)
class PingLun extends React.Component{
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
          zhi:1,
          yemianid:this.props.to
        };
      }
      //页面加载的时候 将数据传入dataSource
      componentDidMount() {
        this.setState({
          isLoading: true
        })
        //请求服务器参数 将获取到的新数据(数组类型) 传入到dataSource.cloneWithRows()
        fetch(`http://106.12.10.151:3000/comment/music?id=${this.state.yemianid}&limit=20&offset=0`)
          .then(body => body.json())
          .then(res => {
              let shuju=res.hotComments
              let yemian=res.comments 
              let hebing=[...shuju,...yemian]
            this.setState({
                // dataSource:res.data,
              dataSource: this.state.dataSource.cloneWithRows(hebing),
              isLoading: false
            })
          })
      }
      onEndReached = (event) => {
        this.setState({
          isLoading: false
        })
      }
      //下拉刷新的事件处理函数
      onRefresh() {
        //fetch是ES6里面原生的基于promise的HTTP语法
        let url=`http://106.12.10.151:3000/comment/music?id=${this.state.yemianid}&limit=20&offset=${this.state.zhi}`
        fetch(url)
          .then(body => body.json())
          .then(res => {
            let yemian=res.comments 
            this.setState({
                // dataSource:res.data,
              dataSource: this.state.dataSource.cloneWithRows(yemian),
              refreshing: false,
              zhi:this.state.zhi+1
            })
          })
      }
      render() {
        // console.log(this.props)
        // let {indetail}=this.props
          const row = (rowData, sectionID, rowID) => {
            //rowData就是数据源里面的每一项{}
            // console.log(rowData.tags.split(','))
            // console.log(rowData.user)
            // console.log(new Date(rowData.time).toLocaleDateString())
            return (
              //每一行内容的结构 可以根据自己的需求更改样式
              <div style={{display:"flex"}}>
                    <div style={{display:"flex"}}>
                        <div style={{float:'right'}} >
                            <img src={rowData.user.avatarUrl} alt=""
                            style={{marginLeft:'13px',marginTop:'10px', width:'36px',height:'36px',borderRadius:"18px",position:'relative'}}/>
                        </div>
                    </div>
                    <div style={{display:"flex",marginLeft:"10px",flexDirection:"column",width:"100%",borderBottom:"1px solid #ccc"}}>
                        <div style={{display:"flex",marginTop:'10px',justifyContent:"space-between",width:"100%"}}>
                            <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontSize:"7px",marginBottom:"2px",color:"#ccc"}}>{rowData.user.nickname}</span>
                                <span style={{fontSize:"4px",color:"#ccc"}}>{new Date(rowData.time).toLocaleDateString()}</span>
                            </div>
                            <div>
            <span style={{marginRight:"4px",color:"#ccc"}}>{rowData.likedCount}</span>
                                <span style={{width:"12px",height:"12px"}}>
                                    <img src={DianZan} alt="" style={{width:"12px",height:"12px",paddingRight:"3px"}}/>
                                </span>
                            </div>
                        </div>
                        <div style={{width:"100%",marginTop:'10px',marginBottom:"10px"}}>
                            <p style={{fontSize: '12px', color: '#999',display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',WebkitLineClamp: 2,width:'243.2px',height:'36px',lineHeight:'20px',textOverflow:'ellipsis',overflow:'hidden' }}>
                                {rowData.content}
                            </p>
                        </div>
                    </div>
              </div>
            );
          };
    
        return (
          <ListView
            initialListSize={25} //初始渲染几个 必须保证占满元素的高度
            ref={el => this.lv = el}
            dataSource={this.state.dataSource} //数据源
            renderHeader={() => <div>
                {/* <TabBarer/> */}
            </div>}//顶部渲染的结构
            renderFooter={() => (
                <div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? '正在加载...' : '加载完毕'}
                </div>
            )}//底部渲染的结构
            renderBodyComponent={() => <MyBody />}
            renderRow={row} //渲染listView里面的每一行的结构
            style={{
              height: this.state.height,
              overflow: 'auto',
            }}
            pageSize={1}
            onScroll={() => { "111" }}
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

export default PingLun
