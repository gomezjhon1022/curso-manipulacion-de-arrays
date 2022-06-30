const numbers = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);

const rta2 = numbers.every(item => item <= 40);

console.log('rta2', rta2);

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 18,
    },
    {
        name: "Santiago",
        age: 13,
    }
];

const rta4= team.map(item=>item.age).every(item => item < 15);

console.log('rta4', rta4);
