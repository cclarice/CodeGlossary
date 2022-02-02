const arrowFunction = (a, b) => {
    return (a + b)
}

function regularFunction (a, b) {
    return (a + b)
}

console.log(arrowFunction(5, 10))
console.log(regularFunction(-5, -10))
console.log(regularFunction(arrowFunction(5, 10), -10))

const object = {
    field: 5
}

console.log(typeof arrowFunction)
console.log(typeof regularFunction)
console.log(typeof 5.00)
console.log(typeof '5')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof object)
console.log(typeof object.field)