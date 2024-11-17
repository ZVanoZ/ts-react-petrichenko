/**
 * Объявляем сигнатуру generic-функции через interface.
 *
 * В данном примере объявляем интерфейс функции "MyFunctionInterface".
 * Этот интерфейс говорит
 * 1. функция принимает один параметр с именем "param1" и этот параметр
 * имеет подстановочный(generic) тип T1.
 * 2. функция возвращает результат типа TResult, который тоже является подстановочным(generic)
 *
 * Затем используем интерфейс для создания экземпляра функции "f1" с указанием
 * реальных типов данных.
 * 1. параметр param1 получил реальный тип "number"
 * 2. результат функции получил реальный тип данных "string"
 */
(() => {
    interface MyFunctionInterface<T1, TResult> {
        (param1: T1): TResult;
    }

    var
        f1: MyFunctionInterface<number, string> = (
            param1
        ) => {
            console.log('f1/param1', param1);
            return 'result-' + param1;
        }
    ;
    console.log('f1/result', f1(123));
    /* Результат
    f1/param1 123
    f1/result result-123
    */
})();
