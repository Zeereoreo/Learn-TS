/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

// DRY 의 원칙을 어긴 모습

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser']; // getUser: State 의 모습이 된다.
    paginateUsers: GlobalApiStatus['paginateUsers']; // paginateUsers: State | undefined;
    banUser: GlobalApiStatus['banUser']; // banUser: State | null;
}

// 이것마저 귀찮다면

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
    // getUser: 
    // paginateUsers:
    // banUser:
}
// looping을 활용하여 보다 간결한 모습

//유틸리티를 활용하기
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;
// Pick<T,K>를 활용한 모습 -> 넣고 싶은걸 넣는 유틸리티

type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

// Omit<T,K>를 활용한 모습 -> 제외하고 싶은걸 입력하면 제외되고 넣어진다.

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser';
// GlobalApiStatus 의 키를 사용할 수 있다. -> 다른걸 넣으면 에러가 난다.

// 이걸 활용하여 Looping
type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// 하지만 getPots도 들어간다.

// Exclude<T,U> 유틸리티를 활용한 모습

type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}
//getPots를 제외

type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

//모두 optional로 바꾼 모습


interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];

// StatusType = 'loading' | 'error' 로 된다.