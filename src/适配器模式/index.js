/*
 * @Author: ChangJun (52chinaweb@gmail.com) 
 * @Date: 2018-10-23 22:22:27 
 * @Last Modified by:   52chinaweb 
 * @desc 
 */

class Adaptee {
  specificRequest() {
    return '耳机接口'
  }
}

class Target {
  constructor() {
    this.adapatee = new Adaptee()
  }
  request() {
    let info = this.adapatee.specificRequest()
    return `${info}-转换器-小米耳机`
  }
}

let target = new Target();
let res = target.request();
console.log(res);
