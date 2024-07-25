/*

 1 - Push the element x into the stack.
 2 - Delete the element present at the top of the stack.
 3 - Print the maximum element in the stack.

*/

/*
 sample input

 10
 1 97
 2
 1 26
 1 20
 2
 3
 1 91
 3

*/

function getMax(operations) {
  let temp = []
  let maxStore = []

  for (let x of operations){
    
    if ( x.includes(1) && x.split(' ').length === 2){
      temp.push(parseInt(x.split(' ')[1]))
    }

    if (x == 2){
      temp.pop()
    }

    if ( x == 3 ){
      maxStore.push(Math.max(...temp))
    }
    
  }

  return maxStore
}


