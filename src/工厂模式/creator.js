/*
 * @Author: ChangJun (52chinaweb@gmail.com) 
 * @Date: 2018-10-23 22:22:27 
 * @Last Modified by:   52chinaweb 
 * @desc 工厂模式
 */

 class Product {
   constructor(name){
    this.name = name
   }

   init(){
     alert('init')
   }

   fun1(){
     alert('fun1')
   }

   fun2(){
     alert('fun2')
   }
 }

 class Creator{
   create(name){
     return new Product(name)
   }
 }


 let creator = new Creator()
 let p = creator.create('p1')
 p.init()
 p.fun1()

