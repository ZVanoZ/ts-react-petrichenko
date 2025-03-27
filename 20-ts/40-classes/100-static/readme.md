# About

https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/89

Описание эпизода

В этом уроке мы обсудим статичные сущности в JS и какие у них есть особенности в TS

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)

* EN [Static initialization blocks](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)

* EN [Пример статичных блоков](https://v8.dev/features/class-static-initializer-blocks)

# Demo

* [index.ts](demo/index.ts)

Статические свойства и методы.

```typescript
console.log('-10-');

class Demo {
    static myStaticProperty: string = 'aaa';
    protected static myProtectedStaticProperty: string = 'bbb';
    private static myPrivateStaticProperty: string = 'ccc';

    static getProtectedStaticProperty(): string {
        return Demo.myProtectedStaticProperty;
    }

    static setProtectedStaticProperty(value: string): void {
        Demo.myProtectedStaticProperty = value;
    }

    static getPrivateStaticProperty(): string {
        return Demo.myPrivateStaticProperty;
    }

    static setPrivateStaticProperty(value: string): void {
        Demo.myPrivateStaticProperty = value;
    }

    private constructor() {
    }
}
```

Статические классы отсутствуют.
При попытке объявить статический класс получим ошибку TS1184.

```typescript
console.log('-20-', 'Статические классы отсутствуют');

//  error TS1184: Modifiers cannot appear here.
static class Demo {
};
```

Модификатор доступа к конструктору статического класса.  
Таким образом можно запретить создание экземпляра класса и сделать подобие статического класса.

```typescript
console.log('-30-20-');

class Demo {
    static myStaticProperty: string = 'aaa';

    protected constructor() {
        console.log('Demo.constructor', `myStaticProperty="${Demo.myStaticProperty}"`);
    }
}

class DemoChild extends Demo {
    static myStaticProperty: string = 'aaa';

    constructor() {
        console.log('DemoChild.constructor', `Demo.myStaticProperty="${Demo.myStaticProperty}"`);
        console.log('DemoChild.constructor', `DemoChild.myStaticProperty="${DemoChild.myStaticProperty}"`);
        super();
    }
}
```

Статические блоки в классах

```typescript
console.log('-40-');

class Demo {
    static myStaticProperty: string = 'aaa';
    // Статический блок выполнится один раз при загрузке скрипта
    static {
        console.log('Demo static-block', Demo);
        Demo.myStaticProperty = 'aaa-changed';
        console.log('Demo static-block after-change', Demo);
    }
}
```