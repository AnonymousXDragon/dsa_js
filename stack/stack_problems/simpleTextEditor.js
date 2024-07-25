
function processData(input){
  let inputs = input.split('\n')
  console.log("input",inputs)
  let s = ''
  let states = []

  let operations = {
    "1": function(x){
      s += x
      states.push(s)
    },
    "2": function(index){
        s = s.slice(index,s.length-1)
    },
    "3": function(index){
      console.log(s[index-1])
    },
    "4": function(){
      s = states.pop()
    }
  }
  
  for (let x of inputs){
    let [num,data] = x.split(' ')
    operations[num](data)
  }
}




let input = 
`1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`

processData(input)
