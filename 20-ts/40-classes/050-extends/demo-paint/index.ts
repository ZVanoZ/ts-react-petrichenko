(() => {
    class TPosition {
        x: number = 0;
        y: number = 0;

        constructor(
            x: number,
            y: number
        ) {
            this.x = x;
            this.y = y;
        }
    }

    class TFigure {
        protected _name: string = 'TFigure';
        get name(): string {
            return this._name;
        }

        protected _position: TPosition = new TPosition(0, 0);
        get position(): TPosition {
            return this._position;
        }

        set position(value: TPosition) {
            this._position = value;
        }

        public draw(): void {
            console.log('TFigure.draw', `${this._name} at [${this.position.x}, ${this.position.y}]`);
        }
    }

    class TPoint extends TFigure {
        protected _name: string = 'TPoint';
        color: string = 'red';

        override draw() {
            super.draw();
            console.log('TPoint.draw:', `color: ${this.color}`);
        }
    }

    class TRectangle extends TFigure {
        protected _name: string = 'TRectangle';
        private _width: number = 0;
        private _height: number = 0;


        get height(): number {
            return this._height;
        }

        set height(value: number) {
            this._height = value;
        }

        get width(): number {
            return this._width;
        }

        set width(value: number) {
            this._width = value;
        }


        override draw() {
            super.draw();
            console.log('TRectangle.draw:', `width: ${this._width}, height: ${this._height}`);
        }
    }

    class TSquare extends TRectangle {
        protected _name: string = 'TSquare';

        set side(value: number) {
            super.height = value;
            super.width = value;
        }

        override set height(value: number) {
            this.side = value;
        }

        override set width(value: number) {
            this.side = value;
        }

        override draw(): void {
            super.draw();
            console.log('TSquare.draw:', `side: ${super.width}`);
        }
    }

    (() => {
        console.log('-- TPoint');
        let figure = new TPoint();
        figure.draw();

        console.log('-- TPoint/change-pos-1');
        figure.position.x = 3;
        figure.position.y = 7;
        figure.draw();

        console.log('-- TPoint/change-pos-2');
        figure.position = new TPosition(50, 100);
        figure.draw();

        console.log('-- TPoint/change-color');
        figure.color = 'blue';
        figure.draw();
    })();


    (() => {
        console.log('-- TRectangle');
        let figure = new TRectangle();
        figure.position.x = 10;
        figure.position.y = 5;
        figure.width = 100;
        figure.height = 200;
        figure.draw();
    })();

    (() => {
        console.log('-- TSquare');
        let figure = new TSquare();
        figure.position.x = 20;
        figure.position.y = 30;
        figure.width = 100;
        figure.height = 200;
        figure.draw();
    })();
})();