class LRU {
  
  constructor(capacity){
    this.capacity = capacity;
    this.cache = new Map();
  }

  getItem(key){
    const item = this.cache.get(key)
    if (item){
      this.cache.delete(key)
      this.cache.set(key,item)  
    } 

    return item
  }

  put(val,key){
    
    if ( this.cache.has(key) ){
      this.cache.delete(key) 
    }

    if ( this.cache.size === this.capacity ){
      this.cache.delete(key)
    }
    
    this.cache.set(val,key)
  }

  oldest() {
    return this.cache.keys().next().value
  }

  view(){
    console.log(this.cache)
  }
} 



const cache = new LRU(5)

cache.put("place","Delhi")
cache.put("age",24)
cache.put("username","Rohit")

console.log("oldest",cache.oldest())
console.log(cache.getItem("place"))
console.log("oldest",cache.oldest())

cache.view()



