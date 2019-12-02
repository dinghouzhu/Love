import { getPhone,phoneLogin,SentCaptcha,TestCaptcha,Register } from "../../api/login"

const creator =(type,payload) =>({type,payload})

//检测输入手机号是否已经注册
export const testPhone = (dispatch,phone)=> { 
    // console.log(phone)
    getPhone(phone)
        .then(res => {
            dispatch(creator("TEST_PHONE",res))
        })
}
//传递用户id存放在this.state.pushconut的userid中
export const pushcount = (dispatch,count)=> { 
            dispatch(creator("PUSH_COUNT",count))
}
//手机号密码登录
export const phonelogin  = (dispatch,phone,password) => {
    phoneLogin(phone,password)
        .then(res => {
            dispatch(creator("PHONE_LOGIN", res))
        })
}

//手机号发送验证码
export const sentcptcha  = (dispatch,phone) => {
    SentCaptcha(phone)
        .then(res => {
            dispatch(creator("SENT_CAPTCHA", res))
        })
}


//验证手机验证码
export const testcaptcha  = (dispatch,phone,captcha) => {
    TestCaptcha(phone,captcha)
        .then(res => {
            // console.log(res)
            dispatch(creator("TEST_CAPTCHA", res))
            
        })
}


export const UserRegister  = (dispatch,phone,password,captcha,nickname) => {
    Register(phone,password,captcha,nickname)
        .then(res => {
            // console.log(res)
            dispatch(creator("USER_REGISTER", res))
            
        })
}
