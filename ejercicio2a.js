// Ejercicio 2-a

const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
  ];
  
  const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
  ];


// files from array1
let file1 = array1[0];
let file2 = array1[1];
let file3 = array1[2];

//collums from array2
let collum1 = [];
let collum2 = [];
let collum3 = [];

// Extraction of the collums from array2
const collumsArr = (arr) => {

    for(let i = 0; i < arr.length; i++){
        collum1.push(arr[i][0]);
        collum2.push(arr[i][1]);
        collum3.push(arr[i][2]);
    }
};

collumsArr(array2)

// Multiply files from array1 with collums from array2
const fileColumResult = (file, collum) => {
    
    let result = 1

    file.forEach(e => {
        result = result * e
    });

    collum.forEach(e => {
        result = result * e
    });

    return result;
};

// Final solution
let result = [];

// Pushing results to Final solution
result.push(fileColumResult(file1, collum1));
result.push(fileColumResult(file2, collum2));
result.push(fileColumResult(file3, collum3));

// Shows final solution in console
console.log(result)

