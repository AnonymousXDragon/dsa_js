
/*
  *Q

 There are n concert tickets available, each with a certain price. Then, m customers arrive, one after another.
 Each customer announces the maximum price they are willing to pay for a ticket, and after this, 
 they will get a ticket with the nearest possible price such that it does not exceed the maximum price.

*/

// time limit : 1.00s

/**
  * function to sell n tickets to m customers without exceeding maximum price that they are willing to.

  @param {Array} tickets
  @param {Array} price
  @return {string} max price

*/


console.time()
function sellTickets(tickets,price) {
  for (let x = 0; x < price.length; x++){
    let is_there = []
    for(let y=tickets.length; y >= 0; y--){
      if ( tickets[y] <= price[x] ){
        is_there.push(true)
        console.log(tickets[y])
        tickets[y] = null
        break
      } else {
        is_there.push(false)
      }
    }
    tickets = tickets.filter((x) => x != null)
    is_there.every((x) => x === false) ? console.log(-1) : ''
  }
}

let tickets = [5,3,7,8,5]
let maximum = [4,8,3]

console.log(sellTickets(tickets.sort(),maximum))
console.timeEnd()
