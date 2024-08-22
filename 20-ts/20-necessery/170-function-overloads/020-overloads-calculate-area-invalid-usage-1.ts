/**
 * Пример некорректного использование перегрузки.
 *
 * Те, кто знаком с C++ могут подумать что перегрузка это механихм полиморфизма.
 * Это не так.
 * В TS нельзя указать тело каждой функции.
 * Будет ошибка компилятора с текстом "error TS2393: Duplicate function implementation"
 *
 */
import {
    RectI,
    SquareI,
    Square
} from './020-types';

(
    () => {
        // Этот вариант будет переопределен далее
        function calculateArea(
            figure: SquareI
        ): number {
            return figure.side * figure.side;
        }

        // Тут происходит переопределение calculateArea, вместо декларации перегрузки
        function calculateArea(
            figure: RectI
        ): number {
            return figure.side1 * figure.side2;
        }

        console.log('Square area:', calculateArea(new Square(10)));
    }
)();
