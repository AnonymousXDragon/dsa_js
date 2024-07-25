// Worst time complexity is O(logN)

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}


class Avl {
  constructor(){}


  getHeight(root){
    if ( root === null ){
      return 0
    }
    return root.height
  }

  getBalance(root){
    if ( root === null ){
      return 0
    }
    return this.getHeight(root.left) - this.getHeight(root.right)
  }

  leftRotation(disbalancedNode){
    let newNode = disbalancedNode.right
    disbalancedNode.right = disbalancedNode.right.left
    newNode.left = disbalancedNode
    disbalancedNode.height = 1 + Math.max(...[this.getHeight(disbalancedNode.left),this.getHeight(disbalancedNode.right)])
    newNode.height = 1 + Math.max(...[this.getHeight(newNode.left),this.getHeight(newNode.right)])
    return newNode
  }

  rightRotation(disbalancedNode){
    let newNode = disbalancedNode.left
    disbalancedNode.left = disbalancedNode.left.right
    newNode.right = disbalancedNode
    disbalancedNode.height = 1 + Math.max(...[this.getHeight(disbalancedNode.left),this.getHeight(disbalancedNode.right)])
    newNode.height = 1 + Math.max(...[this.getHeight(newNode.left),this.getHeight(newNode.right)])
    return newNode
  }

  insert(root,data){
    
    if ( root === null ){
      return new Node(data)
    }

    if ( data < root.data ){
      root.left = this.insert(root.left,data)
    } else {
      root.right = this.insert(root.right,data)
    }

    root.height = 1 + Math.max(...[this.getHeight(root.left),this.getHeight(root.right)])
    let balance = this.getBalance(root)

    if (balance > 1 && data < root.left.data){
      return this.rightRotation(root)
    }
    if (balance > 1 && data > root.left.data){
      root.left = this.leftRotation(root.right)
      return this.rightRotation(root)
    }

    if (balance < -1 && data > root.right.data){
      return this.leftRotation(root)
    }
    if (balance < -1 && data < root.right.data){
      root.right = this.rightRotation(root.left)
      return this.leftRotation(root)
    }
    return root
  }


  search(root,data){
    if ( root === null ){
      return false
    }
    
    if ( root.data === data ){
      return true
    }
    
    if ( data < root.data ){
        return this.search(root.left,data)
    } else {
        return this.search(root.right,data)
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

    if (data < root.data ){
      root.left = this.deleteNode(root.left,data)
    } else if (data > root.data) {
      root.right = this.deleteNode(root.right,data)
    } else {
      
      if ( root.left === null ){
        let temp = root.right
        root = null
        return temp
      } else if ( root.right === null ){
        let temp = root.left
        root = null
        return temp
      } else {
        let temp = this.getMinNode(root.right)
        root.data = temp.data
        root.right = this.deleteNode(root.right,temp.data)
      }
      
    }

    let balance = this.getBalance(root)
    if ( balance > 1 && this.getBalance(root.left) >= 0) {
      return this.rightRotation(root)
    }

    if ( balance > 1 && this.getBalance(root.left)  < 0 ){
      root.left = this.leftRotation(root.right)
      return this.rightRotation(root)
    }

    if (balance < -1 && this.getBalance(root.right)  <= 0 ){
      return this.leftRotation(root)
    }

    if ( balance < -1 && this.getBalance(root.right) > 0){
      root.right = this.rightRotation(root.left)
      return this.rightRotation(root)
    }

    return root
  }

  deleteAll(root) {
    root.data = null
    root.left = null
    root.right = null
    return "Entire Tree Is Deleted"
  }
}


// time & space complexity : O(1)
let root = new Node(70)
let avl = new Avl()

// time & space complexity : O(logN)
avl.insert(50)
avl.insert(80)

