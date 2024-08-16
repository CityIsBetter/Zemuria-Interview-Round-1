const obj = {
    _name: "String",
    _age: 20,

    get name(){
        return this._name;
    },

    set name(value){
        if (typeof value === "string"){
            this._name = value;
        } else{
            console.log("Invalid Name Type");
        }
    },

    get age(){
        return this._age;
    },

    set age(value){
        if (typeof value === "number"){
            this._age = value;
        } else{
            console.log("Invalid Age Type");
        }
    }
}

console.log(obj.name);
obj.name = "ramesh";
console.log(obj.name);
obj.name = 32;
console.log(obj.name);

console.log(obj.age);
obj.age = 10;
console.log(obj.age);
obj.age = "ramesh";
console.log(obj.age);