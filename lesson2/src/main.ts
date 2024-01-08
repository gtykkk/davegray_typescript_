let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
// union type
let album: string | number;

myName = 'Kim';
meaningOfLife = 42;
isLoading = true;
// any 타입은 어떤 타입이든 가능
album = 1997;
album = 'Tae Young';

const sum = (a: number, b: string) => {
    return a + b;
}

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;





