/**
 * Exclude Type
 */

type NoString = Exclude<string | boolean | number, string>;

// 앞선 타입 중의 제외 하고 싶은 값을 두번째의 넣어주면 된다.

type NoFunction = Exclude<string | (() => void), Function>;