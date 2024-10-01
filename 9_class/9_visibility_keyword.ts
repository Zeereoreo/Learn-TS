/**
 * Visibility Keyword
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent{
    public publicProperty = 'public property';
    protected protectedProperty = 'protected property';
    private privateProperty = 'private property';
    #jsPrivateProperty = 'js private property';

    test(){
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        this.#jsPrivateProperty
    }
}

//상속
class PropertyTestChild extends PropertyTestParent{
    test(){
        this.publicProperty;
        this.protectedProperty;
        // this.privateProperty; 접근불가
        // this.#jsPrivateProperty 접근불가
    }
}

const instance = new PropertyTestChild();
//인스턴스에서는 public 밖에 되질 않는다.
instance.publicProperty;
// instance.