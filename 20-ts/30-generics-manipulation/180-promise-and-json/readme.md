# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/76)

В этом уроке мы поговорим о том, как правильно работать с запросами и промисами

Ресурсы:

[jsonplaceholder](https://jsonplaceholder.typicode.com/)

[Не очень полезные конструкции](https://stackoverflow.com/questions/38688822/how-to-parse-json-string-in-typescript/62438143#62438143)

[Type-safe Data Fetching](https://www.carlrippon.com/type-safe-data-fetching-with-unknown/)

[Promise](https://github.com/microsoft/TypeScript/blob/main/src/lib/es2015.promise.d.ts)

[Keep Your Promises in TypeScript using async/await](https://blog.bitsrc.io/keep-your-promises-in-typescript-using-async-await-7bdc57041308)

## Конспект

* TypeScript работает при компиляции, поэтому не способен проверить результат JSON.parse  
  [10-demo-json-parse-not-check.ts](10-demo-json-parse-not-check.ts)
```typescript
interface IUser {
    login: string;
    loginedAt: number;
}

const
    jsonText2 = '{"login":"user2", "loginedAt":"3h15m"}'
;

let json: IUser;
json = JSON.parse(jsonText2);
console.log('json-2 typeof json.loginedAt', typeof json.loginedAt);// json.loginedAt string IUser.loginedAt: number
```
* [20-promise-generic.ts](20-promise-generic.ts)  
  В TypeScript Promise является Generic и позволяет проверить тип данных на этапе компиляции.
```typescript
new Promise<string>(
    (resolve, reject) => {
        //return resolve(1); //error TS2345: Argument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string>'.
        return resolve('Hello World!');
    }
).then(
    (res) => {
        console.log('res', res); // res Hello World!
    }
)
```
* [30-fetch.ts](30-fetch.ts)
  Примеры с fetch 