// function sayHello(arr, city, state) {
//     return `Hello, ${arr.join(' ')} ! Welcome to ${city}, ${state}`
// }

// function squareSum(array) {
//     let sum = 0
//     array.forEach(element => {
//         sum += element**2
//     });
//     return sum
// }

// console.log(squareSum([1,2,3]));

// function lovefunc(flower1, flower2) {
//    if((flower1 + flower2) % 2 == 0){
//     return false
//    } else return true
// }

// console.log(lovefunc(125,573))

// function DNAtoRNA(dna) {
//     let finalresult = ''
//     const u = 'U'
//     for (let letter of dna) {
//         if(letter == 'T'){
//             finalresult += u
//         } else finalresult += letter
//     }
//     return finalresult
// }

// console.log(DNAtoRNA('GCATTTT'))

// function findAverage(array) {
//     let sum = 0
//     let finalSum = 0
//     if (array.length) {
//     array.forEach(element => {
//         sum += element
//         finalSum = sum / array.length
//     });
//     return finalSum
//     } else return 0
// }

// console.log(findAverage([7,8]))

// function reverseSeq(n) {
//     let arr = []
//     if (n) {}
//     else if (arr[arr.length - 1] !== 1) {
//         n--
//         arr.push(n)
//     } else if (arr[arr.length - 1] !== 1 && arr[0] == n) return arr
// }

// console.log(reverseSeq(5))

// class Car {
//     constructor (firstArgument) {
//         this.firstArgument = firstArgument
//     }

//     getNumberOfGears() {
//         const examination = this.firstArgument.b ?? null
//         return examination
//     }
// }

// class Engine {
//     constructor (n) {
//         this.n = n
//         return n
//     }
// }

// class GearBox {
//     constructor (b) {
//         this.b = b
//         return b
//     }
// }

// const car = new Car()
// const twoCar = new Car(new Engine(new GearBox(5)))

// console.log(twoCar.getNumberOfGears());

function removeChar(str) {
  const arr = str.split('')
  console.log('arr', arr)
}

removeChar('aboba')
