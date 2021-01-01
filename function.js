'use strict'

//funtion - 프로그램을 구성하는 기본적인 빌딩블럭
// 서브프로그램으로도 불리며 여러번 재사용이 가능
// 한가지의 테스크나 값을 계산하기 위해 사용됨

//1. 자바스크립트에서 funtion을 정의하는 방법

//funtion의 기본정의
//function name(param1, param2) { body... return;}

//one function === one thing - 한가지의 함수는 한가지의 기능만을 해야함
//function의 이름은 : dosomething, command , verb와 같이 작동이나 동작에 대한 네이밍으로!
//function은 object type

function printhello() {
    console.log('hello');
}

printhello()

function log(message) {
    console.log(message);
}
log('heㅎㅎllo@')

// 2. parameters - 매개변수
function changename(obja) { //이름을 바꾸는 기능을 설정
    obja.name = 'coder' //obja 이름이 ='coder'로 출력되게 
}

const ellie = { name: 'ellie'};   //ellie라는 오브젝트 안의 레퍼런스는 ellie < immutabe   >> 그 안에 있는 name value는 바뀔 수 있음 
changename(ellie);
console.log(ellie);


// 3. default parameters (added in es6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi!');

// 4. rest parameters (added in es6)   ********
function printall(...omg) {
    for (let i = 0; i < omg.length; i++) {
        console.log(omg [i]);
    }

    
}

printall('dream', 'coding', 'ellie', 'omg');

// 5. local scope - 안에서는 밖을 볼 수 있지만, 밖에서는 안이 보이지 않는다.

let globalmessage = 'global'; //global variable
function printmessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalmessage); 
}
printmessage();

// 6. return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//return 값의 기본은 return undefined이며 기본값임

// 7. early return, early exit
// bad
function upgradeuser(user) {
    if (user.point > 10) {

    }
}

function upgradeuser(user) {
    if (user.point <= 10) {
        return;
    }
}

// 8. function expression
// first-class function
// 1. function은 다른 변수에 할당이 됨
// 2. function에 Parameters로 전달이 됨
// 3. return값으로도 return이 됨

const print = function () { //anonymous function
    console.log ('print');
};
print();
const printagain = print;
printagain();
const sumagain = sum;
console.log(sumagain(4, 9));
