/**
 * Тестируем коллекции из элементов типа Enum.
 */

enum FigureEnum {
    RECT = 'rect',
    TRIANGLE = 'triangle',
    LINE = 'line',
    CIRCLE = 'circle',
    SQUARE = 'square',
}

type FigureList = FigureEnum[];

function display(
    data: FigureList
): void {
    data.forEach(
        (item:FigureEnum)=>{
            console.log('item', item);
        }
    );
}

const
    data1 : FigureList =[
        FigureEnum.CIRCLE,
        FigureEnum.RECT,
        FigureEnum.LINE
    ]
;

display(data1);
