(
    () => {
        console.log('Демонстрация базовой структуры Enum с числовыми индексами по умолчанию');
        const
            TOP = 'Top',
            RIGHT = 'Right',
            LEFT = 'Left',
            BOTTOM = 'Bottom'
        ;

        enum Directions {
            TOP,    // 0
            RIGHT,  // 1
            LEFT,   // 2
            BOTTOM  // 3
        }
        console.log('Directions', Directions);

        function animate(
            elem: string,
            direction: Directions
        ): void {
            console.log('animate', arguments);
            if (direction === Directions.RIGHT) {
            }
        }

        //animate('el-id-1', RIGHT); //error TS2345: Argument of type '"Right"' is not assignable to parameter of type 'Directions'.
        animate('el-id-1', Directions.RIGHT);
    }
)();
