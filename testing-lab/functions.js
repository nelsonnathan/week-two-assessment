module.exports = {
    returnTwo: () => {
        return 2
    },
    greeting: name => {
        return `Hello, ${name}.`
    },
    add: (num1, num2) => {
        return num1 + num2
    }, 
    subtract: (num1, num2) => {
        return num1 - num2
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    divide: (num1, num2) => {
        return num1 / num2
    },
    Arrlength: Arr => {
        for (let i=0; i<4; i++) {
            if (Arr.length < 4) {
                Arr.push(i)
            }
        }
        return Arr
    }
}