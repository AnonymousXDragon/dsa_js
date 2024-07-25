// MAXIMUM PRODUCT DIFFERENCE BETWEEN TWO PAIRS 



let nums = [5,6,2,7,4]


var maxProductDifference = function(nums){

  let maxPair = []
  let minPair = []
  let len = nums.length - 1

  for( let x = 0; x < len; x++) {
    
    if ( maxPair.length < 2 ){
      
      let max = Math.max(...nums)
      maxPair.push(max)
      nums[nums.indexOf(max)] = null
      nums = nums.filter( num => num != null)
  
    } 

    if ( minPair.length < 2 ){
      let min = Math.min(...nums)
      minPair.push(min)
      nums[nums.indexOf(min)] = null
      nums = nums.filter( num => num != null )
    }
     
  }

  let p1 = maxPair.reduce(( acc , val ) => acc * val , 1 )
  let p2 = minPair.reduce(( acc, val ) => acc * val,1)

  return p1 - p2
  
}

console.log(maxProductDifference(nums))
