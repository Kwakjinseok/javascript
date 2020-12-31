'use strict'
// 1.string concatenation - 문자연결
console.log('my' + 'cat');
console.log('1' + 2);
console.log('1' - '1')
console.log('js' - 'j') //nan
console.log(`string literals = 1 + 2 = ${1 + 2}`); //literal = 문자그대로의
// `string literals: 변수값을 계산해서 string으로 포함해서 출력하며 괄호안에서 띄어쓰기나 특수기호가 출력됨

// console.log('ellie\'s \n\tbook' )


// 2.numeric operators - 숫자연산자
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 / 0); //infinity
console.log(-1 / 0); //-infinity
console.log('진석' / 0); //non
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. increment and decrement operators
let counter = 2;
const preincrement = ++counter;
console.log(preincrement) //  = counter = counter + 1; preincrement = counter;
console.log(`preincrement: ${preincrement}, counter: ${counter}`);
const postincrement = counter++;
console.log(`postincremen: ${postincrement}, counter: ${counter}`); //post는 변수값을 먼저 변수에 쥐어주고 그 이후에 increment or decrement

const predecrement = --counter; // counter가 현재 4이기 떄문에 predecrement , counter 모두 3이 된다
console.log(`predecrement: ${predecrement}, counter: ${counter}`);
const postdecrement = counter--; // counter가 현재 3이며, 먼저 postdecrement에 counter를 쥐어주기 떄문에 postdecrement는 그대로 3, 그리고 counter만 2가 된다
console.log(`postdecrement: ${postdecrement}, counter: ${counter}`);

// 4. assignment operators

let x = 3;
let y = 6;

x += y; // x = x + y;
x += x;
y -= x;
x **= 2;  //

console.log(x);
console.log(y);

// 5. comparison operators

console.log(10 <= 6);
console.log(10*4 < 500);

// 6. logical operators - 논리 연산자 : ||(or) , &&(and), !(not)
const value1 = false; //false
const value2 = 4 < 2; //false

// ||(or)
console.log(`or: ${value1 || value2 || check()}`); //중요한 점은 or 연산자는 하나라도 트루이면 트루라고 체크가 됨, 그래서 연산이 큰 함수등은 뒤에 배치를 해서 빠른 연산처리

// &&(and)
console.log(`and: ${value1 && value2 && check()}`); //마찬가지



function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('gg');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. equality operators - 동등한 연산자
const string = '1'
const number = 1

console.log(string == number);  // ==는 loose equality 로서, type이 다르더라도 안에 있는 설정값이 같다고 추측이 되면 true로 출력
console.log(string != number);

console.log(string === number); // ===는 strict eqaulity로서, type가 다르면 false로 출력
console.log(string !== number);

//object와 접목시켜서 공부
//const kjs의 각각 설정된 컨테이너가 다름을 기억
const kjs = { job: 'programmer' , age: '20'}; // reference in kjs
const kjs2 = { job: 'singer' , age: '27'}; // reference in kjs2
const kjs3 = kjs // same reference in kjs
console.log(kjs == kjs2); //false
console.log(kjs === kjs2); //false
console.log(kjs === kjs3); //ture


//quiz
console.log(0 == false); //true
console.log(0 === false); //false 
console.log('' == false); //true
console.log('' === false); //false 
console.log(null == undefined); //true
console.log(null === undefined); //false

// 8. if operators - if 연산자  (만약 이 값이면 이렇게 작동해~)
//if, else if, else


const name = 'kwak';
if (name === 'kwak') {
    console.log(`welcome kwak, can you solve it? ${1+5} + ${6-3} = ?`);
} else if (name === 'mirjam') {
    console.log(`welcome mirjam, can you solve it? ${1+5} + ${6-3} = ?`);
} else {
    console.log('unkwnon');
}

// 9. ternary operator: ? 삼항연산자 컨디션 체크후 뒤에 설정값을 출력
console.log(name==='mirjam' ? 'yes' : 'no');
console.log(name==='kwak' ? 'of course' : 'nope')

// 10. switch 
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'chrome' :
    case 'firefox' :
        console.log ('i love you');
        break;
    default :
        console.log ('same all!');
        break
}

const whoisbest = 'kwak'
if ( whoisbest === 'kwak') {
    console.log('text = hello jinseok');
} else if ( whoisbest === 'mirjam'); {
    console.log('text = hello mirjam');
}

const whoisbest2 = 'kwak';
switch (whoisbest2) {
    case 'kwak' :
        console.log('hello jinseok');
        break
    case 'mirjam' :
    case 'mom' :
        console.log('hello girls');
        break
}

console.log(whoisbest2 === 'kwak' ? 'yes' : 'no');

// 11. while loops 반복문 - false가 나올 때 까지 반복, 조건문이 맞을때 블록을 실행
let i = 10;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

let i2 = 5;
while (i2 < 10) {
    console.log(`i2 = ${i2}`);
    i2++
}

// 12. do while loop 반복문 - 블록 안을 먼저 실행하고 싶을 떄
do {
    console.log(`do while: ${i}`);
    i--;
}   while (i > 0);

// 13. for loop 반복문 (begin설정; condition 조건설정 ; step조건이 안 맞을 떄 까지 출력)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 5; i > 0; i--) { // 기존의 변수를 사용할 수도 있고 괄호안에 새로운 변수를 만들어서 사용할 수도 있음 
    console.log(`for: ${i}`)
}

// 14. nested loop - 중첩 반복문

for (let i = 10; i <20; i++) {
    for (let d = 10; d > 0; d--) {
    console.log(`nested loop for: ${i}, ${d}`);
    }
}



// 15. quiz2 - loop안에서는 break, continue같은 키워드로 loop를 끝낼 수 있음
//break - loop를 끝내는것 , continue - continue적용값만 스킵

//q1 . 숫자 0부터 10까지 짝수만 출력하는 것을 continue를 통해 코딩
for (i = 0; i < 11; i++) {
    if (i % 2 !==  0) {
        continue;
    } console.log(`i= ${i}`);
}



//q2.  숫자 0부터 10까지를 looping 하되, 숫자 8에서 멈춤
for (i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    } console.log(`i = ${i}`);
}