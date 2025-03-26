# lection-85

https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/85

Описание эпизода

В этом уроке мы поговорим про имплементацию классов

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)

* RU [В руководстве](https://scriptdev.ru/guide/021/#implements)

## Конспект

1. ...[index.ts](demo/index.ts)

Имплементация интерфейсов такая же, как в других C++ подобных языках.

```typescript
interface IUser {
    login: string;
    password: string;
}

interface IValidate {
    isValid: boolean;

    validate(data?: string): boolean;
}

class UserForm implements IUser, IValidate {
    login: string = '';
    password: string = '';
    isValid: boolean = true;

    validate(data?: string): boolean {
        //...
    }
}
```
