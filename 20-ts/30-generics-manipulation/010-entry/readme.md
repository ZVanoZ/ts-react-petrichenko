# О лекции

В этом уроке мы изучим что такое обобщения и зачем они нужны в TS коде

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/58)

## Дополнительные материаллы

* RU [Обобщения](https://scriptdev.ru/guide/032/)
* EN [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

## Run

````shell
tsc ./*.ts 
````

````shell
tsc --build --verbose --force ./ 
````

## Суть урока

Generic позволяет не указывать конкретный тип данных, а указать что в этом месте будут данные неопределенного типа.

Делается это указанием подстановки в угловых скобках "<T>" или "<K, V>", или "<Key, Value>". 

Далее при использовании фрагмента кода вместо "T" будет подставлен реально используемый тип данных.

Ниже есть примеры использвования Generic.

Generic можно использовать с: 
- type 
- interface 
- function 
- class 
- метод класса

Generic нельзя использовать с:
- enum

Есть общепринятые правила для использования букв в качестве типов.
````text

T U V S    - какой-то тип данных.  

P          - property

Хеш массив
K          - Key
V          - Value
````

## Пример с function

см. [010-function.ts](010-function.ts), [010-function-tsc-err.ts](010-function-tsc-err.ts)

Тип подставляется для data и для результата функции.

```typescript
function processedDataGeneric<T>(data: T): T {
    console.log('processedDataGeneric/typeof data:', typeof data, data);
    return data;
}
processedDataGeneric(123);                     // processedDataGeneric/typeof data: number 123
processedDataGeneric(new Date());              // processedDataGeneric/typeof data: object 2024-09-17T05:46:58.733Z
````

## Пример с interface

см. [020-interface.ts](020-interface.ts)