# О лекции

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/63)

```text
    Описание эпизода
В этом уроке мы начнем знакомиться со встроенными в TS дженериками

    Ресурсы:
Deep wrapper types
Весь список типов
В руководстве
Иммутабельность в TS
Конспект
```

## Ссылки

* EN: [Deep wrapper types](https://github.com/ts-essentials/ts-essentials#Deep-wrapper-types)
* EN: [Utility Types (Весь список типов)](https://www.typescriptlang.org/docs/handbook/utility-types.html)
*

RU: [Readonly, Partial, Required, Pick, Record (В руководстве)](https://scriptdev.ru/guide/044/#-extends-generic-constraints)

*

EN: [The Complete Guide to Immutability in TypeScript (Иммутабельность в TS)](https://levelup.gitconnected.com/the-complete-guide-to-immutability-in-typescript-99154f859fdb)

## Run

````shell
tsc ./*.ts 
````

````shell
tsc --build --verbose --force ./ 
````

## Коротко

* [10-simple.ts](10-simple.ts)

```typescript
// generic-массив чисел
const arrNumber1: Array<number> = [1, 2, 3.45, 4];
// аналогичен простому объявлению массивов с числами 
const arrNumber2: number[] = [1, 2, 3.45, 4];

// read-only generic-массив чисел
const arrNumber: ReadonlyArray<number> = [1, 2, 3.45, 4];
```

* [20-readonly-immutable.ts](20-readonly-immutable.ts) (Readonly; Partial)  
  *Иммутабельность* - при необходимости внесения изменений в данные ссылочного
  типа создаем копию данных, которую и изменяем.
  Например, создаем копию литерального объекта и меняем в ней свойство.
  Таким образом избавляемся от ошибок, когда в куче объектов меняются данные
  по ссылке, а мы этого даже не знаем
  В следующем примере при помощи "Readonly<IState>" блокируем изменение исходного
  объекта, а при помощи "Partial<IState>" делаем изменяемую копию.

```ts
interface IState {
    data: {};
    tag: string;
}

// let state2: IState = ...""
const state2copy = immutableAction(state2);

function immutableAction(
    state: Readonly<IState>,
) {
    const newState: Partial<IState> = structuredClone(state);
    newState.data = 'modified-any-type-value';
    return newState;
}
```

* [30-required.ts](30-required.ts)
  Required - встроенный generic для того, чтобы сделать необязательные поля
  класса обязательными.
  Противоположность Partial.

```ts
interface IState {
    tag?: string;
}

let
    strictState: Required<IState> = {
        tag: 'strictState',
    }
;

console.log('-- strictState', strictState);
//strictState.tag = undefined; // error TS2322: Type 'undefined' is not assignable to type 'string'.
```