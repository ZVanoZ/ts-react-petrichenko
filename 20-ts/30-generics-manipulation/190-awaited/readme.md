# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/77)

В этом уроке мы познакомимся с самым новым из вспомогательных типов

Ресурсы:

[В документации](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)

## Конспект

Awaited появился в TS 4.5

До этого использовали  ReturnType + "Generic infer"
@see [30-infer.ts](../120-conditional-types-and-infer/30-infer.ts)
@see [10-ReturnType,Parameters.ts](../170-utility-types/10-ReturnType,Parameters.ts)

*  [10-demo.ts](10-demo-json-parse-not-check.ts)
```typescript
type T1 = Awaited<Promise<number>>; // Initial type: number

interface IUser {
  name: string;
}
async function fetchUsers(): Promise<IUser[]> {}

const users1: Promise<IUser[]> = fetchUsers();
console.log('#users1#', users1); // #users1# Promise { [ { name: 'Alex' } ] }

const users2: IUser[] = await fetchUsers();
console.log('#users2#', users2); // #users2# [ { name: 'Alex' } ]

type TFetchUsersResult = ReturnType<typeof fetchUsers>;   // Promise<IUser[]>
type TFetchUsersAwaitResult = Awaited<TFetchUsersResult>; // IUser[]
const users3: TFetchUsersAwaitResult = await fetchUsers();//
console.log('#users3#', users3); // #users3# [ { name: 'Alex' } ]

type OldTsAwaiter<T> = T extends Promise<infer TResult> ? TResult : T;
type TFetchUsersExtractedResult = OldTsAwaiter<TFetchUsersResult>; // IUser[]
const users4: TFetchUsersExtractedResult = await fetchUsers();//
console.log('#users4#', users4); // #users4# [ { name: 'Alex' } ]

```
