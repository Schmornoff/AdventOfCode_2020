const input = [20,9,11,0,1,2]

search(2020)
search(30000000)

function search(pos){
    let lastNumber = input[input.length-1]
    let counter = input.length
    let mem = new Map()

    for(let i = 0; i < input.length; i++)
        mem.set(input[i], i+1);
    
    while(counter < pos) {
        let newNumber;
        if(mem.has(lastNumber)) {
            newNumber = counter - mem.get(lastNumber);
        } else {
            newNumber = 0;
        }

        mem.set(lastNumber, counter);
        lastNumber = newNumber;
        counter++
    }
    console.log(lastNumber)
}