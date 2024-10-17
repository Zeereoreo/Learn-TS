/**
 * Partial Type
 */
interface Idol{
    name: string;
    age: number;
    groupName: string;
}

const yuJin: Idol = {
    name: '1',
    age: 2,
    groupName: '3',
}

function updateIdol(original: Idol, updates: Partial<Idol>): Idol{
    // 부분적으로 입력하게 하고싶은 타입을 넣을 수 있다
    return {
        ...original,
        ...updates,
    }
}

console.log(updateIdol(yuJin, {
    age: 4,
    name: '5',
    groupName: '6',
}));