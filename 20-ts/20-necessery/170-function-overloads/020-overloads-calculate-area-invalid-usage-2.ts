/**
 * Пример некорректного использование перегрузки.
 *
 * TSC не позволяет использовать массивы объектов базового класса(интерфейса) с перегруженными функциями.
 */
import {
    FigureI,
    Rect,
    RectI,
    Square,
    SquareI
} from "./020-types";

(
    () => {
        function calculateArea(
            figure: SquareI
        ): number;

        function calculateArea(
            figure: RectI
        ): number;

        function calculateArea(
            figure: Square
        ): number;

        function calculateArea(
            figure: Rect
        ): number;

        //-- Вот так работает
        // function calculateArea(
        //     figure: FigureUnion
        // ): number;

        function calculateArea(
            figure: FigureI
        ): number {
            if (figure instanceof Rect) {
                return figure.side1 * figure.side2;
            } else if (figure instanceof Square) {
                return figure.side * figure.side;
            }
            throw new Error('Invalid class of the figure')
        }

        type FigureUnion = SquareI | RectI;

        const
            figures1 = [
                new Square(10),
                new Rect(10, 20)
            ],
            figures2: FigureUnion[] = [
                new Square(10),
                new Rect(10, 20)
            ]
        ;
        console.log('Figure area:', calculateArea(figures1[0])); // error TS2769: No overload matches this call.
        console.log('Figure area:', calculateArea(figures2[0])); // error TS2769: No overload matches this call.

        figures1.forEach( //
            (figure) => {
                console.log('Figure area:', calculateArea(figure), figure); // error TS2769: No overload matches this call.
            }
        );
    }
)();
