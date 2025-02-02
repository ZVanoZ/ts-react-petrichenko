# О лекции

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/66)

* Описание эпизода

В этом уроке мы еще подробнее узнаем оператор typeof

* Ресурсы:
  * В документации [Typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)
  * ~~Конспект~~

## Коротко

@TODO: ...

```ts
const someCompanyObject = {
    companyName: "Google",
    createdYear: 1998
}

// Создаем тип "SomeCompanyKeysType", который содержит перечень ключей объекта "someCompanyObject"
// Важно! Применяется "keyof typeof <object>" 
type SomeCompanyKeysType = keyof typeof someCompanyObject;

// Так можно. Свойство с именем "companyName" есть в объекте someCompanyObject.
const companyName_key: SomeCompanyKeysType = "companyName";
console.log('# companyName_key: ', companyName_key, typeof companyName_key);
```