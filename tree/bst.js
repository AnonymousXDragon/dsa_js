class Node {
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}


class BST {
  constructor(){}

  insert(root,data){
    if ( root === null ){
      return new Node(data)
    }

    if ( data < root.data ){
      root.left = this.insert(root.left,data)
    } else {
      root.right = this.insert(root.right,data)
    }

    return root
  }

  levelOrder(root){
    let queue = []
    queue.push(root)

    while ( queue.length > 0 ){
      root = queue.shift()
      console.log(root.data)
      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }
  }

  getMinNode(root){
    if ( root === null || root.left === null ){
      return root
    }
    return this.getMinNode(root.left)
  }

  deleteNode(root,data){
    if ( root === null ){
      return root
    }

    if ( data < root.data ){
      root.left = this.deleteNode(root.left,data)
    } else if ( data > root.data ) {
      root.right = this.deleteNode(root.right,data)
    } else {

      if ( root.left === null ){
        let temp = root.right
        root = null
        return temp
      }
      
      if ( root.right === null ){
         let temp = root.left
         root = null
         return temp
      }
      
      let min_node = this.getMinNode(root.right)
      root.data = min_node.data 
      root.right = this.deleteNode(root.right,min_node.data)
      
    }
    return root
  }
  
}

let root = new Node(10)

let bst = new BST()

bst.insert(root,5)
bst.insert(root,4)
bst.insert(root,6)

bst.levelOrder(root)

bst.deleteNode(root,5)

console.log("After Deletion .....")
bst.levelOrder(root)











