

console.time()
function find(arr,target){
  let left = 0;
  let right = arr.length - 1;
  for (let x = 0; x < arr.length; x++) {
    let total = arr[left] + arr[right]
    if ( total === target ){
      return [left+1,right+1]
    } else if ( total > target ){
      right -= 1
    } else {
      left +=1
    }
  }
}
console.timeEnd()


let arr = [2,7,5,1]
console.log(find(arr,8))
