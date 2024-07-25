


let nums1 = [1,2,3,0,0,0]
m = 3
let nums2 = [2,5,6]
n = 3

var merge = function(nums1,m,nums2,n){

  let k = (m + n) - 1
  let p1 = m-1
  let p2 = n-1

  while ( p2 >= 0 ){
    
    if (p1 >= 0 && nums1[p1] > nums2[p2]){
       nums1[k] = nums1[p1]
       p1 -= 1
    } else {
      nums1[k] = nums2[p2]
      p2 -= 1
    }
    k -= 1
  }

}

merge(nums1,m,nums2,n)
console.log(nums1)


