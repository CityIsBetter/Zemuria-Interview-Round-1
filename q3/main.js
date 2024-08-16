const obj1 = {
    name: "mahesh",
    age: 19
}

const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1, obj2);

obj2.age = 30;

console.log(obj1, obj2);