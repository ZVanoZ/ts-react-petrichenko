interface IAboutCompany {
    name: string;
    fullName: string;
    owners: string[];
    registeredYear: number;
    description?: string | string[];
}
/**
 * Создаем тип AboutCompanyKeys, который будет содержать саписок ключей ['name', 'fullName','owners'].
 * Каждый элемент массива имеет тип Symbol
 */
type AboutCompanyKeys = keyof IAboutCompany;
// console.log('AboutCompanyKeys', AboutCompanyKeys); // error TS2693: 'AboutCompanyKeys' only refers to a type, but is being used as a value here.

/**
 * AboutCompanyKeys не перечисление.
 * Поэтому следующая строчка даст ошибку:
 * error TS2693: 'AboutCompanyKeys' only refers to a type, but is being used as a value here.
 */
// const keyOfFullName: AboutCompanyKeys = AboutCompanyKeys.fullName;

const keyOfFullName: AboutCompanyKeys = "fullName";

// В JavaScript тип данных "string"
console.log("typeof keyOfFullName    : ", typeof keyOfFullName);
// typeof keyOfFullName: "string"

console.log(`keyOfFullName           : "${keyOfFullName}"`);
//keyOfFullName           : "fullName"

const string_keyOfFullName: string = `${keyOfFullName}`;
//string_keyOfFullName    : "fullName"

console.log(`string_keyOfFullName    : "${string_keyOfFullName}"`);

// Можем получить свойство в виде строки
console.log(`keyOfFullName.toString(): "${keyOfFullName.toString()}"`);

// keyOfFullName.toString(): "fullName"

function getCompanyInfo<
    TCompanyInfo,
    TProp1 extends keyof TCompanyInfo,
    TProp2 extends keyof TCompanyInfo
>(
    companyInfo: TCompanyInfo,
    property1: TProp1, //
    property2: TProp2
): string//
{
    // <<< Ошибка. Нельзя работать с property1, как со строкой.
    // Судя по тексту ошибки, перед нами объединение(union of 'string | number | symbol')
    // const string_property2: string = property1;
    // error TS2322: Type 'string | number | symbol' is not assignable to type 'string'.

    //<<< Ошибка. Нельзя неявно конвертировать property1 в строку
    // т.к. в данном месте property1 имеет тип 'symbol', а не 'string'
    //const string_property1: string = `${property1}`;
    // error TS2731: Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'.

    // <<< Но при этом, вывод типа данных выдает 'string'
    // console.log(`typeof property1: ${typeof property1}`);
    // typeof property1: string

    const res: string = `RES: 
property1("${property1.toString()}")="${companyInfo[property1]}", 
property2("${property2.toString()}")="${companyInfo[property2]}"`;
    return res;
}

let company: IAboutCompany;
company = {
    name: 'МММ',
    fullName: 'Акционерное Общество МММ',
    owners: ['Сергей', 'Мавроди'],
    registeredYear: 1989,
    description: [
        'Акционерское общество (АО) «МММ» — крупнейшая в истории России финансовая пирамида, организованная Сергеем Мавроди.'
    ]
};

console.log("\n10", getCompanyInfo(company, 'fullName', "registeredYear"));
// 10 RES:
// property1("fullName")="Акционерное Общество МММ",
// property2("registeredYear")="1989"

console.log("\n20", getCompanyInfo(company, "registeredYear", 'fullName'));
// 20 RES:
// property1("registeredYear")="1989",
// property2("fullName")="Акционерное Общество МММ"

console.log('\n30', getCompanyInfo(company, 'name', "owners"));
// 30 RES:
// property1("name")="МММ",
// property2("owners")="Сергей,Мавроди"

console.log('\n40', getCompanyInfo(company, 'name', "description"));
// 40 RES:
// property1("name")="МММ",
// property2("description")="Акционерское общество (АО) «МММ» — крупнейшая в истории России финансовая пирамида, организованная Сергеем Мавроди."


function getCompanyInfo2(
    companyInfo: IAboutCompany,
    propertyKey: keyof IAboutCompany
) {
    const typeof_propertyKey: string = typeof propertyKey;

    // Работает
    const stringPropertyKey: string = propertyKey;

    // Ошибка.
    //const stringProperty: string = companyInfo[propertyKey];
    // error TS2322: Type 'string | number | string[] | undefined' is not assignable to type 'string'.

    const res: string = `RES: 
typeof_propertyKey='${typeof_propertyKey}'; propertyKey("${propertyKey.toString()}")="${companyInfo[propertyKey]}"
`;
    return res;
}

console.log("\n2-10", getCompanyInfo2(company, 'fullName'));
// 2-10 RES:
// typeof_propertyKey='string'; propertyKey("fullName")="Акционерное Общество МММ"

// Ошибка. Компилятор не находит свойства 'someInvalidName' в "keyof IAboutCompany"
//console.log("\n2-20", getCompanyInfo2(company, 'someInvalidName'));
// error TS2345: Argument of type '"someInvalidName"' is not assignable to parameter of type 'keyof IAboutCompany'.