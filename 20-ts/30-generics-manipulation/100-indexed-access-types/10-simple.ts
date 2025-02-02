interface IDepartment {
    [key: string]: string; // Че за хрень??? Этого не было в предыдущих уроках.
}

interface ICompany {
    companyName: string;
    createdYear: number;
    topManagers: {
        securityManager: string;
        pressManager?: string;
        itManager?: string;
    }
    mainDepartment?: IDepartment;
    departments: IDepartment[];
}

//-----------------------------------------------------------------------------
// Демо для "Indexed Access Types"
//----

/*
// Ошибка! ICompany это тип данных, поэтому к полям интерфейса нельзя добраться через точку
type TypeOf_ICompany_createdYear = typeof ICompany.createYear;
// error TS2693: 'ICompany' only refers to a type, but is being used as a value here.
*/

// Так можно. Это называется "Indexed Access Types"
// >> Initial type: number
type TypeOf_ICompany_createdYear = ICompany['createdYear'];

// Тип вложенных свойств тоже можно получить
// >> Initial type: string
type TypeOf_ICompany_topManagers_securityManager = ICompany['topManagers']['securityManager'];

// >> Initial type: string
type TypeOf_ICompany_topManagers_pressManager = ICompany['topManagers']['pressManager'];

// >> Initial type: IDepartment
type TypeOf_ICompany_mainDepartment = ICompany['mainDepartment'];

// Перечисление(union type) всех допустимых типов для ICompany
// >> Initial type: string | number | {securityManager: string, pressManager?: string, itManager?: string} | IDepartment | IDepartment[]
type TypeOf_ICompany__allKeysEnum = ICompany[keyof ICompany];

// Получение типа для массива.
// >> Initial type: IDepartment[]
type TypeOf_ICompany_departments = ICompany['departments'];

// Получение типа для элемента массива.
// >> Initial type: IDepartment
type TypeOf_ICompany_departments__typeOfItem = ICompany['departments'][number];

//-----
// Получение типа свойства через литерал из константы
//--
const createdYear_constString = 'createdYear';

/*
// Так нельзя. Ловим сразу две ошибки
type TypeOf_ICompany_createdYear_fromConstString = ICompany[createdYear_constString];
// error TS2538: Type 'createdYear_constString' cannot be used as an index type.
// error TS2749: 'createdYear_constString' refers to a value, but is being used as a type here. Did you mean 'typeof createdYear_constString'?
*/

// Так можно. Используя typeof получаем перечень типов
// typeof createdYear_string >> "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
// >> Initial type: number
type TypeOf_ICompany_createdYear__fromConstString1 = ICompany[typeof createdYear_constString];

// Можно из литерала
// Initial type: number
type TypeOf_ICompany_createdYear__fromLiteral = ICompany['createdYear'];

//-----
// Если имя свойства в переменной, а не в константе, то возникает проблема
//--
let createdYear_letString = 'createdYear';

/*
// Так нельзя.
type TypeOf_ICompany_createdYear__fromLetString1 = ICompany[typeof createdYear_letString];
// error TS2537: Type 'ICompany' has no matching index signature for type 'string'.
*/

let createdYear_letString2 = 'createdYear' as const;
type TypeOf_ICompany_createdYear__fromLetString2 = ICompany[typeof createdYear_letString2];

let createdYear_letString3 = 'createdYear' as 'createdYear';
type TypeOf_ICompany_createdYear__fromLetString3 = ICompany[typeof createdYear_letString3];

let createdYear_letString4: 'createdYear' = 'createdYear';
type TypeOf_ICompany_createdYear__fromLetString4 = ICompany[typeof createdYear_letString4];

//-----------------------------------------------------------------------------

// @ts-ignore - TS находит ICompany из другой папки и предлагает добавить недостающие свойства
const googleCompanyObject: ICompany = {
    companyName: "Google",
    createdYear: 1998,
    topManagers: {
        securityManager: 'Google security manager'
    },
    departments: []
}

console.log(googleCompanyObject);

