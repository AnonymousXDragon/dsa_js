
class StackPlates {
  constructor(capacity){
    this.cap = capacity
    this.stacks = []
  }

  howMany(){
    let count = 0
    for(let x of this.stacks){
      if ( Array.isArray(x) ) count += 1
    }
    return count
  }

  append(value){
    if ( this.stacks.length === 0 ) {
      this.stacks.push([value])
    } else {
      if ( this.stacks[this.stacks.length-1] < this.cap ) {
        this.stacks[this.stacks.length-1].push(value)
      } else {
        this.stacks.push([value])
      }
    }
    return this
  }

  pop(){
    if ( this.stacks.length === 0) return "Stack is empty..."

    let val = this.stacks[this.stacks.length-1].pop()
    if ( this.stacks[this.stacks.length-1].length === 0 ) {
      this.stacks.pop()
    }
    return val
    
  }

  popAt(index){
    if ( this.stacks.length === 0 ) return "Stack is empty ..."
    if ( index - 1 > this.stacks.length) return "Index Out Of Bound ..."
    
    // if index Eq to last stack 
    let val = this.stacks[index-1].pop()
    if ( this.stacks[index - 1].length === 0 ) {
      if ( index === this.stacks.length ){
        this.stacks.pop()
      } else {
        ...
      }
    }   
  }

  
}
