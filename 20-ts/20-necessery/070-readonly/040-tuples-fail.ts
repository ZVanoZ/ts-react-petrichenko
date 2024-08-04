/**
 * Использование модификатора "readonly" при объявлении кортежей.
 *
 * Результат: выдаст ошибку на этапе компиляции.
 * Причина: пытаемся присвоить значение элементу кортежа, который объявлен с модификатором "readonly".
 */
(
    () => {
        let
            ports: readonly [number, ...string[]] = [3000, '3001', '5555']
        ;
        ports[0] = -123; // error TS2540: Cannot assign to '0' because it is a read-only property.
        ports.push(-123) // error TS2339: Property 'push' does not exist on type 'readonly [number, ...string[]]'.

        console.log('ports', ports);
    }
)();
