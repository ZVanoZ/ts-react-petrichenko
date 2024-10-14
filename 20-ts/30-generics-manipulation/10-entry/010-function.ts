/**
 * Пример Generic с функцией.
 */
(
    () => {
        /**
         * Если функция может принимать данные разных типов, то мы можем объявить тип через union.
         * Так мы поступали раньше.
         * Но есть способ лучше и он применени ниже в функции processedDataGeneric
         * @param data
         */
        function processedDataUnion(
            data: string | number | boolean | string[]
        ): string | number | boolean | string[] //
        {
            console.log('processedDataUnion/typeof data:', typeof data, data);
            return data;
        }

        processedDataUnion(123);                     // processedDataUnion/typeof data: number 123
        processedDataUnion('some-string');           // processedDataUnion/typeof data: string some-string
        processedDataUnion(true);                    // processedDataUnion/typeof data: boolean true
        processedDataUnion(['Hello', 'world', '!']); // processedDataUnion/typeof data: object [ 'Hello', 'world', '!' ]

        /**
         * Тут мы объвили тип через Generic.
         * Ниже пример использования такой функции.
         * @param data
         */
        function processedDataGeneric<T>(data: T): T {
            console.log('processedDataGeneric/typeof data:', typeof data, data);
            return data;
        }

        processedDataGeneric(123);                     // processedDataGeneric/typeof data: number 123
        processedDataGeneric<number>(123);             // processedDataGeneric/typeof data: number 123
        processedDataGeneric('some-string');           // processedDataGeneric/typeof data: string some-string
        processedDataGeneric(true);                    // processedDataGeneric/typeof data: boolean true
        processedDataGeneric<boolean>(true);           // processedDataGeneric/typeof data: boolean true
        processedDataGeneric(['Hello', 'world', '!']); // processedDataGeneric/typeof data: object [ 'Hello', 'world', '!' ]
        processedDataGeneric(new Date());                   // processedDataGeneric/typeof data: object 2024-09-17T05:46:58.733Z
        const
            now=  processedDataGeneric<Date>(new Date())
        ;
        console.log('now instanceof Date:', now instanceof Date);   // now instanceof Date: true
        console.log('now instanceof Array:', now instanceof Array); // now instanceof Array: false

        // @TODO: разобраться с использованием сигнатуры функции совместно с Generic. Возможно, это описано в следующих лекциях.
        // type TPrintAge = <TName, TAge>() => string;
        // const printAge:TPrintAge(
        //         name:TName,
        //         age:TAge
        //     ):string //
        //     {}
        // ;
    }
)();
