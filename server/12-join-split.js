const elements = ["Fire", "Air", "Water"];

let rtafinal = '';
const separator = "--";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === elements.length-1) {
        rtafinal = rtafinal + element;
    } else {
        rtafinal = rtafinal + element + separator;
    }
   
}
console.log("for", rtafinal);
const rta = elements.join("--");
console.log("join ", rta);

const title = "Curso de manipulación de arrays";
const rta2 = title.split(" ");
console.log("split", rta2);

const titleFinal = title.split(" ").join("-").toLowerCase();

console.log(titleFinal);