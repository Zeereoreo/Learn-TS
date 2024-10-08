/**
 * Generic in Inheritance
 */
class BaseCache<T>{
    data: T[] = [];
}

class StringCache extends BaseCache<string>{ }

const stringCache = new StringCache();
stringCache.data; //string[]


class GenericChild<T, Message> extends BaseCache<T>{
    message?: Message;

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data; // string[]
genericChild.message; //string | undefind

/**
 * 제너릭의 inheritance
 */

interface BaseGeneric {
    name: string;
}

class Idol<T extends BaseGeneric>{
    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

const yuJin = new Idol({
    name: '1', // name이 무조건적으로 들어가야 에러가 안난다.
    // age: 23,    // age는 사라져도 에러가 안난다.
});

// 구조를 정확하게 강제할 수 있다.

/**
 * keyof 함께 사용하기
 */
const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

function objectParser<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}
// key값으로 강제할 수 있다.
const val = objectParser(testObj, 'c');

/**
 * Ternary
 * 1=== 2 ? true : false
 */
class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
    type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ?
    MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol();

//제너릭값의 따라 Type을 정할 수 있다.