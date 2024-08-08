/**
 * Пример показывает как правильно использовать переменную типа "unknown" в качестве аргумента функции.
 * А также, показано что тип "any" не позволит поймать ошибки типизации на этапе компиляции.
 */
(
    () => {
        fetchUnknownData('test-string', 'Hello'); // hello
        fetchAnyData('test-string', 'Hello');     // hello

        fetchUnknownData('test-number', 123); // Unsupporded data value with a type "number"
        fetchAnyData('test-number', 123);     // TypeError: data.toLowerCase is not a function

        fetchUnknownData('test-object', {});  // Unsupporded data value with a type "object"
        fetchAnyData('test-object', {});      // TypeError: data.toLowerCase is not a function

        fetchUnknownData('test-array', []);   // Unsupporded data value with a type "object"
        fetchAnyData('test-array', []);       // TypeError: data.toLowerCase is not a function

        function fetchUnknownData(
            tag: string,
            data: unknown
        ): void {
            console.log('-- fetchUnknownData:', tag);

            // Напрямую использовать "data" как строку не получится т.к. компилятор выдаст ошибку
            // console.log(data.toLowerCase()); //  error TS2339: Property 'toLowerCase' does not exist on type 'unknown'.

            // Правильный подход это проверка типа перед использованием.
            if (typeof data === 'string') {
                console.log(data.toLowerCase());
            } else {
                console.log('Unsupporded data value with a type "' + typeof data + '"');
            }
        }

        function fetchAnyData(
            tag: string,
            data: any
        ): void {
            console.log('-- fetchAnyData:', tag);
            try {
                console.log(data.toLowerCase());
            } catch (e) {
                console.log(e);
            }
        }

    }
)();
