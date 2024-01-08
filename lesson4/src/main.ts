// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitaris = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber;

// Literal types
// 안에 들어갈 값이 정해져 있는 타입
let myName: 'Dave'
// myName = 'John'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'
// userName = 'Rachel'


// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Heelloooo!')
logMsg(add(2, 4))

let subtract = function(c: number, d: number):
number {
    return c - d
}

type mathFunction = (a: number, b:number) => number
// interface mathFunction {
//     (a: number, b:number): number
// }

let multiply: mathFunction = function(c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3));

// Rest Parameters
// rest parameter는 배열형태로 저장됨
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while(true) {
        i++;
        if(i > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if(typeof value == 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This shoud never happen!')
}
