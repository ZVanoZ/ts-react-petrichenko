/**
 * Автор рассказывает о том, что TSC не позволяет передавать в качестве
 * параметров с типом enum строковый литерал, соответствующий элементу
 * перечисления.
 *
 * На мой взгляд он в корне не прав.
 * Это очень хорошо, что TSC выдает ошибку.
 * Нужно рассматривать enum именно как тип данных с неизвестным внутренним устройством.
 * Пофиг на то, что он компилится в JS со спроковыми литералами.
 * 1. В будущем ситуация может поменяться и в JS введут нативный enum.
 * 2. В данный момент могут быть компиляторы TS в бинарники под Windows или Linux.
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
            tFunc: TimingFunc
        ): void {
            console.log('animate', arguments);
        }
        animate('el-id-1', TimingFunc.LINEAR); // OK.
        animate('el-id-1', 'linear'); //  error TS2345: Argument of type '"linear"' is not assignable to parameter of type 'TimingFunc'.
    }
)();

// (
//     () => {
//     }
// )();