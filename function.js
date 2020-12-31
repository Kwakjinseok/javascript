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

const ellie = { name: 'ellie'}; 
changename(ellie);
console.log(ellie);
