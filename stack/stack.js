class Stack {
  constructor(){
    this.list = []
    this.length = 0
  }

  append(data){
    this.list[this.length] = data
    this.length += 1
    return this
  }

  delete(){
    let elem = this.list.pop()
    this.length -= 1
    return elem
  }

  peek(){
    return this.list[this.length-1]
  }
  
}


let s = new Stack()
s.append(10).append(20).append(30).append(40).append(50)
console.log(s.peek())
console.log(s.length)


s.delete()
console.log(s.peek())
console.log(s.length)
