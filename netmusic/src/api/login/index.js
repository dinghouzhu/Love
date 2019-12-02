//登录
export const phoneLogin = (phone, password) => {
   return fetch('http://106.12.10.151:3000/login/cellphone?phone=' + phone + '&password=' + password,{credentials:'include'})
      .then(body => body.json())
      .then(res => {
         return res
      })
}

//  判断号码是否注册
export const getPhone = (phone) => {
   return fetch('http://106.12.10.151:3000/cellphone/existence/check?phone=' + phone)
      .then(body => body.json())
      .then(res => {
         return res
      })
}
// 18355171062

//发送验证码
export const SentCaptcha = (phone) => {
   return fetch('http://106.12.10.151:3000/captcha/sent?phone=' + phone)
      .then(body => body.json())
      .then(res => {
         return res
      })
}
//验证验证码
export const TestCaptcha = (phone, cptcha) => {
   return fetch('http://106.12.10.151:3000/captcha/verify?phone=' + phone + '&captcha=' + cptcha)
      .then(body => body.json())
      .then(res => {
         return res
      })
}
//注册
export const Register = (phone, password, cptcha, nickname) => {
   return fetch('http://106.12.10.151:3000/register/cellphone?phone=' + phone + '&password=' + password + '&captcha=' + cptcha + '&cnickname=' + nickname,{credentials:'include'})
      .then(body => body.json())
      .then(res => {
         return res
      })
}


