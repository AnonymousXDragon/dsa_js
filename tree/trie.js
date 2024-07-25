// Trie 


class Node {
  constructor(){
    this.dict = {}
    this.endOfString = false
  }
}

class Trie {
  constructor(){
    this.root = new Node()
  }

  insert(words){

    let current = this.root
    for ( let char of words ){
      
      let ch = current.dict[char]
      if ( ch === undefined ){
        current.dict[char] = new Node()
      }
      current = current.dict[char]
      
    }

    current.endOfString = true
    return this
  }

  search(word){
    let current = this.root

    for ( let char of word ){
      let ch = current.dict[char]
      if ( ch === undefined ){
        return {
          "message": `string ${word} not found`,
          "found": false
        }
      }
      current = current.dict[char]
    }

    if ( current.endOfString === false ){
      return {
        "message": `string ${word} not found`,
        "found": false
      }
    }

   return {
      "message": `string ${word} found successfully`,
      "found": true
    } 
    
  }

  deleteNode(root,word,index=0){
    let char = word[index]
    let current_node = root.dict[char]
    let canDeleteNode = false
    
    if ( Object.keys(current_node.dict).length > 1 ){
      this.deleteNode(current_node,word,index+1)
      return false
    }

    if ( index === word.length - 1 ){
      if ( Object.keys(current_node.dict).length >= 1 ){
        current_node.endOfString = false
        return false
      } else {
        delete root.dict[char]
        return true
      }
    }    

    if ( current_node.endOfString === true ){
      this.deleteNode(current_node,word,index+1)
      return false
    }

    canDeleteNode = this.deleteNode(current_node,word,index+=1)

    if ( canDeleteNode ){
      delete root.dict[char]
      return true
    } else {
      return false
    }
    
  }
  
}


let t = new Trie()

t.insert("cat").insert("cats").insert("cards").insert("card")

console.log(t.search("cat"))
console.log(t.search("card"))
console.log(t.search("cow"))

console.log("deletion ---------------")

t.deleteNode(t.root,"cats")
console.log(t.search("cats"))
