/*
  dividing array : O(N)
  append: O(1)
  pop: O(1)
*/

class ThreeStacks {
  
  constructor(stackSize){
    this.maxStack = 3
    this.list = Array(stackSize * this.maxStack).fill(0)
    this.stacks = Array(stackSize).fill(0)
    this.stackSize = stackSize
  }


  isFull(stackNum){
    if ( this.stacks[stackNum] === this.stackSize ) return true
    return false
  }

  isEmpty(stackNum){
    if ( this.stacks[stackNum] === 0 ) return true
    return false
  }

  topIndex(stackNum){
    let offset = stackNum * this.stackSize
    return offset + this.stacks[stackNum] - 1   
  }

  append(stackNum,value){
    if ( this.isFull(stackNum) ) return "Stack is full ..."
    this.stacks[stackNum] += 1
    this.list[this.topIndex(stackNum)] = value
    return this
  }

  pop(stackNum){
    if (this.isEmpty(stackNum)) return "Stack is empty ..."
    let val = this.list[this.topIndex(stackNum)]
    this.list[this.topIndex(stackNum)] = 0
    this.stacks[stackNum] -= 1
    return val
  }
  
}

let _3 = new ThreeStacks(3)
_3.append(1,10).append(1,20).append(1,30)
console.log(_3.list)
console.log(_3.stacks)

console.log("... After pop ")
console.log(_3.pop(1))
console.log(_3.list)
console.log(_3.stacks)


