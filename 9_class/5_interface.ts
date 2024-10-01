/**
 * Interface
 */
interface Animal {
    name: string;
    age: number;
    jump(): string;
}

//implements를 사용할 때 interface안의 내용이 모두 들어가야한다.
//추가로 메서드를 넣을 시 문제는 없다.

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    dance() {

    }
}

let ori: any = new Dog('오리', 3);

function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object;
}

if (instanceOfAnimal(ori)) {
    ori;
}

// 위처럼 내로잉이 가능하다.

/**
 * 다중 인터페이스 구현
 */
interface Pet {
    legsCount: number;
    bark(): void
}
//여러개의 implements가 가능하다.
class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

type AnimalAndPet = Animal & Pet;


class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

//안되는 상황

interface WrongInterface1 {
    name: string | number;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2{
// name: number;
// name: number | string;
// }

// never 상황으로 에러가 난다. property는 중복 안되게

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor {
    new(name: string, age: number): Idol;
}
// 중요! 제너릭에서도 사용된다.

function createIdol(constructor: IdolConstructor, name: string, age: number) {
    // return new Idol(name, age);
    return new constructor(name, age);
}

console.log(createIdol(Idol, '아이유', 32));