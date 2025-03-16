# Урок 68

https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/69

## Описание эпизода

В этом уроке мы изучим новый прием по формированию типов - условные типы

## Ресурсы:

* EN: В документации [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
* RU: В руководстве [Условные типы](https://scriptdev.ru/guide/043/)
* Вопрос по ошибке №1   
  [TypeScript Conditional Return errors](https://stackoverflow.com/questions/58845084/typescript-conditional-return-errors)
* Вопрос по ошибке №2  
  [Type 'true' is not assignable to type 'T2 extends keyof T1 ? true : false' #22735](https://github.com/microsoft/TypeScript/issues/22735)
* ~~Конспект~~

## Содержание

* Базовая конструкция [10-base.ts](10-base.ts)
* В связке с интерфейсами  [20-interfaces.ts](20-interfaces.ts)
* Применение infer [30-infer.ts](30-infer.ts)
* Практическое задание с собеседований [40-practice.ts](40-practice.ts)

## Конспект

* Условные типы, это механизм получение ТИПА ДАННЫХ по условию.  
Сравнивая другие типы данных, либо тип данных литерала, получаем результирующий тип.  
**Для сравнения используется тернарный оператор** вида
```typescript
type T = T1 extends T2 ? T3 : T4;
```
где T1 и T2 сравниваемые типы, T3 и T4 присваиваемые типы, T результат выражения (либо T3, либо T4).
```typescript
// Например
type TExample3 = "string" extends string ? string : number;
const example3s: TExample3 = '1';
```

* **Условные типы используются в комбинации с generic.**  
В обычном программировании трудно найти применение этой технике.

* Не получится использовать в тернарном операторе простое условие для вычисления типа данных
```typescript
type TExample4 = true ? string : number; // error TS2693: 'number' only refers to a type, but is being used as a value here.
const example4s: TExample4 = '1'; // error TS2322: Type '"1"' is not assignable to type 'true'.
```

* Нельзя сравнивать константу и тип данных т.к. константа не является типом.  
  Можно сравнить тип данных из константы с другим типом данных через typeof.
```typescript
const someStringConst = 'myString';
type TExample5_1 =        someStringConst extends string ? string : number; // error TS2749: 'someStringValue' refers to a value, but is being used as a type here. Did you mean 'typeof someStringValue'?
type TExample5_2 = typeof someStringConst extends string ? string : number; // Работает
```

* infer используется для получения типа данных при проверке "... extends ..."  
  Пример для получения типа из массива.
```typescript
// В примере проверяется является ли T наследником от <Array>.
// Если  проверка "T extends Array<infer TItem>" успешна (T является массивом), то 
// тип данных массива сохраняется в TItem и его можно использовать.
type GetElementType<T> = T extends Array<infer TItem> ? TItem : T;
const data1 = [3, 2, 1];
type TExOfData1 = GetFirstType<typeof data1>;
const ex1: TExOfData1 = 123321;
```
  Пример для получения типа из сигнатуры функции.
```typescript
type TDataGeneric<T> = T extends (data: infer TData) => infer TData
                ? TData
                : undefined;
// Получение типа на месте
let f1v1: TDataGeneric<typeof f1> = f1(123);

// Получение типа через промежуточно вычисленный тип
type TF1Data = TDataGeneric<typeof f1>;
let f1v2: TF1Data = f1(321);


function f1(data: number): number {
  return data;
}

```