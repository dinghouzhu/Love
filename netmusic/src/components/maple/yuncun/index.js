import React from "react"
import {connect} from "react-redux";
const mapStartProps=state=>{
    return{

    }
};
const mapGetProps=dispatch=>{
    return{

    }
};

@connect(mapStartProps,mapGetProps)
class YunCun extends React.Component{

    render(){
        return(
            <div style={{width:"100%",height:"100%"}}>
                <div style={{height:"30px",width:"100%"}}>头部</div>
                <div style={{height:"100%",width:"100%",
                display:"flex",
                justifyContent:"flex-start",
                flexWrap: "wrap"
                }}>
                    <div style={{width:"50%",height:"40px",border:"1px solid #ccc",boxSizing:"border-box"}}>

                    </div>
                    <div style={{width:"50%",height:"50px",border:"1px solid #ccc",boxSizing:"border-box"}}>

                    </div>
                    <div style={{width:"50%",height:"60px",border:"1px solid #ccc",boxSizing:"border-box"}}>

                    </div>
                    <div style={{width:"50%",height:"30px",border:"1px solid #ccc",boxSizing:"border-box"}}>

                    </div>
                    <div style={{width:"50%",height:"50px",border:"1px solid #ccc",boxSizing:"border-box"}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default YunCun