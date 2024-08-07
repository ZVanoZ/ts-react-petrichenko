/**
 * Автор рассказывает о том, что можно заменить enum константным объектом.
 */
(
    () => {
        const
            TimingFunc = {
                EASE: 'ease',
                EASE_IN: 'ease-in',
                LINEAR: 'linear'
            } as const
        ;

        //---------------------------------------------------------------------

        function animate(
            elem: string,
            tFunc: keyof typeof TimingFunc
        ): void {
            console.log('animate', arguments);
        }
        animate('el-id-1', 'EASE');

        //---------------------------------------------------------------------

        type TimingFuncUnion = keyof typeof TimingFunc;
        function animate2(
            elem: string,
            tFunc: TimingFuncUnion
        ): void {
            console.log('animate2', arguments);
        }
        animate2('el-id-1', "LINEAR");

        //---------------------------------------------------------------------

        type TimingFuncUnion2 =  typeof TimingFunc[keyof typeof TimingFunc];
        function animate3(
            elem: string,
            tFunc: TimingFuncUnion2
        ): void {
            console.log('animate3', arguments);
        }
        animate3('el-id-1', TimingFunc.EASE_IN);

        //---------------------------------------------------------------------
    }
)();

// (
//     () => {
//     }
// )();