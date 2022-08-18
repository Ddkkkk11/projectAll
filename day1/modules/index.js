//es6的模块功能主要有两个命令构成 export 和import
//export作用规定模块的对外接口  import用于输入其他模块提供的功能


//一个模块就是一个独立的文件
// export const name = "xdd";
// export const age = 20;
// export const gender = "男";
// export function sayName() {
//     return "name";
// }
// function sayName() {
//     return "name";
// }
// export {
//     sayName
// }

//常用写法
const name = "xdd";
const age = 20;
const gender = "男";

function sayName() {
    return "name";
}
export {
    name,
    age,
    gender,
    sayName
}
// const obj = {
//     foo: "foo"
// }
class Person {
    constructor() {

    }
    sayAge() {
        console.log("16");
    }

}
export default Person;