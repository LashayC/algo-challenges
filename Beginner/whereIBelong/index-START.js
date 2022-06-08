/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

/*
P: Just some numbers
R: Result should be an index number
E: look on the left
P: push num into the array
   sort the array ascending
   find the index of num and return it.
*/

// function whereIBelong(arr, num) {
//    // Code goes here
 

//    arr.push(num)

//    arr.sort((a,b) => a -b)
//    //console.log('fullarr', arr)
   
//    let numIndex = arr.indexOf(num)
//    //console.log('index of num in arr is:', numIndex)

//    return numIndex
// }

function whereIBelong(arr, num) {
   let assorted = arr.sort()
   for(let i = 0; i < assorted.length; i++){
    if(num <= arr[i]){
      return i
    }
   }return assorted.length
 }



module.exports = whereIBelong