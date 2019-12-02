import React from "react"
import { Grid, ListView } from 'antd-mobile';
import discoverCss from "../../../assets/css/discover.module.css"
function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}
class PlayListDemo extends React.Component {
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
            // refreshing: true
        };
    }
    //页面加载的时候 将数据传入dataSource
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        //请求服务器参数 将获取到的新数据(数组类型) 传入到dataSource.cloneWithRows()
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.playlist),
                isLoading: false
            })
        }, 1000);
    }
    onEndReached = (event) => {
        this.setState({
            isLoading: false
        })
    }
    songListDetails(id) {
        this.props.props.history.push('/songlist?id=' + id)
    }
    render() {
        const row = (rowData, sectionID, rowID) => {
            try {
                return (
                    <Grid data={this.props.playlist}
                        columnNum={3}
                        hasLine={false}
                        square={false}
                        style={{ padding: "0px" }}
                        renderItem={dataItem => (
                            <div style={{ position: "relative" }} onClick={this.songListDetails.bind(this, dataItem.id)}>
                                <img src={this.props.title === "推荐" ? dataItem.picUrl : dataItem.coverImgUrl} style={{ width: '100px', height: '100px', borderRadius: '5px' }} alt="" />
                                <div className={discoverCss.playCount}>
                                    <img className={discoverCss.bofang} src={require('../../../assets/icons/bofang.png')} alt="" />
                                    {dataItem.playCount < 100000000 ? parseInt(dataItem.playCount / 10000) + "万" : parseInt(dataItem.playCount / 100000000) + "亿"}
                                </div>
                                <div style={{ color: '#000', fontSize: '12px' }}>
                                    <span className={discoverCss.gridItem}>{dataItem.name}</span>
                                </div>
                            </div>
                        )}
                    />
                )
            } catch (e) {
                return null
            }
        };

        return (
            <ListView
                initialListSize={5} //初始渲染几个 必须保证占满元素的高度
                ref={el => this.lv = el}
                dataSource={this.state.dataSource} //数据源
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? '正在加载...' : '加载完毕'}
                </div>)}//底部渲染的结构
                renderBodyComponent={() => <MyBody />}
                renderRow={row} //渲染listView里面的每一行的结构
                style={{
                    height: this.state.height,
                    // overflow: 'auto',
                }}
                pageSize={1}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached} //数据全部渲染完毕之后触发的方法
                onEndReachedThreshold={10}
            />
        );
    }
}
export default PlayListDemo