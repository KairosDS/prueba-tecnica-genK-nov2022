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


const multArr = (arr1,arr2) =>{

    let finalArr = []

    for(let i = 0; i < arr1.length; i++){

        

        for(let x = 0; x < arr2.length; x++){

            let multi = 1;
            multi = multi * arr1[i][x] * arr2[x][i]
            finalArr.push(multi)
        }
        
    }
    return finalArr;
}

let result = multArr(array1, array2)

console.log(result)



