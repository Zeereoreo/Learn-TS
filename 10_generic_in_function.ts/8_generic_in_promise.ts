/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 2000)
    })
}

const runner = async function () {
    const res = await afterTwoSeconds();
    console.log(res); //res가 unkown
}

runner();

const afterOneSecond = function(): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 1000)
    })
}

const runner2 = async function () {
    const res = await afterOneSecond();
    console.log(res); //string type
}

runner2();

const runner3 = async function(){
    return 'string return';
}

// 함수앞의 async를 사용할 경우 자동으로 Promise<>가 붙는다