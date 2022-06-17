/* 3.1 타입을 이야기하다
function squareOf(n: number) {
  return n * n;
}
squareOf(2);
squareOf("z");
*/

import { type } from "os";

// 3.2 타입의 가나다

/* 3.2.1 any
let a: any = 666;
let b: any = ["danger"];
let c = a + b;
*/

/* 3.2.2 unknown
let a: unknown = 30;
let b = a === 123;
let c = a + 10;
if (typeof a === "number") {
  let d = a + 10;
}
*/

/* 3.2.3 boolean
let a = true;
var b = false;
const c = true;
let d: boolean = true;
let e: true = true;
let f: true = false;
*/

/* 3.2.4 number
let a = 1234;
var b = Infinity * 0.1;
const c = 5678;
let d = a < b;
let e: number = 100;
let f: 26.218 = 26.218;
let g: 26.218 = 10;
*/

// 3.2.5 bigint => 컴파일 대상이 ES2020이상이어야 함

/* 3.2.6 string
let a = "hello";
var b = "billy";
const c = "!";
let d = a + " " + b + c;
let e: string = "zoom";
let f: "john" = "john";
let g: "john" = "zoe";
*/

/* 3.2.7 symbol
let a = Symbol("a");
let b: symbol = Symbol("b");
var c = a === b;
let d = a + "x";

const e = Symbol("e");
const f: unique symbol = Symbol("f");
let g: unique symbol = Symbol("f");

let h = e === e;
let i = e === f;
*/

// 3.2.8 객체

/*
let a: object = {
  b: "x",
};

a.b
*/

/*
let a = {
  b: "x",
};
a.b;

let b = {
  c: {
    d: "f",
  },
};
*/
/*
let a: { b: number } = {
  b: 12,
};
const a1: { b: number } = {
  b: 12,
};

let c: {
  firstName: string;
  lastName: string;
} = {
  firstName: "john",
  lastName: "barrowman",
};

class Person {
  constructor(public firstName: string, public lastName: string) {}
}

c = new Person("matt", "smith");
*/
/*
let a: { b: number };
a = {};

a = {
  b: 1,
  c: 2,
};
*/

/*
let a: {
  b: number;
  c?: string;
  [key: number]: boolean;
};

a = { b: 1 };
a = { b: 1, c: undefined };
a = { b: 1, c: "d" };
a = { b: 1, 10: true };
a = { b: 1, 10: true, 20: false };
a = { 10: true };
a = { b: 1, 33: "red" };

// index signature
let airplaneSeatingAssignments: {
  [seatNumber: string]: string;
} = {
  "34D": "Boris Cherny",
  "34E": "Bill Gates",
};
*/

/*
let user: {
  readonly firstName: string;
} = {
  firstName: "abby",
};
user.firstName;
user.firstName = "abbey with an e";
*/

let danger: {};
danger = {};
danger = { x: 1 };
danger = [];
danger = 2;

// 3.2.9

// 타입 별칭
type Age = number;
type Person = {
  name: string;
  age: Age;
};

/*
let age: Age = 55;
let driver: Person = {
  name: "James May",
  age: age,
};
*/
/*
let age = 55;
let driver: Person = {
  name: "James May",
  age: age,
};

type Color = "red";
type Color = "blue";
*/
/*
type Color = "red";

let x = Math.random() < 0.5;

if (x) {
  type Color = "blue";
  let b: Color = "blue";
} else {
  let c: Color = "red";
}
*/

/* 유니온(|)과 인터섹션(&) 타입

type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

// Cat
let a: CatOrDogOrBoth = {
  name: "Bonkers",
  purrs: true,
};

// Dog
a = {
  name: "Domino",
  barks: true,
  wags: true,
};

// Both
a = {
  name: "Donkers",
  barks: true,
  purrs: true,
  wags: true,
};

// intersection(&)
let b: CatAndDog = {
  name: "Domino",
  barks: true,
  purrs: true,
  wags: true,
};
*/

/* 3.2.10 배열
let a = [1, 2, 3];
var b = ["a", "b"];
let c: string[] = ["a"];

let d = [1, "a"];
d.map((_) => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  return _.toUpperCase();
});

const e = [2, "b"];

let f = ["red"];
f.push("blue");
f.push(true);

let g = [];
g.push(1);
g.push("red");
function buildArray() {
  let a = [];
  a.push(1);
  a.push("x");
  return a;
}
let myArray = buildArray();
myArray.push(true);

let h: number[] = [];
h.push(1);
h.push("red");
*/

/* 3.2.11 튜플
// 순수 배열에 비해 안전성을 높일 수 있음

let a: [number] = [1];
// [이름, 성씨, 생년,] 튜플
let b: [string, string, number] = ["malcolm", "gladwell", 1963];
b = ["queen", "elizabeth", "ii", 1926];

// 방향에 따라 다른 값을 갖는 기차 요금
let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];
// 다음과 같음
let moreTrainFares: ([number] | [number, number])[] = [
  [3.75],
  [8.25, 7.7],
  [10.5],
];

// 최소 1개의 요소를 갖는 string 배열
let friends: [string, ...string[]] = ["Sara", "Tail", "Chloe", "Claire"];
// 이형 배열
let list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

// 읽기 전용 배열과 튜플
let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);
let three = bs[2];
as[4] = 5;
as.push(6);

type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string[]>;

type D = readonly [number, string];
type E = Readonly<[number, string]>;
*/

/* 3.2.12 null, undefined, void, never

// (a) number 또는 null을 반환하는 함수
function a(x: number) {
  if (x < 10) {
    return x;
  }
  return null;
}

// (b) undefined를 반환하는 함수
function b() {
  return undefined;
}

// (c) void를 반환하는 함수 => return문이 없는 함수
function c() {
  let a = 2 + 2;
  let b = a * a;
}

// (d) never를 반환하는 함수
function d() {
  throw TypeError("I always error");
}

// (e) never를 반환하는 또 다른 함수
function e() {
  while (true) {
    console.log("...ing");
  }
}
*/

// 3.2.13 열거형 => 사용 지양
// 열거형의 이름은 단수 명사로 쓰고, 첫 문자는 대문자로 하는 것이 관례다.
// 키도 앞 글자를 대문자로 표시

/*
enum Language {
  English = 0,
  Spanish = 1,
  Russian = 2,
}

let myFirstLanguage = Language.Russian;
let mySecondLanguage = Language["English"];

enum Language2 {
  English = 100,
  Spanish = 200 + 300,
  Russian,
}

enum Color {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0xc10050,
  White = 255,
}

let red = Color.Red;

let pink = Color.Pink;

let a = Color.Red;
let b = Color.Green;

// 역방향 찾기
let c = Color[255]; // White
let d = Color[6]; // undefined
*/

/*
const enum Language {
  English,
  Spanish,
  Russian,
}

// 유효한 enum 키 접근
let a = Language.English;

// 유효하지 않은 enum 키 접근
let b = Language.Tagalog;

// 유효한 enum 키 접근
let c = Language[0];

// 유효하지 않은 enum 키 접근
let d = Language[6];

const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table,
}

function flip(f: Flippable) {
  return "flipped it";
}

flip(Flippable.Chair);
flip(Flippable.Cup);
flip(12); // 오류 체크 X => 열거형을 문자값을 변경

const enum Flippable2 {
  Burger = "Burger",
  Chair = "Chair",
  Cup = "Cup",
  Skateboard = "Skateboard",
  Table = "Table",
}

function flip2(f: Flippable2) {
  return "flipped it";
}

flip2(Flippable2.Chair);
flip2(Flippable2.Cup);
flip2(12);

flip2("Hat");
*/
