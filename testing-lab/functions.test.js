const {  returnTwo, greeting, add, subtract, multiply, divide, Arrlength } = require('./functions.js')


test('should return the number 2', () => {
    expect(returnTwo()).toBe(2)
})



test('Should return "Hello, James" and "Hello, Jill" ', () => {
    expect(greeting('James')).toBe(`Hello, James.`)
    expect(greeting('Jill')).toBe(`Hello, Jill.`)
})


test('should add two numbers', () => {
    expect(add(7, 29)).toBe(36)
})

it('returns arr of 4 length', () => {
    expect(Arrlength(['Black', 1])).toHaveLength(4)
})

describe("Math functions", () => {
    test('returns the first number added to the second', () => {
        expect(add(10,20)).toBe(30)
    })
    test('returns the first number multiplied by the second', () => {
        expect(multiply(1,2)).toBe(2)
    })

    test('returns the first number divided by the second', () => {
        expect(divide(180, 18)).toBe(10)
    })

    test('returns second number subtracted from the first', () => {
        expect(subtract(3, 1)).toBe(2)
    })
})
