/**
 * В примере показано, что без модификатора "readonly" можно пееопределить значение порта на недопустимое
 *
 * Результат: выполнится без ошибок
 */
(
    () => {
        let
            ports: number[] = [3000, 3001, 5555]
        ;
        ports[0] = -123;

        console.log('ports', ports);
    }
)();
