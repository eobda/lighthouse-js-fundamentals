const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}

sayHelloToConsole("Caliban");
sayHelloToConsole("Miranda");
sayHelloToConsole("Ferdinand");

const returnSayHello = function(name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("John");
console.log(greeting);