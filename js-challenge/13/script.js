// Function constructor
let Person = function(name, age){
  this.name=name;
  this.age=age;
}
let john = new Person('John', 34);
// console.log(john);

// Adding a property and a method to Person function constructor
Person.prototype.medals = 7;
Person.prototype.retirement = function(){
  return 65 - this.age;
}
document.getElementById('result').innerHTML = john.retirement();
