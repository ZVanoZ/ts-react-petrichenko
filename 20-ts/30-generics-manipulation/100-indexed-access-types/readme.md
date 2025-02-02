# О лекции

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/67)

* Описание эпизода

В этом уроке мы познакомимся с механизмом Indexed Access Types

* Ресурсы:
  * В документации [EN: Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
  * ~~Конспект~~

## Коротко

```ts
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
```