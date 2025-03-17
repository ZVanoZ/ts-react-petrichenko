# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/72)

В этом уроке мы разберем часть вспомогательных типов

Ресурсы:

Список типов в документации [EN: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

Частично в
руководстве [RU: Exclude, Extract, NonNullable, ReturnType, InstanceType, Omit](https://scriptdev.ru/guide/045/)

## Конспект

* [10-interface.ts](10-interface.ts)  
  Omit - удалить свойство из объекта.
  Pick - оставить указанные свойства из перечисления.
  Exclude - удалить указанные свойства из перечисления.

```typescript
interface Currencies {
    kz: 'tenge';
    ukraine: "uah";
    usa: "usd";
}

type TCurrency = Omit<Currencies, 'usa'>;             // Удаляем свойство 'usa'
const currency: TCurrency = {
    kz: "tenge",
    ukraine: "uah"
};

type TKeysOfCurrencies = keyof Currencies;            // "kz" | "ukraine" | "usa"
type TCurrency = Pick<Currencies, 'usa' | 'ukraine'>; // 'usa' | 'ukraine'      // оставить указанные свойства
type TCurrency = Exclude<keyof Currencies, 'usa'>;    // "kz" | "ukraine"       // удалить указанные свойства из перечисления.
```
* [20-union.ts](20-union.ts)  
```typescript
type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';

type TAnimation = Exclude<MyAnimation, 'swipe'>; // Удаляем 'swipe' из перечисления

type TAnimation1 = Extract<MyAnimation, 'swipe'>;             // Извлечь 'swipe' из MyAnimation
type TAnimation2 = Extract<MyAnimation | Direction, 'swipe'>; // Извлечь 'swipe' из MyAnimation и Direction
```
* [30-record-simple.ts](30-record-simple.ts)  
  "Record<A, B>" позволяет получить комбинированный тип данных.
```typescript
interface TPlayerInfo {
  playerCountry : string;
  playerLogin : string;
  playerServerName: string;
}
type PlayerNames = 'alex' | 'john';

// Record<A, B>
// Создать объектный тип.
// Названия ключей взять из 'PlayerNames'. Получится {'alex' : ... , 'john' : ...}
// Тип данных для каждого ключа взять из TPlayerInfo
type TPlayers = Record<PlayerNames, TPlayerInfo>;

const players: TPlayers = {
  alex: {
    playerCountry : 'Ukraine',
    playerLogin : 'alex81',
    playerServerName: 'server-123'
  },
  john: {
    playerCountry : 'USA',
    playerLogin : 'john71',
    playerServerName: 'server-123'
  }
};
```
* [30-record-transform.ts](30-record-transform.ts)
  В этом примере тип TPlayerInfo получается путем трансформации  
  IPlayerInfo -> PlayerTransformGeneric -> TPlayerInfo