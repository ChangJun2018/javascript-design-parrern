
/**
 * 用一个变量来标志当前的类已经创建过对象,如果下次获取当前类的实例，直接返回创建的的对象即可。
 */
class SingleObject {
  static getInstance() {
    if (!SingleObject.instance) {
      SingleObject.instance = new SingleObject()
    }
    return SingleObject.instance
  }
}

class SingleObject {
  login() {
    console.log('login...')
  }
}

SingleObject.getInstance = (function() {
  let instance
  return function() {
    if(!instance){
      instance = new SingleObject();
    }
    return instance
  }
})()




class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if (this.state === 'show') {
      alert('显示登陆框')
      return
    }
    this.state = 'show'
    console.log('登陆框已经显示')
  }
  hide() {
    if (this.state === 'hide') {
      alert('隐藏登陆框')
      return
    }
    this.state = 'hide'
    console.log('登陆框已隐藏')
  }
}

LoginForm.getInstance = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()

let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login1.hide()

