// Worst Time Complexity : O(N)

/*

  hint 1 : reverse a stack
  hint 2 : pop from the second stack ( oldest element will always bet  at the top of stack 2 )

*/

class Queue {
  constructor(){
    this.input = []
    this.output = []
  }

  enqueue(data){
    this.input.push(data)
    return this
  }

  dequeue(){
    
    if ( this.output.length === 0 ){
      if ( this.input.length > 0 ){
        while ( this.input.length > 0 ){
          let elem = this.input.pop()
          this.output.push(elem)
        } 
      } else {
        return "stack is empty"
      }
    }
    
    return this.output.pop()
  }
}




let q2 = new Queue()

q2.enqueue(10).enqueue(20).enqueue(30).enqueue(40)

console.log(q2.input)
console.log(q2.output)



console.log(q2.dequeue())
console.log(q2.dequeue())
console.log(q2.dequeue())
console.log("After dequeue ..................")
console.log(q2.output)
