/**
 * Nested Object
 */

type NestedPerson = {
    identity:{
        name: string;
        age: number;
    },
    nationality: string;
}

const person1: NestedPerson = {
    identity:{
        name: '1',
        age: 2,
    },
    nationality: '한국인',
}

type TPerson1 = {
    identity: TPersonIdentity,
    nationality: string;
}

type TPersonIdentity = {
    name: string;
    age: number;
}

const person2: TPerson1 = {
    identity:{
        // name: '1',
        age: 2,
    },
    nationality: '한국인',
}

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

interface IPersonIdentity{
    name: string;
    age: number;
}

const yuJin: IPerson = {
    identity:{
        name: '1',
        age: 22,
    },
    nationality: '한국인',
}