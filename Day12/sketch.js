console.time()
const fs = require('fs');
const path = require('path');

//          N   E   S   W
let dir = [ 0 , 0 , 0 , 0]
let wp  = [ 1 , 10, 0 , 0]
let ship =[ 0 , 0 , 0 , 0]

let current = 1 //East
let dic = {N:0,E:1,S:2,W:3}

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8').split("\n")

for(let i = 0; i < input.length; i++){
  n = parseInt(input[i].substring(1))
  switch(input[i][0]){
    case "N":
    case "E":
    case "S":
    case "W":
      dir[dic[input[i][0]]] += n
      wp[dic[input[i][0]]] += n
      break
    case "R":
      current += n/90
      if(current > 3)current -= 4

      for(let i = 0; i < (n/90); i++){
          newWP = wp.slice()
          newWP[0] = wp[3]
          newWP[1] = wp[0]
          newWP[2] = wp[1]
          newWP[3] = wp[2]
          wp = newWP.slice()
      }
      break
    case "L":
      current -= n/90
      if(current < 0)current += 4

      for(let i = 0; i < (n/90); i++){
          newWP = wp.slice()
          newWP[0] = wp[1]
          newWP[1] = wp[2]
          newWP[2] = wp[3]
          newWP[3] = wp[0]
          wp = newWP.slice()
      }
      break
    case "F":
      dir[current] += n
      for(let j = 0; j <= 3; j++)
          ship[j] += wp[j]*n
      break
  }
}

console.log("1:",Math.abs(dir[0]-dir[2]) + Math.abs(dir[1]-dir[3]), "| 2:",Math.abs(ship[0]-ship[2]) + Math.abs(ship[1]-ship[3]))
console.timeEnd()