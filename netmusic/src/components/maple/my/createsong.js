import React from "react";
import {connect} from "react-redux";
import { Accordion, List } from 'antd-mobile';
import Mycss from "./my.module.css"
import Createsongadd from "./createsongadd";
import Createsongerwai from "./createsongerwai";
import store from "../../../store/index"
import {getListnew ,newSongAction,getsonglist,DengLuGuoLai } from "../../../actions/maple/CreateSongnew";
//路由
// import {Route,Link,NavLink} from "react-router-dom"
import {withRouter} from "react-router-dom"
const mapStateToProps=state=>{
  // console.log(state)
  return{
    all:state.Createsongreducer.all,
    songdata:state.newSong.newlistsong,
    userid:state.pushcount.userid
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    //手机号码进行登录
    denglulail(){
      dispatch(DengLuGuoLai())
    },
    //获取用户歌单详情
    getSongListNew(userid){
      getListnew(dispatch,userid)
    },
    //新建歌单
    newSongList(newsongname){
      newSongAction(dispatch,newsongname)
    },
    //获取歌单信息
    GetlistSong(id){
      getsonglist(dispatch,id)
    }
  }
}

@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Createsong extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value:""
    }
  }
  onChange = (key) => {
    // console.log(key);
    // let {to}=this.props
    // console.log(to)
  }
  componentDidMount(){
    // let {getSongListNew}=this.props
    // console.log(getSongListNew)
    // fetch('http://106.12.10.151:3000/login/cellphone?phone=18856486021&password=1234567')
    // .then(body=>body.json)
    // .then(res=>{
    //   console.log(res)
    // })
    // this.props.denglulail()
    // console.log(this.props)
    this.props.getSongListNew(this.props.userid)
    // console.log(1)
  }
  //登录
  dneglu(){
    this.props.denglulail()
  }
  //新建歌单
  getlistsongdata(value,id){
    if(!value){
      return 
    }
    //现在只是假设一个方法把该数据存放到新建歌单里面
    this.setState({
      value:{name:value,id}
    })
    // console.log(value)
    this.props.newSongList(value)
  }


  //跳转到歌单列表页
  zhanshi(id,songdata){
    //触发
    this.props.GetlistSong(id)
    // console.log(id)
    this.props.history.push({pathname:"/My/songlist",state:{id}})
  }


  render() {
    let {to,all,songdata}=this.props
    if(!this.state.value){
      //  console.log(11)
    }else{
      all.push(this.state.value)
    }
    //获取用户ID
    // console.log(store.getState())
    //用户ID设置默认值为 32953014
    let userid=this.props.userid
    console.log(userid)
    if(!userid){
      var all1=[]
      var all2=[]
    }else{
      var all1=all.filter(item=>item.userId==userid)
      var all2=all.filter(item=>item.userId!==userid)
    }
    // Createsongadd 弹出一个框 上面有一个新建歌单的内容
    //Createsongerwai 从下面上拉一个框 然后点击的时候 消失 
    //显示的内容
    let mkk=to?all1:all2
    let wenben=
      <div>
        <div>
          {to?`新建的歌单(${all1.length})`:`收藏的歌单(${all2.length})`}
          {to? <Createsongadd createnewadd={this.getlistsongdata.bind(this)} />:''}
          {to? <Createsongerwai goto={true} />:<Createsongerwai goto={false} />}
          {/* <Createsongadd/> */}
        </div>
      </div>
    return (
      <div style={to?{ marginTop: 10, marginBottom: 0 }:{marginTop: 0, marginBottom: 0}}>
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header={wenben}>
            <List className="my-list">
            {mkk.map(item=><List.Item onClick={this.zhanshi.bind(this,item.id,songdata)} key={item.id} >
              <div className={Mycss.mycreatesong}>
                <img src={item.coverImgUrl} alt=""  />
                </div>
                  <div className={Mycss.mycreatesong_div}>
                    <p>
                      <span>{item.name}</span>
                      <span>{item.trackCount}</span>
                    </p>
                    <div>
                    <Createsongerwai xiaozujian={item.id}/>
                    </div>
                  </div>
            </List.Item>)}
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>
    )
  }
}

export default Createsong


