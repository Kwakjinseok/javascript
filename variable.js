'use strict';


// 1. 변수 let (es6에서  추가)

let globalname = '우리나라';

{ //중괄호 = block의 개념으로 block밖에서는 안쪽으로 내용에 접근 할 수 없음
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}

//
console.log(name); //block으로 인해 변수값이 정해져 있지 않아 콘솔에 출력되지 않음

console.log(globalname); //globalname은 block 안 밖에서 둘다 사용가능



//var은 let이전의 변수 명령어(사용되지 않음) - 변수라는 설정을 하지 않아도 변수값 설정이 가능하기 떄문에
//var hoisting - 어느 순서에 선언했든 상관없이 선언을 가장 위로 끌어올려 줌
//var 는 block scope가 적용되지 않음

// {
// age = 4;
// var age;
// }
// console.log(age)

// 2. constant - 한 번 할당하면 값이 절대 바뀌지 않음 
// favor immutable data type always for a few reasons:
// - security 
// - thread safety
// - reduce human mistakes 

//정리하면 mutable = let/  immutable = constant


//3. variable types -변수 타입 
//primative, single item - 더 작은단위로 나눠질 수 없는 한가지 아이템
//object, box container - 여러가지 아이템들을 한가지 컨테이너로 관리
//funtion, first-class function - java script에서는 기능도 변수로 설정이 가능



//3-1 number
const count = 17; //자바스크립트에서는 정수이든 소수점이든 number라는 타입으로 설정됨
console.log(`value: ${count}, type: ${typeof count}`);

const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nan = 'not a number' / 2
console.log(infinity);
console.log(negativeinfinity);
console.log(nan);


const bigint = 9999999999335676579163956179356791563796139n;
console.log(bigint)

//3-2 string     // `를 사용하는 이유는 텍스트 안의 스페이스 공간이 그대로 출력 되고 편리함`
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(greeting);
const hellobob = `hi ${brendan}`; // = const hellobob = 'hi' + brendan;
console.log(hellobob);



//3-3 boolean
//false : 0, null, undefined, nan, ""
//true : any other value 
const canread = true;
const test = 3 < 1; //false
console.log(`value: ${canread}, type: ${typeof canread}`);
console.log(`value: ${test}, type ${typeof test}`);

//3-4 null - 아무것도 아니라고 지정
let nothing = null; 
console.log(`value: ${nothing}, type ${typeof nothing}`);

//3-5 undefined - 선언은 됐지만 값이 정해지지 않음
let x;
console.log(`value: ${x}, type: ${typeof x} `);

//3-6 symbol - 고유한 식별자가 필요할 때 사용
// const symbol1 = symbol('id');   // symbol1 과 symbol2는 같은 id이지만 다른 symbol
// const symbol2 = symbol('id');
// console.log(symbol1 === symbol2);

//4 dynamic typing: dynamically typed language - 역동적으로 변할 수 있는 변수 타입때문에 런타임 오류가 잘 날 수 있음
let text = 'string';
console.log(text.charAt(0))
console.log(`value: ${text}, type ${typeof text}`); // 변수가 스트링 타입
text = 1;
console.log(`value: ${text}, type ${typeof text}`); // 변수가 넘버 타입 
text = '7' + 5;
console.log(`value: ${text}, type ${typeof text}`); // 변수에 스트링가 넘버가 같이 있기떄문에 컴퓨터가 하나의 스트링타입으로 합쳐버림
text = '8' / '2';
console.log(`value: ${text}, type ${typeof text}`); // 변수에 스트링이지만 숫자로 기입된 스트링의 나누기 값을 주었기 떄문에, 숫자로 인식해서 출력


//5 object type
const ellie = {name : 'teacher', age : '20'}; //object로 설정한 컨테이너는 바꿀 수 없지만 그 안의 내용은 바꿀 수 있음
console.log(ellie);
ellie.age = 25;
console.log(ellie);