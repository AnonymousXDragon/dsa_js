/*

  push: O(1)
  pull: O(1)
  min:  O(1)

*/

class Node {
  constructor(data,next){
    this.data = data || null
    this.next = next || null
  }
}

class MinStack {
  constructor(){
    this.top = null
    this.min = null
  }

  append(value){
    
    if ( this.min && this.min.data < value ){
      this.min = new Node(this.min.data,this.min)  
    } else {
      this.min = new Node(value,this.min)
    }

    this.top = new Node(value,this.top)
    return this
    
  }


  pop(){
    
    if ( this.top === null ){
      return "stack is empty"
    }

    let topVal = this.top.data

    this.min = this.min.next
    this.top = this.top.next
    return topVal
    
  }

  print(){
    
    let currentNode = this.top
    while ( currentNode ) {
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
       
  }
    
}


let s = new MinStack()
s.append(10).append(20).append(30).append(40)
s.print()

console.log("minimum node",s.min.data)

console.log(".....after pop")
s.pop()
s.print()
console.log("minimum node",s.min.data)

console.log("... top of stack")
console.log(s.top.data)

