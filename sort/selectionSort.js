
/*
  in-place: memeory efficient
  repeatedly finds smallest element and swaps it until array is fully sorted
  time complexity: O(N^2)
  drawbacks: time consuming

*/



let arr = [20,40,10,30,25,50]

function selectionSort(arr){
  
  outer: for ( let x = 0; x < arr.length - 1; x++ ){
    let p  = x;
    
    inner: for ( let y = x + 1; y < arr.length-1; y++) {
      if ( arr[y] < arr[p] ){
        p = y
      }
    }
    
    let temp = arr[x]
    arr[x] = arr[p]
    arr[p] = temp
  }  

  return arr
}

console.log(selectionSort(arr))
