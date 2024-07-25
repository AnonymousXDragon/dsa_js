
/*

  repeatidly compares and swaps two adjacent pairs of numbers until its is fully sorted
  time complexity : O(N^2)

*/

let arr = [20,40,30,50,10]


function bubbleSort(arr){
  for ( let x = 0; x < arr.length-1; x++ ){
    for ( let y = 0; y < arr.length-1; y++ ){
      if ( arr[y] > arr[y+1] ){
        let temp = arr[y]
        arr[y] = arr[y+1]
        arr[y+1] = temp
      }
    }
  }

  return arr
}



console.log(bubbleSort(arr))



