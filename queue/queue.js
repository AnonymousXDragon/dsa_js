// Worst Time Complexity : O(N)
// After deleting first element from queue , it needs to be rearranged (iteration)

class Queue {
  constructor(){
    this.list = []
    this.length = 0
  }


  enqueue(data){
    this.list[this.length] = data
    this.length += 1
    return this
  }

  peek(){
     this.rear = this.list[this.length-1]
     return this.list[this.length-1]
  }

  front(){
    return this.list[0]
  }
  
  dequeue(){
    let val = this.list.shift()
    this.length -= 1
    return val
  }
  
}


let q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

console.log("front",q.front())
console.log("length",q.length)
console.log("peek", q.peek(),q.rear)

q.dequeue()
console.log("after dequeue ", q.length)



