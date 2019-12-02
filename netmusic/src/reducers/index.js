import { combineReducers} from 'redux'
//my maple
import Createsongreducer from './maple/createsongreducer'
import newSong from './maple/newSong'
import newSongName from './maple/newSongName'
import getSongDatil from './maple/getSongDatil'
import songXinXi from './maple/songXinXi'
import Songhuoyugeshou from './maple/Songhuoyugeshou'
import ShouJiYanZheng from './maple/ShouJiYanZheng'
import DengLuShuJiemian from './maple/DengLuShuJiemian'
import BangHangBangLi from './maple/BangHangBangLi'
import PaiHangDetail from './maple/PaiHangDetail'
//zzy login
import phoneReducer from "./zzy/phoneReducers"
import passwordReducer from "./zzy/passwordReducers"
import pushcount from "./zzy/pushcount"
import captcha from "./zzy/captcha"
import register from "./zzy/register"
//hao jia cui
import SearchReducer from "./SearchReducer/index"
import SearchSingerReducer from "./SearchReducer/singerReducer"
import VideoReducer from './VideoReducer/index'
import songListDetails from "./discover/songListDetailsReducers"
import songDetails from "./discover/songDetailsReducer"
import playSong from "./discover/playSongReduer"
import videoListView from "./discover/videoListViewReducer"
import dayRec from "./discover/dayRecommendReducer"
import playlistTags from "./discover/playListtagsReducer"
import playlist from "./discover/playListReducer"
import comment from "./discover/commentReducer.js"
export  default combineReducers({
    //my maple
    Createsongreducer,
    newSong,
    newSongName,
    getSongDatil,
    songXinXi,
    ShouJiYanZheng,
    Songhuoyugeshou,
    DengLuShuJiemian,
    BangHangBangLi,
    PaiHangDetail,
    // zzy login
    phoneReducer,
     passwordReducer,
     pushcount,
     captcha,
     register,
    //hao jia cui
    SearchReducer,
    SearchSingerReducer,
    VideoReducer,
    songListDetails,
    songDetails,
    playSong,
    videoListView,
    dayRec,
    playlistTags,
    playlist,
    comment
})
