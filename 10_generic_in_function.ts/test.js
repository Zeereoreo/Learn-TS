// // const array = [];

// // function addNum(array,num){
// //     array.push(num);
// //     return array;
// // }

// // const array2 = addNum(array,1);
// // console.log(array === array2);

// // // const init = async () =>{
// // //     const getSomeData = async () =>{
// // //         const res = await fetch("https://example.com/something.json");
// // //         const json = await res.json();

// // //         return json;
// // //     }
// // //     const data = getSomeData();
// // //     console.log(data);
// // // }

// // // init()

// // let x = 1;

// // function foo(){
// //     let x = 100;
// //     bar();
// // }
// // function bar(){
// //     console.log(x);
// // }

// // foo();
// // bar();

// // const obj = {
// //     logthis(){
// //         console.log(this);
// //     },
// //     foo(){
// //         this.logthis();
// //     },
// //     bar(){
// //         const logthis = this.logthis;

// //         logthis();
// //     }
// // }

// // obj.logthis();
// // obj.foo();
// // obj.bar();

// console.log(null == undefined)
// console.log({} == [])
// console.log('' == false)
// console.log(0 == false)

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     introduce(){
//         console.log(`heelo my name is ${this.name}`);
//         return this;
//     }
// }

// class Student extends Person{
//     constructor(name) {
//         super(name);
        
//     }
    
//     study(){
//         this.introduce();
//         console.log('공부중');

//         return this;
//     }
// }

// const tom = new Person('Tom');
// const amy = new Student('Amy');

// Person.introduce();


function Amount({value}){
    const[amoutKR, setAmountKR] = useStae(()=>value.toLocaleString());
    useEffect(()=>{
        if(value == null){
            setAmountKR(null)
        }else{
            setAmountKR(value.toLocaleString());
        }

    },[value])
    return <span>{amoutKR}</span>
}