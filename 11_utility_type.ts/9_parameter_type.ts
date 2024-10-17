/**
 * Parameter Type
 */

function sampleFunction(x: number, y: string, z: boolean){

}

type Params = Parameters<typeof sampleFunction>;

// 그냥 함수를 가져오는게 아닌 함수안의 파라미터 타입을 불러온다.

type Params2 = Parameters<(one: number) => void>;