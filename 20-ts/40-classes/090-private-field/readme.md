# About

https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/88

Описание эпизода

В этом уроке мы поговорим про относительно новую возможность в JS

Ресурсы:

* EN [В документации](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)

# Demo

* [index.ts](demo/index.ts[demo-js.js](demo/demo-js.js))

```js
 class Demo {
    myPublicProperty = 'aaa';
    #myPrivateProperty = 'bbb';

    getPrivateProperty() {
        return this.#myPrivateProperty;
    }

    getInfo() {
        return `Demo.getInfo: myPublicProperty="${this.myPublicProperty}"; myPrivateProperty="${this.#myPrivateProperty}"`;
    }
}

class DemoChild extends Demo {
    getInfo() {

        let privateProperty;

        // Из потомков нельзя обращаться к приватным полям.
        // SyntaxError: Private field '#myPrivateProperty' must be declared in an enclosing class
        //privateProperty = this.#myPrivateProperty;

        privateProperty = this.getPrivateProperty();

        return `DemoChild.getInfo: myPublicProperty="${this.myPublicProperty}"; getPrivateProperty="${privateProperty}"`;
    }
}
```

* [es2021](demo/es2021)

Компилировать

```bash
../../node_modules/.bin/tsc  --project ./demo/es2021/tsconfig.json
```

Опция "target": "ES2021" создает приватные поля через WeakMap

* [tsconfig.json](demo/es2021/tsconfig.json)
* [index.js](demo/es2021/index.js)

```js
_Demo_myPrivateProperty = new WeakMap();
```

* [es2022](demo/es2022)

Компилировать

```bash
../../node_modules/.bin/tsc  --project ./demo/es2022/tsconfig.json
```

Опция "target": "ES2022" генерирует нативные приватные поля JS.

* [tsconfig.json](demo/es2022/tsconfig.json)
* [index.js](demo/es2022/index.js)

```js
class Demo {
    #myPrivateProperty = 'bbb';
}
```

* [es2023](demo/es2023)

Компилировать

```bash
../../node_modules/.bin/tsc  --project ./demo/es2023/tsconfig.json
```

Опция "target": "ES2023" генерирует такой же код, как и "ES2022"

* [tsconfig.json](demo/es2023/tsconfig.json)
* [index.js](demo/es2023/index.js)
