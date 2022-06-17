// 4.1 함수 선언과 호출
/*
function add(a: number, b: number) {
  return a + b;
}

// 5가지 함수 선언 방법

// 1. 이름을 붙인 함수
function greet(name: string) {
  return "hello " + name;
}

// 2. 함수 표현식
let greet2 = function (name: string) {
  return "hello " + name;
};

// 3. 화살표 함수 표현식
let greet3 = (name: string) => {
  return "hello " + name;
};

// 4. 단축형 화살표 함수 표현식
let greet4 = (name: string) => "hello " + name;

// 5. 함수 생성자 => 지양
let greet5 = new Function("name", 'return "hello "+ name');

let result = add(1, 2);
console.log(result);
let result2 = greet("Crystal");
console.log(result2);

add(1);
add(1, "a");
*/

import { sign } from "crypto";

// 4.1.1 선택적 매개변수와 기본 매개변수

/* 선택적 매개변수
function log(message: string, userId?: string) {
  let time = new Date().toLocaleDateString();
  console.log(time, message, userId || "Not signed in");
}

log("Page loaded");
log("User signed in", "da763be");
*/

/* 기본 매개변수: 선호
function log(message: string, userId = "Not signed in") {
  let time = new Date().toISOString();
  console.log(time, message, userId);
}

log("User clicked on a button", "da763be");
log("User signed out");
*/

/* 기본 매개변수의 타입 명시
type Context = {
  appId?: string;
  userId?: string;
};

function log(message: string, context: Context = {}) {
  let time = new Date().toISOString();
  console.log(time, message, context.userId);
}

log("User clicked on a button", { userId: "da763be" });
log("User signed out");
*/

// 4.1.2 나머지 매개변수

/* 여러 개의 인수를 목록(배열)으로 전달
function sum(numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum([1, 2, 3]); // 6
*/

/* JS런타임에 함수에 자동으로 arguments가 정의되어 오류없이 실행
// 하지만 TS에선 에러 발생
function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}

sumVariadic(1, 2, 3);
*/

/* 나머지 매개변수(rest parameters) 사용
function sumVariadicSafe(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumVariadicSafe(1, 2, 3));
*/

/* 4.1.3 call, apply, bind

function add(a: number, b: number) {
  return a + b;
}

console.log(add(10, 20));
console.log(add.apply(null, [10, 20]));
console.log(add.call(null, 10, 20));
console.log(add.bind(null, 10, 20)());
*/

// 4.1.4 this의 타입

let x = {
  a() {
    return this;
  },
};
x.a();
let a = x.a;
a();

function fancyDate() {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
fancyDate.call(new Date());
