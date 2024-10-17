/**
 * Required Type
 */

// 전부 필수로 만드는 타입
interface Dog {
    name: string;
    age?: number;
    country?: string;
}
//제너릭 안에 들어간 요소가 모두 들어가야한다.
const requiredDog: Required<Dog> = {
    name: '1',
    age: 2,
    country: '3'
}