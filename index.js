// Constructor function to create a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method to greet another person
  Person.prototype.greet = function(otherPerson) {
    console.log(`Hello ${otherPerson.name}, my name is ${this.name}.`);
  };
  
  // Helper function to create a new Person object
  function createPerson(name, age) {
    return new Person(name, age);
  }
  
  // Example usage
  let person1 = createPerson("Alice", 30);
  let person2 = createPerson("Bob", 25);
  
  person1.greet(person2); // Output will be "Hello Bob, my name is Alice."
  person2.greet(person1); // Output will be "Hello Alice, my name is Bob."