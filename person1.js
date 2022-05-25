// const person1 = {
//     name: "Jamie",
//     age: 28
// }
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`${this.name} says hello!`);
  }
}
module.exports = Person;
