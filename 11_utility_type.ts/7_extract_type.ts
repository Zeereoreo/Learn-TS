type stringOnly = Extract<string | boolean | number, string>;

type functionOnly = Extract<string | (() => void), Function>;

//exclude와 반대로 두번째의 타입이 된다.