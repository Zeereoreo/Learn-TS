/**
 * Readonly Type
 */
interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: '1',
    age: 2
};

nyaong.name = '3';

const bori: Readonly<Cat> = { 
    name: '4',
    age: 5,
}

// 불러오는 건 가능하지만 수정은 불가능 하지만 JS에서는 수정이 가능
// bori.name = '6';

Object.freeze(bori); //이렇게 하면 JS에서도 수정이 불가능