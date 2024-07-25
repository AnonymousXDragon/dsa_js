

function sum(h){
  return h.reduce((acc,val) => {
    return acc + val
  },0)
}


function balanceStacks(h1,h2,h3){
  
  let s1 = sum(h1)
  let s2 = sum(h2)
  let s3 = sum(h3)

  /* given operation is like queue: like fifo ; we convert it to lifo  */
  h1 = h1.reverse()
  h2 = h2.reverse()
  h3 = h3.reverse()

  while (s1 != s2 || s2 != s3){
    let maxNum = Math.max(...[s1,s2,s3])
    if ( s1 === maxNum) {
      s1 -= h1.pop()
    } else if ( s2 === maxNum ){
      s2 -= h2.pop()
    } else {
      s3 -= h2.pop()
    }
  }
  return s1
}


let h1 = [1,2,1,1]
let h2 = [1,1,2]
let h3 = [1,1]

console.log(balanceStacks(h1,h2,h3))
