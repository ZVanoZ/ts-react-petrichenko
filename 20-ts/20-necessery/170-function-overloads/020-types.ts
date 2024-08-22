export interface FigureI {
    figure: string;
}

export interface SquareI
    extends FigureI//
{
    side: number;
}

export class Square
    implements SquareI//
{
    figure: string = 'Square';

    side: number;

    constructor(side: number) {
        this.side = side;
    }
}

export interface RectI
    extends FigureI//
{
    side1: number;
    side2: number;
}

export class Rect
    implements RectI //
{
    figure: string = 'Rect';
    side1: number;
    side2: number;

    constructor(
        side1: number,
        side2: number
    ) {
        this.side1 = side1;
        this.side2 = side2;
    }
}

export type FigureUnion = SquareI | RectI;