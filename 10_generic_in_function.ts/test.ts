function identity<T>(val : T) : T {
    return val
}
const output = identity("hello")

type GetProperty = <T,K extends keyof T>(obj:T,key: K)=> T[K]

const getProperty :GetProperty = (obj,key) => obj[key]

const person = {name : '토스' , age : 30}

const name : string = getProperty(person, 'name')
const age : number = getProperty(person,'age');

type Person = {
    name : string;
    age?:number;
}

function remove (person:Person){
    const result = {...person}
    if(result.age != null){
        delete result.age
    }
    return result
}

console.log(remove({name:'김',age:20}).age)

type El<T> = T extends Array<infer U>? U : never;

type Ex = El<number[]>;

type Bar = string & number;

type Person1 = {
    name : string;
    age? : number;

}

const person1 : Person = {} 
const person2 : Person = {name : '토스'} 

const person3 : Person = {} as Person;
const person4 : Person = {name:'토스'} as Person 
const person5 : Person = {age:20} as Person 
