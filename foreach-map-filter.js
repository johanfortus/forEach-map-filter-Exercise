/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2)
    })
    return newArr
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
           newArr.push(val)
        }
    })
    return newArr
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

function showFirstAndLast(arr){
    let newArr = []
    arr.forEach(function(val){
        let vals = val.split('')
        let last = vals.length - 2
        vals.splice(1,last)
        let newVals = vals.join('')
        newArr.push(newVals)
    })
    return newArr
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let newArr = []
    arr.forEach(function(val){
        val[key] = value
    })
    return arr
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   let newStr = str.toLowerCase()
   let obj = {i:'', a:'', e:'', o:'', u:''};
   let totalA = 0
   let totalE = 0
   let totalI = 0
   let totalO = 0
   let totalU = 0
   let arr = newStr.split()
    arr.forEach(function(val){
     for(let char of val){
        if(char === 'a'){
            totalA++
        }
        else if(char === 'e'){
            totalE++
        }
        else if(char === 'i'){
            totalI++
        }
        else if(char === 'o'){
            totalO++
        }
        else if(char === 'u'){
            totalU++
        }
     }
     obj['a'] = totalA
     obj['e'] = totalE  
     obj['i'] = totalI
     obj['o'] = totalO
     obj['u'] = totalU
     if(obj['i'] === 0){
        delete obj['i']
     }  
     if(obj['a'] === 0){
        delete obj['a']
     }
     if(obj['e'] === 0){
        delete obj['e']
     }
     if(obj['o'] === 0){
        delete obj['o']
     }
     if(obj['u'] === 0){
        delete obj['u']
     }
    })
    return obj
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let doubled = arr.map(function(val){
        return val * 2
    })
    return doubled
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    let timesIndex = arr.map(function(val, i, arrays){
        return val * i
    })
    return timesIndex
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    let newArr = [];
    arr.map(function(val){
        newArr.push(val[key])
    })
    return newArr
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    let newArr = [];
    arr.map(function(val, i){
        let firstName = val['first']
        let lastName = val['last']
        let fullName = (firstName + ' ' + lastName)
        newArr.push(fullName)
    })
    return newArr
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') 
    // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    let newArr = [];
    arr.filter(function(val){
        if(val['isCatOwner']){
            newArr.push(val)
        }
    })
    return newArr
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
    let value = arr.filter(function(val){
        return val === searchValue
    })
    return value[0]
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) 
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val){
        return val[key] === searchValue;
  })[0];
}
//i had to use the solution to solve this problem

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let newArr = [];
    let lowerCased = str.toLowerCase();
    let arr = lowerCased.split('')
    arr.filter(function(val){
        for(let char of 'bcdfghjklmnpqrstvwxyz'){
            if(val.includes(char)){
                newArr.push(val)
            }
        }
        })
        return newArr.join('')
    }


/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    let newArr = [];
    arr.filter(function(val){
        if(val % 2 !== 0){
            let oddsMultiplied = val * 2
            newArr.push(oddsMultiplied)
        }
    })
    return newArr
}
