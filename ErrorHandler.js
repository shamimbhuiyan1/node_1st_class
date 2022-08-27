console.log(module);
function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(name, message);
  //future amra dekhar jonno othath kothai amader vul hoicilo ta check korte pari
  /* logger.error({
      name,
      message,
      stack,
    }); */
  /* console.log("Internal server Error !"); */
}
// module.exports = errorHandler;

function two() {
  console.log("two");
}
module.exports.errorHandler = errorHandler;
module.exports.two = two;

console.log(object);
