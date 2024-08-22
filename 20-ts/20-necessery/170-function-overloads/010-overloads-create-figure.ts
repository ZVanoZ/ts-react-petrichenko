/**
 * Объявляем функцию createFigure, которая имеет две перегрузки.
 */
(
    () => {
        interface FigureI {
            name: string;
        }

        interface SquareI extends FigureI {
            side: number;
        }

        interface RectI extends FigureI {
            side1: number;
            side2: number;
        }

        // Перегрузка 1
        function createFigure(
            side: number,
        ): SquareI;

        // Перегрузка 2
        function createFigure(
            side1: number,
            side2: number
        ): RectI;

        // Основное тело функции
        function createFigure(
            side1: number,
            side2 ?: number
        ): RectI | SquareI {
            if (side2) {
                const
                    result: RectI = {
                        name: "RectI",
                        side1: side1,
                        side2: side2
                    }
                ;
                return result;
            } else {
                const
                    result: SquareI = {
                        name: 'SquareI',
                        side: side1
                    }
                ;
                return result;
            }
        }


        console.log(createFigure(10));
        console.log(createFigure(10, 20));
    }
)();
