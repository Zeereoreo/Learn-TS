/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test');
// 애니 타입

function genericWhatValue<T>(value: T): T {
    return value;
}

const genericResult1 = genericWhatValue<number>(123);
//타입을 파라미터처럼 넣어서 재사용이 가능하다

let genericResult2 = genericWhatValue('123')
// "123" Type -> String 으로 유추된다

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);
// 많은 양의 제너릭도 가능하다.

const multipleGenericResult2 = multipleGenerics(
    123,
    true,
    '123',
);
// 유추도 가능

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

// 튜플(readonly) 로도 가능하다.

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
    ...args: any[]) {
    return new constructor(...args);
}

//class를 인스턴스하기 위한 함수 -> 제너릭을 이용
//실제 활용도 많음

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));