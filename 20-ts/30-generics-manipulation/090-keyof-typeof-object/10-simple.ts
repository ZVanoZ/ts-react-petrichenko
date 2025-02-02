const someCompanyObject = {
    companyName: "Google",
    createdYear: 1998
}

// Создать тип из ключей ОБЪЕКТА нельзя.
// keyof можно применить к ТИПУ ДАННЫХ, но нельзя применить к ПЕРЕМЕННОЙ.
// type SomeCompanyKeysType = keyof someCompanyObject;
// error TS2749: 'someCompanyObject' refers to a value, but is being used as a type here. Did you mean 'typeof someCompanyObject'?

// Но можно сделать так:
// 1. получить ТИП ОБЪЕКТА выражением "typeof object"
// 2. получить ключи из полученного ранее типа

type SomeCompanyKeysType = keyof typeof someCompanyObject;

// Так можно. Свойство с именем "companyName" есть в объекте someCompanyObject.
const companyName_key: SomeCompanyKeysType = "companyName";
console.log('# companyName_key: ', companyName_key, typeof companyName_key);
//# companyName_key:  companyName string

// // Так нельзя. Свойство с именем "unknownProperty" есть в объекте someCompanyObject.
// const unknownProperty_key: SomeCompanyKeysType = "unknownProperty";
// // error TS2322: Type '"unknownProperty"' is not assignable to type '"companyName" | "createdYear"'.