/**
 * Class 선언하기
 */
class SampleClass { }


class Game {
    // class안에서도 type 설정하기
    name: string;
    country: string;
    download: number;

     // 초기화를 위한 constructor 만들기
    
    constructor(name: string, country: string, download: number){
        this.name = name;
        this.country = country;
        this.download = download;
    }

    // 메서드 만들기
    introduce(){
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
    }
}

const starcraft = new Game(
    'Star Craft',
    'USA',
    10000000,
);

// 실행하기
const retVal = starcraft.introduce();

// 없는 메서드는 실행되기도 전에 오류가 난다
// starcraft.changeGame();