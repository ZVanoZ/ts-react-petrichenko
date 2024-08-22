import {
    RectI,
    SquareI,
    FigureUnion,
    Rect,
    Square
} from './020-types';

/**
 * Пример перегрузки функции с использованием интерфейсов и классов.
 */
(
    () => {
        function calculateArea(
            figure: SquareI
        ): number;

        function calculateArea(
            figure: RectI
        ): number;

        function calculateArea(
            figure: FigureUnion
        ): number;

        function calculateArea(
            figure: RectI | SquareI
        ): number {
            if (figure instanceof Rect) {
                return figure.side1 * figure.side2;
            } else if (figure instanceof Square) {
                return figure.side * figure.side;
            }
            throw new Error('Invalid class of the figure')
        }

        const
            square1: SquareI = new Square(10),
            rect1: RectI = new Rect(10, 20)
        ;

        console.log('square1 area:', calculateArea(square1), 'of', square1);
        console.log('rect1   area:', calculateArea(rect1), 'of', rect1);

        const
            figures1: (RectI | SquareI)[] = [
                rect1,
                square1
            ],
            figures2: FigureUnion[] = [
                rect1,
                square1
            ]
        ;
        console.log('-- figures1')
        figures1.forEach( //
            (figure) => {
                console.log('Figure area:', calculateArea(figure), figure);
            }
        );

        console.log('-- figures2')
        figures2.forEach( //
            (figure) => {
                console.log('Figure area:', calculateArea(figure), figure);
            }
        );
    }
)();
