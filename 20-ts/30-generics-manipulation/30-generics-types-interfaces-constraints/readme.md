# О лекции

В этом уроке мы изучим дженерик типы, интерфейсы и ограничения в них

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/60)

## Дополнительные материаллы

* RU [Параметры типа - extends (generic constraints)](https://scriptdev.ru/guide/032/#-extends-generic-constraints)
* EN [Generic Types](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types)
* EN [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)

## Run

````shell
tsc ./*.ts 
````

````shell
tsc --build --verbose --force ./ 
````

## Коротко

* Через type можно описть generic-объект  
[010-generic-type.ts](010-generic-type.ts)

```typescript
type User<TLogin, TAge> = {
    login: TLogin;
    age: TAge
}
type UserStringNumber = UserTemplate<string, number>;
```

* Можно указать объединение (union)  
[020-generic-helper-type.ts](020-generic-helper-type.ts)

```typescript
// Объявление
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
// Использование
const numberValue: OrNull<number>    = 33;
const nullValue  : OrNull<number>    = null;
const oneNumber  : OneOrMany<number> = 33;
const manyNumber : OneOrMany<number> = [33, 34];
```

* Можно использовать generic-union для объявления параметра в generic-функции 
Это делается через extends. 
[030-generic-function.ts](030-generic-function.ts)
```typescript
// Пример 1. union на месте
const depositMoneyFn1 = <TAmount extends number|string>(amount : TAmount):void=>{}
// Пример 2. union вынесен в отдельный тип данных
type AmountUnion = number|string;
const depositMoneyFn2 = <TAmount extends AmountUnion>(amount : TAmount):void=>{}
```

* Можно создать интерфейс generic-функции
[030-generic-function-interface.ts](030-generic-function-interface.ts)
```typescript
interface MyFunctionInterface<T1, TResult> {
    (param1: T1): TResult;
}
```

* Можно описывать generic классы. В том числе с указанием базового класса.
  Это делается через extends.
  [040-generic-interface-extends.ts](040-generic-interface-extends.ts)
```typescript
interface UserI<TPerson extends PersonI> {
    login: string;
    person: TPerson;
}
```
