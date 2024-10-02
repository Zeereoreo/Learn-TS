/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '1';
// const genericString2: GenericSimpleType = '1';
// type도 interface와 마찬가지로 defalt값이 없으면 유추 불가능

interface DoneState<T>{
    data: T[];
}

interface LoadingState{
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T = number> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123', '456'],
}
// 제너릭을 옮겨서 사용이 가능하다.

state = {
    requestedAt: new Date()
}

state = {error: 'error'};

let state2: State = {
    data: [123, 456]
}
// defalt 값으로 유추도 가능