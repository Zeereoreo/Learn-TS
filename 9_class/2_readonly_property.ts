/**
 * readonly 프로퍼티
 */
class Person {
    readonly name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const person = new Person('1', 23);

person.age = 32;

// readonly 이기 때문에 값을 직접 변경하는 것이 불가능 하다.
person.name = '2';