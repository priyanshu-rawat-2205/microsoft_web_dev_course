setTimeout(
    function() { //anonymous function used for callback
        console.log("Hello! from simple anonymous function");
    },
    3000
)

setTimeout(
    () => { //arrow function (way of creating anonymous function)
        console.log("Hello! from arrow function")
    },
    3000
)