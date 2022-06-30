const items = [1, 3, 2, 3,4,4,4,5,5,5,5,5];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] =1;
    } else {
        obj[item] = obj[item] +1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
    {
        name: "NIcol",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "high",
    },
    {
        name: "Ana",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "high",
    },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] =1;
    } else {
        obj[item] = obj[item] +1;
    }
    return obj;
}, {});

console.log(rta1);

const num = [1,5,9,4,8,6,2,5,9,6,7,4,2,3,,1,1,2,5,2,7];

const rta3 = num.reduce((obj, value) => {
    if (value<5) obj["1-4"] +=1;    
    else if (value<9) obj["5-8"] += 1;
    else obj["9-10"] += 1;
    return obj;
}, {
    "1-4": 0,
    "5-8":0,
    "9-10": 0,
});
console.log(rta3);