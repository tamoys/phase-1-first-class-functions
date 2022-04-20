function receivesAFunction(callback) {
     return callback()
}
const returnsANamedFunction = function() {
    return function namedFunction() {
        console.log("this is a named function")
    }
}

const returnsAnAnonymousFunction = function() {
    return function() {
        console.log("this is an anonymous function")}
    }