/**
 * Решение при помощи typeguard
 * @see 20-ts/20-necessery/150-type-guard
 * @see 20-ts/20-necessery/190-practice-typeguard-interfaces
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

interface ISquareData {
    a: number;
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

type TFigureData = ILineData | IRectData | ISquareData | ITriangleData | ICircleData;

interface IFigure {
    name: FigureEnum;
    data?: TFigureData;
}

interface ITriangle extends IFigure {
    data: ITriangleData;
}

function isTriangle(
    data: Object
): data is ITriangle {
    return 'name' in data && data.name === FigureEnum.TRIANGLE;
}

interface ICircle extends IFigure {
    data: ICircleData;
}

function isCircle(
    data: Object
): data is ICircle {
    return 'name' in data && data.name === FigureEnum.CIRCLE;
}

interface ISquare extends IFigure {
    data: ISquareData;
}

function isSquare(
    data: Object
): data is ISquare {
    return 'name' in data && data.name === FigureEnum.SQUARE;
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
            if (isCircle(itemObj)) {
                ++result.circles;
            } else if (isSquare(itemObj)) {
                ++result.squares;
            } else if (isTriangle(itemObj)) {
                ++result.triangles;
            } else {
                ++result.others;
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
