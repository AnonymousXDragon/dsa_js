var findTarget = function(root,k){

  var map = new Map()
  var traverse = function traverse(root){
    
    if ( root === null ) return false
    if ( map.has(k - root.val) ) return true
    map.set(root.val)
    return traverse(root.left) || traverse(root.right)

  }

  return traverse(root)
}


tree = [5 , 3, 6 , 2 , 4 , 7]
console.log(findTarget(tree,9))

