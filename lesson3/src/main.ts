let stringArr = ['one', 'hey', 'Kim'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('Park');

guitars[0] = 1994;
guitars.unshift('Jim');
// console.log(guitars);

guitars = stringArr;
mixedData = guitars;

let test = [];
let bands: string[] = [];

bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];
let mixed = ['John', 1, false];

mixed = myTuple;
myTuple[1] = 42;
// 튜플은 타입이 정해져있지만, 유니온타입은 올지 안올지 모르기 때문에 불가
// myTuple = mixed;

// Objects
let myObj: object
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
    prop1: 'Kim',
    prop2: true
}

exampleObj.prop1 = 'Park';

interface Guitaris {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitaris = {
    name: 'Eddie',
    active: false,
    albums: [1994, 5150, 'OU812']
}

let jp: Guitaris = {
    // name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitaris) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }

    return 'Hello!'
}

console.log(greetGuitarist(jp));

// Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);


