# О лекции

В этом уроке мы поближе узнаем дженерик-функции и как их использовать

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/59)

## Дополнительные материаллы

* RU [Обобщения в TypeScript](https://scriptdev.ru/guide/032/#typescript)
* EN [Generic Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions)

## Run

````shell
tsc ./*.ts 
````

````shell
tsc --build --verbose --force ./ 
````

## Суть урока

Продолжение предыдущего занятия.

На этом уроке осваиваем объявление generic-функций различными способами.

* Декларация generic-функции
[010-generic-functions-demo.ts](010-generic-functions-demo.ts)
```typescript
function getErrorMessage<T>(
    err: T
): string {
  // ...
}
```
* Описание generic-метода в интерфейсе класса
[020-generic-interface-demo.ts](020-generic-interface-demo.ts)
```typescript
interface ILog {
    getErrorMessage<T>(err: T): string;
}

const
    log: ILog = {
        getErrorMessage: function <T>(
            err: T
        ): string {
            //...
        }
    }
;
```
* Декларация generic-функции с последующим объявлением метода в интерфейсе через typeof
[020-generic-interface-with-extrrnal-function.ts](020-generic-interface-with-extrrnal-function.ts)* 
```typescript
function normalizeErrorFunction<T>(err: T): T {
    // ...Что-то делаем с "err".
    return err;//
}
interface ILog {
    normalizeError: typeof normalizeErrorFunction;
}
const
    log: ILog = {
        normalizeError: normalizeErrorFunction,
    }
;
```
* Декларация generic-функции, использование совместимой сигнатуры в interface, присвоение совместимого метода полю класса 
[020-generic-interface-with-extrrnal-function.ts](020-generic-interface-with-extrrnal-function.ts)
```typescript
function getErrorMessageFunction<T>(
    err: T
): string {
}
interface ILog {
    getErrorMessage<T>(err: T): string;
}
const
    log: ILog = {
        getErrorMessage: getErrorMessageFunction
    }
;
```
* Декларация generic-функции, затем объявление сигнатуры функции через type, затем объявление метода через interface класса, затем присвоение функции свойству класса
```typescript
function getErrorMessageFunction<T>(
    err: T
): string {
    //...
}
type TErrorMessageFunction = <T>(data: T) => string;
interface ILog {
    getErrorMessage2: TErrorMessageFunction;
}

const
    log: ILog = {
        getErrorMessage2: getErrorMessageFunction,
    }
;
```
* Декларация generic-функции, затем объявление сигнатуры функции через interface (аналог type), затем объявление метода через interface класса, затем присвоение функции свойству класса
```typescript
function getErrorMessageFunction<T>(
    err: T
): string {
    //...
}
interface IErrorMessageFunction {
    <T>(data: T): string
}
interface ILog {
    getErrorMessage1: IErrorMessageFunction;
}
const
    log: ILog = {
        getErrorMessage1: getErrorMessageFunction,
    }
;
```
