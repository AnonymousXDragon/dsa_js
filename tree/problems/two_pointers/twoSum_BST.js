function TreeNode(val,left,right){
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? 0 : val)
  this.right = (right === undefined ? 0 : val)
}


function inorder(root,list){
   if ( root === null ) return null
   inorder(root,list)
   list.push(root.val)
   inorder(root,list)
}

var findTarget = function traverse(root,k){
  var list = []
  inorder(root,list)

  let left = 0
  let right = list.length - 1
  
  while(left < right){
    let total = list[left] + list[right]
    if ( total === k ){
      return true
    } else if ( total > k ) {
      right -= 1
    } else {
      left -= 1
    }
  }
  
}
