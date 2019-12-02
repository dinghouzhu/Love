import React from "react";
import {connect} from "react-redux";
import PHB from "./index.module.css"
import store from "../../../../store/index"
import { BHANGPANGGOTO, BangDetail } from "../../../../actions/maple/CreateSongnew";
import HuiBiaoQian from "../icon-my/left.png"
import { Grid ,NavBar,Icon} from 'antd-mobile';
const mapStateProps=state=>{
    return{

    }
};

const maphanshuProps=dispatch=>{
    return{
        gotolist(){
            dispatch(BHANGPANGGOTO())
        },
        chufazhuanhuan(xsid){
            BangDetail(dispatch,xsid)
        }
    }
}
@connect(mapStateProps,maphanshuProps)
class PaiHangBang extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    jhome(){
        this.props.history.go(-1)
    }
    componentDidMount(){
        this.props.gotolist()
    }
    tphb(name){
        const todo=(name)=>{
            switch(name){
                case "云音乐飙升榜":
                    return 3
                case "云音乐新歌榜":
                    return 0
                case "网易原创歌曲榜":
                    return 2
                case "云音乐热歌榜":
                    return 1
                case "云音乐说唱榜":
                    return 23
                case "云音乐古典音乐榜":
                    return 24
                case "新声榜":
                    return 27
                case "云音乐ACG音乐榜":
                    return 22
                case "云音乐韩语榜":
                    return 28
                case "云音乐国电榜":
                    return 4
                case "英国Q杂志中文版周榜":
                    return 29
                case "电竞音乐榜":
                    return 30
                case "UK排行榜周榜":
                    return 5
                case "美国Billboard周榜":
                    return 6
                case "Beatport全球电子舞曲榜":
                    return 21
                case "KTV唛榜":
                    return 7
                case "iTunes榜":
                    return 8
                case "日本Oricon周榜":
                    return 10
                case "Hit FM Top榜":
                    return 9
                case "台湾Hito排行榜":
                    return 20
                case "云音乐欧美热歌榜":
                    return 31
                case "云音乐欧美新歌榜":
                    return 32
                case "法国 NRJ Vos Hits 周榜":
                    return 19
                case "抖音排行榜":
                    return 26
                case "韩国Melon排行榜周榜":
                    return 11
                case "韩国Mnet排行榜周榜":
                    return 12
                case "韩国Melon原声周榜":
                    return 13
                case "中国TOP排行榜(港台榜)":
                    return 14
                case "中国TOP排行榜(内地榜)":
                    return 15
                case "香港电台中文歌曲龙虎榜":
                    return 16
                case "华语金曲榜":
                    return 17
                default :
                    return
            }
        };
        let toxsid=todo(name)
        // this.props.chufazhuanhuan(toxsid)
        // this.props.history.push({pathname:"/bangdansong"})
        this.props.history.push({pathname:"/bangdansong",state:{toxsid}})
    }
    render(){
        console.log(store.getState())
        try{
            let {list}=store.getState().BangHangBangLi.togobanghai
            let arr1=list.filter((item,i)=>i<4)
            let arr2=list.filter((item,i)=>i>4&&i<11)
            let arr3=list.filter((item,i)=>i>11&&i<18)
            let arr4=list.filter((item,i)=>i>19&&i<25)
            return(
                <div className={PHB.div_yemian}>
                       <NavBar
                        mode="light"
                        icon={<Icon type="left" style={{color:"black"}} />}
                         onLeftClick={() => this.props.history.goBack()}
                        >排行榜</NavBar>
                    <div className={PHB.div_yemian_guan}>
                        <h1>官方榜</h1>
                        {arr1.map((item,i)=>
                            <div key={i} className={PHB.div_yemian_guan_goto} onClick={this.tphb.bind(this,item.name)}>
                                <img src={item.coverImgUrl} alt=""/>
                                <div>
                                    {item.tracks.map((item,i)=>(
                                        <li key={i}>
                                            <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                                {i+1}.&nbsp;{item.first}&nbsp;-&nbsp;{item.second}
                                            </p>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={PHB.divbang_tuijia}>
                        <h1>推荐榜</h1>
                        <div>
                        <Grid data={arr2}
                            columnNum={3}
                            renderItem={dataItem => (
                                <div style={{marginTop:"10px"}} onClick={this.tphb.bind(this,dataItem.name)}>
                                <img src={dataItem.coverImgUrl} style={{ borderRadius:"7px",width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                                </div>
                            )}
                        />
                        </div>
                    </div>

                    <div className={PHB.divbang_tuijia}>
                        <h1>全球榜</h1>
                        <div>
                        <Grid data={arr3}
                            columnNum={3}
                            renderItem={dataItem => (
                                <div style={{marginTop:"10px"}} onClick={this.tphb.bind(this,dataItem.name)}>
                                <img src={dataItem.coverImgUrl} style={{ borderRadius:"7px",width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                                </div>
                            )}
                        />
                        </div>
                    </div>
                    <div className={PHB.divbang_tuijia}>
                        <h1>更多榜单</h1>
                        <div>
                        <Grid data={arr4}
                            columnNum={3}
                            renderItem={dataItem => (
                                <div style={{marginTop:"10px"}} onClick={this.tphb.bind(this,dataItem.name)}>
                                <img src={dataItem.coverImgUrl} style={{ borderRadius:"7px",width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                                </div>
                            )}
                        />
                        </div>
                    </div>
                </div>
        )
        }catch{
            return (
                <div>
                    <h1>页面正在加载中</h1>
                </div>
            )
        }

    }

}
export default PaiHangBang