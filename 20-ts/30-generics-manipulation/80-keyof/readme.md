# О лекции

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/65)

```text
Описание эпизода
В этом уроке изучим оператор keyof

Ресурсы:
В документации
В руководстве
Файл
Конспект
```
[Пример из урока](teacher/index.ts)

## Ссылки

* EN [keyof-types](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
* RU [Запрос ключей keyof](https://scriptdev.ru/guide/042/#keyof)

## Run

````shell
tsc ./*.ts 
````

````shell
tsc --build --verbose --force ./ 
````

## Коротко

Не до конца понятная тема.

Вроде как "keyof SomeClass" позволяет получить union с названиями полей класса SomeClass.
@TODO: дописать краткий конспект лекции ...
```ts
interface IAboutCompany {
    name: string;
    fullName: string;
    owners: string[];
}

/**
 * Создаем тип AboutCompanyKeys, который будет содержать саписок ключей ['name', 'fullName','owners'].
 * Каждый элемент массива имеет тип Symbol
 */
type AboutCompanyKeys = keyof IAboutCompany;

// keyOfFullName = Symbol('fullName')
const keyOfFullName: AboutCompanyKeys = "fullName";

// Используя Generic Function можем ограничить допустимый набор значений
// TCompanyInfo - generic тип для входящего параметра companyInfo
// property1, property2 - названия полей класса TCompanyInfo. Например Symbol('fullName').   
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
}
```