let s = '{[()]}'
let j = '{[(])}'
let k = '{{[[(())]]}}'


function isBalanced(s){
  let brackets = { "}":"{" , "]":"[" , ")":"(" }
  let stack = []

  for ( let x of s ){
    if ( Object.values(brackets).includes(x) ){
      stack.push(x)
    } else if ( stack[stack.length-1] === x ) {
      stack.pop()
    } else {
      return "NO"
    }
  }

  return stack.length === 0 ? "YES":"NO"
}

console.log(isBalanced(s))
console.log(isBalanced(j))
console.log(isBalanced(k))
