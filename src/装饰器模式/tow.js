function readonly(target,name,descriptor){
  descriptor.writable = false
  return descriptor
}
class Person{
 constructor(){
   this.first = 'A'
   this.last = 'B'
 }

 @readonly
 name(){
   return `${this.first} ${this.last}`
 }
}

let p = new Person()
console.log(p.name())

// 报错只读
p.name = function(){
 alert('123')
}