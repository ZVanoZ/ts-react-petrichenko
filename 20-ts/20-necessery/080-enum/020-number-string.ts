(
    () => {
        console.log("\
-----\
\n-- Демонстрация:\
\n-- * переопределение числовых значений enum\
\n-- * использование строковых значений enum\
\n\--\
");

        enum Directions {
            TOP = 10,
            RIGHT = 20,
            LEFT = 30,
            BOTTOM = 40
        }
        console.log('Directions', Directions);

        enum TimingFunc {
            EASE = 'ease',
            EASE_IN = 'ease-in',
            LINEAR = 'linear'
        }
        console.log('TimingFunc', TimingFunc);

        function animate(
            elem: string,
            direction: Directions,
            tFunc: TimingFunc
        ): void {
            console.log('animate', arguments);
            if (direction === Directions.RIGHT) {

            }
        }

        animate('el-id-1', Directions.RIGHT, TimingFunc.LINEAR);
    }
)();
