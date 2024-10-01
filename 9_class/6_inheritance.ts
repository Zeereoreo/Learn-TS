/**
 * Inheritance
 */
class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`parent: ${this.name}이 춤을 춥니다.`);
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age: number) {
        super(name);

        this.age = age;
    }

    sing() {
        console.log(`child : ${this.name}이 노래를 부릅니다.`);
    }
}

const parent = new Parent('1');
const ahri = new Child('아리', 12);

parent.dance();
// codefactory.sing();

ahri.dance();
ahri.sing();

let person: Parent;
person = parent;
person = ahri;
// 자식은 부모타입이 될 수 있다.

let person2: Child;
person2 = ahri;
// person2 = codefactory; 부모는 자식타입이 될 수 없다.

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class Child2 extends Parent2{
    age?: number;

    constructor(name: string, age?: number){
        super(name);
        this.age = age;
    }
}

const parent2 = new Parent2('1');
const ahri2 = new Child2('아리', 20);

let child: Child2;
child = ahri2;

child = parent2; //옵셔널 프로퍼티를 사용 할 경우 부무도 자식 타입이 될 수 있다.