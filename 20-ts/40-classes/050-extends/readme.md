# https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/84

Описание эпизода

В этом уроке мы разберем наследования классов и его особенности в TS

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses)

* RU [В руководстве](https://scriptdev.ru/guide/029/#_3)

## Конспект

1. [demo-paint](demo-paint/index.ts)

Простой пример.

При помощи "override" помечаем переопределенные методы.  
При помощи "super." обращаемся к свойствам и методам родительских классов.

```typescript
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
```

2. [demo-form-field](demo-form-field/index.ts)

Усложненный пример с классами, которые реализуют функционал полей формы ввода данных.

Упор делался на валидацию.  
В базовом классе TFormField базовая валидация.  
В наследниках (TFormFieldPin, TFormFieldLogin) переопределение валидации под целевое назначение полей.   