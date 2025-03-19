// Синтаксис переключения в строгий режим всего скрипта
"use strict";
(() => {
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

    (() => {
        console.log('-- Rectangle');
        console.log('#Rectangle.displayName#', Rectangle.displayName);
        console.log('#Rectangle.getName()#', Rectangle.getName());
        let rectangle = new Rectangle(10, 10);

        console.log('#rectangle.width#', rectangle.width);
        rectangle._width = 11;// protected свойство условное. Доступ снаружи остается.
        console.log('#rectangle.width#', rectangle.width);

        console.log('#rectangle#', rectangle);
        console.log('#rectangle.area#', rectangle.area);
        console.log('#rectangle.calcArea()#', rectangle.calcArea());
        rectangle.width = 15;
        console.log('#rectangle.calcArea()#', rectangle.calcArea());
    })();

    (() => {
        console.log('-- Square');
        console.log('#Square.displayName#', Square.displayName);
        console.log('#Square.getName()#', Square.getName());
        let square = new Square(5);
        console.log('#square.calcArea()#', square.calcArea());
    })();

})()