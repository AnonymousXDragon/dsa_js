
/*

  in-place: memory efficient
  stable: sequence won't change after sorting
  time complexity: O(n^2)
  cons: time consuming
  pros: [ memory efficient , stable ]

*/

let arr = [10,40,50,20,30];


function insertionSort(arr){

  outer: for( let x = 1; x < arr.length; x++ ) {
    let key = arr[x]
    let j = x - 1

    while ( j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j]
      j -= 1
    }

    arr[j + 1] = key
    
  }

  return arr
}


console.log(insertionSort(arr))





