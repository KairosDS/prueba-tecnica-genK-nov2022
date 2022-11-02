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

// Result in an array of multiply files from array1 and collums from array2
let result = [];

// Pushing results to Final solution
result.push(fileColumResult(file1, collum1));
result.push(fileColumResult(file2, collum2));
result.push(fileColumResult(file3, collum3));

let stringResult = result.join("")

// function for get the Final result
const stringSeparator = (str) =>{

    // Separate the string every chacarter and create an Array
    let arrSepString = str.match(/.{1,3}/g);

    arrSepString.forEach(c =>{
        if( c.length > 2){
            finalSolution.push(c)
            
        }else if( c.length == 2){
            finalSolution.push("0"+ c)
        }else{
            finalSolution.push("00" + c)
        }
    } )
}

let finalSolution = []

stringSeparator(stringResult)

// Showing the final answer in console
console.log(finalSolution)






