/**
 * Object 
 */
const codefactory = {
    name: '1',
    age: 32,
}

interface IPerson{
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
}

const iPerson: IPerson = {
    name: '1',
    age: 30,
}

const tPerson: TPerson = {
    name: '1',
    age: 30,
}

iPerson.name;
tPerson.age;