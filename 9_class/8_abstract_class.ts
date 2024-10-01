/**
 * Abstract class
 */
abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(123);
// abstract class는 직접적으로 선언이 불가능하다.

// 인스턴스를 직접적으로 부르지 않고 다른 곳에서 상속 받을 때 많이 사용한다.
class Product extends ModelWithId{

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod{
    abstract shout(name: string): string;
}
// 상속을 강제 할 수 있다.
class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return '소리질러~';
    }
}