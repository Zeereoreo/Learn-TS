/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

// 이건 never Type -> 존재할 수 없는 타입

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

// 왼쪽과 오른쪽 모두를 만족시키는 object

const person: PersonAndCompany = {
    name: '1',
    age: 2,
    company: '3',
    companyRegistrationNumber: 'xxxyyyyzzzz',
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

// interscetion과 union을 섞는 방법

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '1',
    age: 2,

    // CompanyType
    company: '2',
    companyRegistrationNumber: 'xxxyyyzzz',

    // PetType
    petName: '3',
    petAge: 4,
}