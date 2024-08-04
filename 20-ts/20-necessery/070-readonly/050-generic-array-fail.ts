/**
 * Использование модификатора "ReadonlyArray" при объявлении массивов.
 *
 * Результат: выдаст ошибку на этапе компиляции.
 * Причина: пытаемся присвоить значение массиву, который объявлен с модификатором  ReadonlyArray
 */
(
    () => {
        type TPorts = ReadonlyArray<number>;
        const
            ports1: TPorts = [3000, 3001, 5555],
            ports2: ReadonlyArray<number> = [3000, 3001, 5555]
        ;
        ports1[0] = -123; // error TS2542: Index signature in type 'TPorts' only permits reading.
        ports2[0] = -123; // error TS2542: Index signature in type 'readonly number[]' only permits reading.

        ports1.push(-123); // error TS2339: Property 'push' does not exist on type 'TPorts'.
        ports2.push(-123); // error TS2339: Property 'push' does not exist on type 'readonly number[]'.

        console.log('ports1', ports1);
        console.log('ports2', ports2);
    }
)();

