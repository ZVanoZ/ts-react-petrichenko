# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/79)

Введение в этот модуль

Как и с другими возможностями JS, TypeScript отлично работает с классами и предоставляет удобные инструменты для этого. Для прохождения этого модуля:

Необходимо знать, что такое классы (ES6) и понимать как они работают.
Если вдруг подзабыли, то освежить знания или даже быстро их изучить можно вот тут: ссылка (и еще 6 последовательных ссылок дальше по топику)


Желательно понимать основы ООП. Я не говорю, что нужно от корки до корки прочитать книгу на 1000 страниц, но базовые понятия желательно знать.

Простым языком почитать можно тут: ссылка (ru ссылка, может быть заблокирована. Размещу копию текста ниже для ознакомления)
Чуть сложнее будет на вики: ссылка
Коротко, сложновато, не до конца раскрыто, но с некоторыми идеями соглашусь: ссылка

Конечно, я буду стараться раскрыть эти моменты и в уроках, но восприниматься будет проще, если вы это уже читали.

Если говорить про классы в целом, то они могут использоваться много где (библиотеки, фреймворки),но все будет зависеть от конкретного проекта. И бывает так, что вы с ними и не столкнетесь. Так как сейчас тренд больше на функциональщину (React Hooks как яркий пример) И стоит сказать, что на бекенде классов сейчас побольше :) А TypeScript проник и туда.

Так что знать эту тему нужно, а с базовыми знаниями она зайдет в голову довольно быстро.

## Ссылки

* RU: [классы (ES6)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
* RU: [Объектно-ориентированное программирование (ООП)](https://blog.skillfactory.ru/glossary/oop-obektno-orientirovannoe-programmirovanie/)
* RU: [WIKI: Объектно-ориентированное программирование](https://ru.wikipedia.org/wiki/Объектно-ориентированное_программирование)
* RU: [Habr: Принципы объектно-ориентированного программирования](https://habr.com/ru/companies/otus/articles/525336/)

## Конспект

* Классы ES6

```js
   class Rectangle {
    static displayName = "-Rectangle-";

    static getName() {
        return this.displayName;
    }

    // Символ "#" для private свойства
    #height = 1;
    
    // Символ "_" для условного protected свойства. Доступ к свойству никак не ограничен.
    _width = 1;

    constructor(height, width) {
        console.log('Rectangle.constructor', arguments);
        this.#height = height;
        this._width = width;
    }

    get width() {
        console.log('Rectangle.width get', arguments);
        return this._width;
    }

    set width(value) {
        console.log('Rectangle.width set', arguments);
        this._width = value;
    }

    get area() {
        console.log('Rectangle.area get', arguments);
        return this.calcArea();
    }

    calcArea() {
        console.log('Rectangle.calcArea', arguments);
        return this.#height * this._width;
    }
}

class Square extends Rectangle {
    static displayName = "-Square-";

    constructor(size) {
        console.log('Square.constructor', arguments);
        super(size, size);
    }

    set width(value) {
        console.log('Square.width set', arguments);
        super._width = value;
        super.height = value;
    }
}
```