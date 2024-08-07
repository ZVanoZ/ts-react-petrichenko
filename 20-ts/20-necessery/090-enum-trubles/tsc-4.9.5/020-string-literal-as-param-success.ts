/**
 * Автор рассказывает о том, что TSC позволяет передавать в качестве
 * параметра значение  enum, несмотря на то что аргумент объявлен с
 * типом строкового литерала.
 *
 * $ node -v
 * v21.7.1
 *
 * $ tsc -v
 * Version 4.9.5
 */
(
    () => {
        enum TimingFunc {
            EASE = 'ease',
            EASE_IN = 'ease-in',
            LINEAR = 'linear'
        }

        function animate(
            elem: string,
            tFunc: 'linear'
        ): void {
            console.log('animate', arguments);
        }
        animate('el-id-1', TimingFunc.LINEAR); // OK.
    }
)();

// (
//     () => {
//     }
// )();