class Heap {
  constructor(size){
    this.list = new Array(size+1).fill(null)
    this.maxSize = size + 1
    this.length = 0
  }


  heapify(type,index){
    let parentIndex = Math.floor(index/2)
    if ( index <= 1 ){
      return
    } 
    
    if ( type === "min" ){
      if ( this.list[parentIndex] > this.list[index] ){
        let temp = this.list[index]
        this.list[index] = this.list[parentIndex]
        this.list[parentIndex] = temp
      }
      this.heapify(type,parentIndex)
    }
    
    if ( type === "max" ){
      if ( this.list[parentIndex] < this.list[index] ){
        let temp = this.list[index]
        this.list[index] = this.list[parentIndex]
        this.list[parentIndex] = temp
      }
      this.heapify(type,parentIndex)
    }
    
  }

  insert(data,type){
    if ( this.length + 1 === this.maxSize ){
      return {
        "message": "heap is full"
      }
    } else {
      this.list[this.length+1] = data
      this.length += 1
      this.heapify(type,this.length)
    }
  }

  extractHeapify(type,index){
    let left = index * 2
    let right = index * 2 + 1
    let swapChild = 0

    if ( this.length < left ){
      return 
    }

    if ( this.length === left ){
      
      if ( type === "min" ){
        if ( this.list[index] > this.list[left] ){
          let temp = this.list[left]
          this.list[left] = this.list[index]
          this.list[index] = temp
        }
        return 
      }
      
      if ( type === "max" ){
        if ( this.list[index] < this.list[left] ){
          let temp = this.list[left]
          this.list[left] = this.list[index]
          this.list[index] = temp
        }
        return
      }
      
    } else {

      if ( type === "min" ){
        
        if ( this.list[left] < this.list[right] ){
          swapChild = left
        } else {
          swapChild = right
        }
        
        if ( this.list[index] > this.list[swapChild]  ){
            let temp = this.list[swapChild]
            this.list[swapChild] = this.list[index]
            this.list[index] = temp
        }     
       
      } else {

        if ( this.list[left] > this.list[right] ) {
          swapChild = left
        } else {
          swapChild = right
        }

        if ( this.list[index] < this.list[swapChild] ){
          let temp = this.list[index]
          this.list[index] = this.list[swapChild]
          this.list[swapChild] = temp
        }
          
      }
      
      this.extractHeapify(type,swapChild)     
    }

    
  }

  extract(type){
    if ( this.length === 0 ){
      return {
        "message": "tree is empty"
      }
    } else {
      let node = this.list[1]
      this.list[1] = this.list[this.length]
      this.list[this.length] = null
      this.length -= 1
      this.extractHeapify(type,1)
      return node
    }
  }
  
}




let heap = new Heap(5)
heap.insert(10,"max")
heap.insert(5,"max")
heap.insert(20,"max")
heap.insert(4,"max")
heap.insert(6,"max")

console.log("tree",heap.list)
console.log("length",heap.length)

console.log("after extraction ......")
console.log(heap.extract("max"))
//console.log(heap.extract("min"))
// heap.extract("min")
console.log(heap.list)
console.log(heap.length)
