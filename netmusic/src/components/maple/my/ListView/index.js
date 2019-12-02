/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView } from 'antd-mobile';
import React from "react";

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

class ZhiYing extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    //获取当前屏幕高度
    // console.log(document.documentElement.clientHeight)
    //触发的函数 即它写的分页
    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  componentDidMount() {
      
    //高度
    // const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    const hei="800px"
    setTimeout(() => {
      //挂载之前触发的
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
        height: hei,
      });
    }, 600);
  }

  //当所有的数据 都已经渲染过,并且列表被滚动到距离最低部不足
  //onEndReachedThreshold个像素的距离时调用
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    //是否是最后一页
    // console.log(this.state.isLoading)
    // console.log(this.state.hasMore)
    if (this.state.isLoading && !this.state.hasMore) {
      return 11;
    }
    // console.log('reach end', event);
    //isLoading 是为true的时候 出来一个下拉login
    this.setState({ isLoading: true });
    setTimeout(() => {

      //触发的函数 即它写的分页
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    //获取数组最大下标
    let index = data.length - 1;
    //什么时候 触发?
    const row = (rowData, sectionID, rowID) => {
        //如果当下标小于0时 重新触发index
        //这2个判断只不过是照片的复用
      if (index < 0) {
        index = data.length - 1;
      }
      //平时就是下标--
      const obj = data[index--];
      //这个参数有什么用?
      //返回的值 有什么用?
      //页面展示的数据
      return (
        //没一行数据渲染的样式
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
            </div>
          </div>
        </div>
      );
    };

    return (
      //传递参数
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        //页头与页脚(如果提供)会在每次渲染过程中都重新渲染。
        //如果它们重绘的性能开销很大,把他们包装到一个StaticContainer或者其它
        //恰当的结构中.页脚在列表的最底部,而页头会在最顶部
        renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        //如何提供了此函数,会为每个小节(section)渲染一个标题
        // renderSectionHeader={sectionData => (
        //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
        // )}
        //自定义body的包裹组件
        renderBodyComponent={() => <MyBody />}
        //从数据源(data source)中接受一条数据,以及它和它所在section的ID 返回一个可渲染的
        //组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身,不过
        //也可以提供一些转换器。如果某一行正在被高亮(通过调用highlightRow函数),ListView
        //会得到相应的通知
        renderRow={row}
        //如果提供了此属性,一个可渲染的组件会被渲染在每一行下面,除了小节标题的前面的最后一行。
        //在其上方的小节ID和行ID,以及邻近的行是否高亮会作为参数传递进来。
        renderSeparator={separator}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        //每次事件循环(每帧)渲染的行数
        pageSize={1}
        //在滚动的过程中,每帧最多调用一次此回调函数。调用的频率可以用
        //scrollEventThrottle属性来控制
        onScroll={() => { "11"}}
        //当一个行接近屏幕范围多少像素之内的时候,就开始渲染这一行
        scrollRenderAheadDistance={10}
        //当所有的数据 都已经渲染过,并且列表被滚动到距离最低部不足
        //onEndReachedThreshold个像素的距离时调用
        onEndReached={this.onEndReached}
        //调用onEndReached之前的临界值,单位是像素
        onEndReachedThreshold={20}
      />
    );
  }
}

export default ZhiYing