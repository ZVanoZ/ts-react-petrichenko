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
[010-generic-type.ts](010-generic-type.ts)

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

* Можно описывать generic классы. В том числе с указанием базового класса.
Это делается через extends.
[010-generic-type.ts](010-generic-type.ts)
```typescript
interface UserI<TParents extends ParentsI> {
    login: string;
    parents: TParents;
}
```

* Можно использовать generic-union для объявления параметра в generic-функции 
Это делается через extends. 
  [010-generic-type.ts](010-generic-type.ts)
```typescript
// Пример 1. union на месте
const depositMoneyFn1 = <TAmount extends number|string>(amount : TAmount):void=>{}
// Пример 2. union вынесен в отдельный тип данных
type AmountUnion = number|string;
const depositMoneyFn2 = <TAmount extends AmountUnion>(amount : TAmount):void=>{}
```
