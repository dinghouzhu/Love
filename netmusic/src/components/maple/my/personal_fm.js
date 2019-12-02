import React from "react";
import {connect} from "react-redux"

const getStateProps=state=>{
    return{

    }
}
const getFnProps=dispatch=>{
    return{

    }
}

@connect(getStateProps,getFnProps)
class Personal_fm  extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        return(
            <div>
                <h1>
                    进入FM页面
                </h1>
            </div>
        )
    }
}

export default Personal_fm

