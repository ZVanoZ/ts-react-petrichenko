/**
 * Автор рассказывает о том, что можно заменить enum перечислением.
 */
(
    () => {
        type TimingFunc = 'ease' | 'ease-in' | 'linear';

        function animate(
            elem: string,
            tFunc: TimingFunc
        ): void {
            console.log('animate', arguments);
        }

        animate('el-id-1', 'ease');
    }
)();

// (
//     () => {
//     }
// )();