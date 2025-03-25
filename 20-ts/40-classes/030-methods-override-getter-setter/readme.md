# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/82)

В этом уроке мы разберем особенности работы методов в TS и get/set

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)


## Конспект

Пример методов get/set

```typescript
class TFormField {
    protected _validationInterval: number = 0; // Валидация не чаще validationInterval мс

    get validationInterval(): number {
        return this._validationInterval;
    }

    set validationInterval(value: number) {
        if (value < 0) {
            throw new Error('Validation Interval must be greater than 0');
        }
        this._validationInterval = value;
    }
}

const field = new TFormField('login');
field.validationInterval = 250;        // вызов set validationInterval() 
console.log(field.validationInterval); // вызов get validationInterval() 
```