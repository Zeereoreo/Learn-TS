/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

//유추로 타입을 만들면 옵셔너리가 되어서 자유롭게 활용이 가능하지만


interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}


type DogOrCat = Dog | Cat;

//TypeScript의 정확한 활용법으로 사용하고자 한다면

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat2.name;
dogOrCat2.age;  //오류
dogOrCat2.breed;//오류

//따라서 이렇게 활용하고 싶을 때는 Narrowing을 해야한다.

//내로잉으로 Type 속성을 활용할 수 있다.
if('age' in dogOrCat2){
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name;
}else{
    dogOrCat2;
    dogOrCat2.name;
    dogOrCat2.breed;
}