const a1 =["one", 2, true]
const a2 =[["one",'two'],[1,2,3]] //non homogeneous array

//non homogeneous array containing array
const a3 =[
    {name:"aj", no:39},
    [
        {name:"tbj", no:500},
        {name:"pkd", no:50032}
    ]
]
console.log(a3[1][0].no) //500


const arr = [3,4,5,6]
//push - returns len after inserting array element
console.log(arr.push(7)) //(5) [3,4,5,6,7]
console.log(arr.pop())//(4)[3,4,5,6]


/** SHIFT AND UNSHIFT METHOD */

console.log(arr.unshift(1)) //return length and add element at beginning
console.log(arr.shift()) //removes first array element


/**     slice() and splice()     */

//concat()
console.log(arr.concat(1,2,40,42)) //returns original array with new elements

//slice()
console.log(arr.slice(2)) //removes elements until second index
console.log(arr.slice(2,4))
console.log(arr.slice(-1))//start from end of array

//splice()
//add or remove array element at any position

const a=[1,4,5]
console.log(arr.splice(1,0,3,4)) // (5)[1,2,3,4,5]



// copyWithin() and fill()
//arr.copyWithin(target, start,end)

const xarr = [1,2,3,4,5]
xarr.copyWithin(1,2,3) //start from 1 index, copying from 2 index and copying on 3rd index
console.log(arr) // (1,3,3,4,5)

xarr.copyWithin(2,0) //start from 2 index, copying from 0 index
console.log(arr) // (1,2,1,2,3)

//fill()
//xarr.fill(value,start,end)
