import React from "react"
import { ListView } from 'antd-mobile';
import { videoList } from '../../actions/VideoAction'
import VideoCss from "../../assets/css/video.module.css"
import store from "../../store"
//这是个容器 包裹了listView
function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}

class VideoListView extends React.Component {
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
            refreshing: true
        };
    }
    //页面加载的时候 将数据传入dataSource
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        // store.dispatch(videoList(222138))
        store.dispatch(videoList(75100))
        //请求服务器参数 将获取到的新数据(数组类型) 传入到dataSource.cloneWithRows()
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(store.getState().VideoReducer.videohRes),
                isLoading: false
            })
        }, 700);
    }
    onEndReached = (event) => {
        this.setState({
            isLoading: false
        })
    }
    render() {
        const row = (rowData, sectionID, rowID) => {
            return (
                //每一行内容的结构 可以根据自己的需求更改样式
                <div key={rowID} className={VideoCss.videoDiv}>
                    <video className={VideoCss.VideoPlay} controls src={rowData.data.urlInfo.url}></video>
                    <span className={VideoCss.videoSpan}>{rowData.data.title}</span>
                    <img className={VideoCss.videoCreateAvatar} src={rowData.data.creator.avatarUrl} alt="" />
                </div>
            );
        };

        return (
            <ListView
                initialListSize={5} //初始渲染几个 必须保证占满元素的高度
                ref={el => this.lv = el}
                dataSource={this.state.dataSource} //数据源
                // renderHeader={() => <span>云村精选</span>}//顶部渲染的结构
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
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached} //数据全部渲染完毕之后触发的方法
                onEndReachedThreshold={10}
            />
        );
    }
}

export default VideoListView