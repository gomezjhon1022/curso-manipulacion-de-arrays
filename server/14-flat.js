const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const matriz1 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];



const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < matriz.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log("for", newArray);

const rta = matriz1.flat(3);
console.log("flat", rta);



// aplanar matriz

const matriz2 = [
    0,
    [1,2,3],
    [4,5,[6,7,8,[9,10]]],
    [[11,12,[13,14],15],16]
];

function aplanarMatriz(matriz2){
    let array = [];
    for (element of matriz2) {
        if(Array.isArray(element)) {
            array = array.concat(aplanarMatriz(element));
        } else {
            array.push(element);
        }
    }
    return array;
}
console.log(aplanarMatriz(matriz2))