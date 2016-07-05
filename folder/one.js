// module.exports.myNumber = 42;
// module.exports.myMessage = 'Hello!';

// these do the same thing
module.exports = {
  myNumber : 42,
  myMessage : 'Node is so cool!',
  aNewFunctionName: sayHello
}

function sayHello() {
  console.log('Hello!');
}
