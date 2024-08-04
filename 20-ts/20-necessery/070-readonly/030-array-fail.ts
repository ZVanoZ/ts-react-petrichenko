/**
 * Использование модификатора "readonly" при объявлении массивов.
 *
 * Результат: выдаст ошибку на этапе компиляции.
 * Причина: пытаемся присвоить значение элементу массива, который объявлен с модификатором "readonly".
 */
(
    () => {
        let
            ports: readonly number[] = [3000, 3001, 5555]
        ;
        ports[0] = -123; // error TS2542: Index signature in type 'readonly number[]' only permits reading.
        ports.push(-123) // error TS2339: Property 'push' does not exist on type 'readonly number[]'.

        console.log('ports', ports);
    }
)();
