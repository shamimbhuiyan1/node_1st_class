// default export madome data transferfer korar way

const errorHandler = require("./ErrorHandler.js");
//javascript error er jonno amra try and catch use korbo

async function getData() {
  try {
    // underfined.find();
    const emailError = new Error("Email already Exist !");
    throw emailError;
  } catch (error) {
    errorHandler(error);
  }
}
getData();

/* function errorHandler(error) {
    const { name, message, stack } = error;
    console.log(name, message);
    //future amra dekhar jonno othath kothai amader vul hoicilo ta check korte pari
    logger.error({
      name,
      message,
      stack,
    });
    console.log("Internal server Error !");
  } */
