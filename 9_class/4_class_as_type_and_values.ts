/**
 * Class as Type and Value
 */

// class는 TS에서 값이 될 수도 Type이 될 수도 있다.
class Dog {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    bark(){
        return `${this.name}가 짖습니다`;
    }
}

let ori = new Dog('오리');
//Dog 타입을 만들진 않았지만 Type을 보면 Dog 타입으로 되어있다.
//따라서 class는 type과 값이 공존한다.

console.log(ori.bark());

// ori = '오리';
// 값을 이렇게 변경하는 건 안되지만
// 아래의 객체처럼 변경은 가능하다.

ori = {
    name: '별이',
    bark(){
        return `${this.name}가 짖습니다.`;
    }
}
// Type은 Dog로 인식

console.log(ori);