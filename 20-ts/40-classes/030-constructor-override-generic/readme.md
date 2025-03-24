# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/81)

В этом уроке мы поговорим про конструкторы и их перегрузки

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors)

## Конспект

* [10-error-without-parent.ts](10-constructor-super/10-error-without-parent.ts)

Нельзя использовать super в классе без родителя

```typescript
class User {
    constructor() {
        super(); // error TS2335: 'super' can only be referenced in a derived class.
    }
}
```

* [20-error-this-before-super.ts](10-constructor-super/20-error-this-before-super.ts)

Нельзя обращаться к this до вызова родительского конструктора.

```typescript
    class User {
    constructor() {
    }
}

class UserIvan extends User {
    name: string;

    constructor(
        initName: string = 'Ivan'
    ) {
        this.name = 'Ivan'; // error TS17009: 'super' must be called before accessing 'this' in the constructor of a derived class.
        super();
    }
}
```

* Правильное использование super в конструкторе

@see [30-valid-usage-super.ts](10-constructor-super/30-valid-usage-super.ts)

* [index.ts](20-override/index.ts)

Пример перегрузки конструктора.

Сначала пишем все сигнатуры без тела, а затем пишем универсальный конструктор с телом.
В этом конструкторе мы должны проверить все возможные комбинации типов, чтобы определить
по какой перегрузке выполнен вызов.

```typescript
    class Box {
    width: number = 0;
    height: number = 0;

    constructor(side: number);
    constructor(width: number, height: number);
    constructor(config: string);

    constructor(
        widthOrConfig: number | string,
        height?: number
    ) {
        if (typeof widthOrConfig === 'string') {
            this.createByConfig(widthOrConfig);                  // constructor(string)
        } else if (typeof height === 'number') {
            this.createByWidthAndHeight(widthOrConfig, height);  // constructor(number, number)
        } else {
            this.createBySide(widthOrConfig);                    // constructor(number)
        }
    }

    // ...
}
```

* [index.ts](30-generic/index.ts)

Пример использования Generic в конструкторе класса.
```typescript
    class Box<T> {
    height?: number;
    width?: number;

    constructor(
        config: T
    ) {
        if (config instanceof TConfigSide) {
            this.createBySide(config.side);
        } else if (config instanceof TConfigWH) {
            this.createByWidthAndHeight(config.width, config.height);
        } else {
            throw new Error('Unexpected config type');
        }
    }

    //...
}
```
