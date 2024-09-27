/**
 * Tuple
 */

let stringArr : string [] = ["1","2","3"];

let numberAndStringTuple : [number, string] = [
    1,
    "2",
]

//기본적인 정의 : 순서대로 넣을 수 있다, 그외의 것들은 넣을 경우 오류가 발생

// 애매한 부분

numberAndStringTuple.push("3");
console.log(numberAndStringTuple);
//JS에서는 튜플의 개념이 없기 때문에 에러가 나지 않고 제대로 들어간다.

let unmodifiableTuple : readonly [number,string] = [
    1,
    "2"
]

unmodifiableTuple.push() // 오류발생

// 튜플을 정확히 사용하려면 readonly를 사용하기 -> push 같은 메서드를 이용시 막아준다.

/**
 * Tuple 유추하기
 */

let TArr = ['1', '2', '3']; // string [] 로 유추

let TArr2 = ['1', '2', '3'] as const; // readonly로 유추 -> 튜플
const TArr3 = ['1', '2', '3'] as const; // 위와 마찬가지

let stringArray: string[] = [
    ...TArr2,
    ...TArr3,
]
// 에러가 없는 걸 볼 수 있다.

/**
 * Named Tuple
 */

const namedTuple : [name : string,age: number] = [
    "zeereo",
    7,
]
// 입력사항에 보다 정확한 네이밍을 작성할 수 있다.

/**
 * Assigning Tuple to Tuple
 * 
 * 
 */

const tuple1: [string, string] = ['1', '2'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

//Tuple은 같은 타입끼리만 할당이 가능하다.

/**
 * Tuple과 Array의 관계
 */
let strArr: [string, string] = [
    '1',
    '2',
]

let stringArr2: string[] = strArr;

let strArr2: [string, string] = stringArr;

//구체적인 타입에서 덜 구체적인 타입으로는 할당이 가능하나 반대는 불가능

/**
 * Multi Dimesional Tuple
 */
const tuple2D : [string, number][] = [
    ['1', 2],
    ['1', 2],
    ['1', 2],
]

//Array 안에서 구성될 Tuple을 입력해주면 된다.