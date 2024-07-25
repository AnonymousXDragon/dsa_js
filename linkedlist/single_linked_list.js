class Node {
  constructor(data){
    this.data = data
    this.next = null
    this.tail = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  append(data){

    let new_node = new Node(data)
  
    if ( this.head === null ){
      this.head = new_node
      this.tail = new_node
    } else {
      this.tail.next = new_node
      this.tail = new_node
    }

    return this
  }

  getIndex(data){
    let count = 0
    let currentNode = this.head
    while ( currentNode ) {
      if ( currentNode.data === data ) {
        return count
      }
      currentNode = currentNode.next
      count += 1
    }
  }

  search(data){
    let currentNode = this.root
    while( currentNode.next != null ){
      if ( currentNode.data === data ) return "value found"
      currentNode = currentNode.next
    }
    return "value not found"
  }
  
  delete(data){
  
    if ( this.head.data === data ){
      let temp_node = this.head.next
      this.head.next = null
      this.head = temp_node
      return this
    } else {
      
      let currentNode = this.head
      while (currentNode.next !== null){
        if ( currentNode.next.data === data ){
          break    
        }
        currentNode = currentNode.next
      }

      let temp_node = currentNode.next
      currentNode.next = temp_node.next
      temp_node.next = null
      return this
    }
    
  }


  print(){

    let currentNode = this.head
    console.log("first",currentNode.data)
    while(currentNode){
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
    
  }
  
}



let ll = new LinkedList()
ll.append(10).append(20).append(30).append(40).append(50)
ll.print()

console.log(ll.getIndex(20))
console.log(ll.getIndex(50))


console.log("After deletion.....................")
ll.delete(10)
ll.delete(50)
ll.print()

















