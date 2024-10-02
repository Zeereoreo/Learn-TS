/**
 * Generic in Interface
 */
interface Cache<T> {
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

// const cach2: Cache = {
//     data: [123, 456],
//     lastUpdate: new Date(),
// }

// 제너릭을 생략할 경우 유추 되지 않는다.

interface DefaultGeneric<T = string>{
    data:T[];
}
// defalt값을 지정하는 방법

// const cache3: DefaultGeneric = {
//     data: [123, 456],
// }

// defalt값을 정해 줄 경우 유추가 가능.