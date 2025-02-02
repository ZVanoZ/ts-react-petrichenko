/**
 * В этом файле решаем задачу при помощи утверждения типа (type-assertions)
 * @see 20-ts/20-necessery/130-type-assertions
 * <code class="TS">
 *   let item : IFigure = itemObj as IFigure;
 * </code>
 */
//-----------------------------------------------------------------------------
// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными должно в консоль попадет:
// { squares: 3, circles: 2, triangles: 2, others: 1 }
//-----

enum FigureEnum {
    RECT = 'rect',
    TRIANGLE = 'triangle',
    LINE = 'line',
    CIRCLE = 'circle',
    SQUARE = 'square',
}

interface IRectData {
    a: number;
    b: number;
}

interface ITriangleData {
    a: number;
    b: number;
    c: number;
}

interface ILineData {
    l: number;
}

interface ICircleData {
    r: number;
}

type TFigureData = ILineData | IRectData | ITriangleData | ICircleData;

interface IFigure {
    name: FigureEnum;
    data?: TFigureData;
}

interface AmountOfFigures {
    squares: number;
    circles: number;
    triangles: number;
    others: number;
}

function calculateAmountOfFigures(
    figure: Object[]
): AmountOfFigures {
    const result: AmountOfFigures = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0
    };
    figure.forEach(
        (
            itemObj: Object
        ) => {
            let item: IFigure = itemObj as IFigure;
            switch (item.name) {
                case FigureEnum.CIRCLE:
                    ++result.circles;
                    break;
                case FigureEnum.TRIANGLE:
                    ++result.triangles;
                    break;
                case FigureEnum.SQUARE:
                    ++result.squares;
                    break;
                case FigureEnum.LINE:
                // go-to-next-case
                default:
                    ++result.others;
                    break;
            }
        }
    );
    return result;
}

const data = [
    {
        name: "rect",
        data: {a: 5, b: 10},
    },
    {
        name: "rect",
        data: {a: 6, b: 11},
    },
    {
        name: "triangle",
        data: {a: 5, b: 10, c: 14},
    },
    {
        name: "line",
        data: {l: 15},
    },
    {
        name: "circle",
        data: {r: 10},
    },
    {
        name: "circle",
        data: {r: 5},
    },
    {
        name: "rect",
        data: {a: 15, b: 7},
    },
    {
        name: "triangle",
    },
];

console.log(calculateAmountOfFigures(data));
