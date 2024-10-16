/**
 *
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

        processedDataUnion(new Date());                // error TS2345: Argument of type 'Date' is not assignable to parameter of type 'string | number | boolean | string[]'.

        /**
         * Тут мы объвили тип через Generic.
         * Ниже пример использования такой функции.
         * @param data
         */
        function processedDataGeneric<T>(data: T): T {
            console.log('processedDataGeneric/typeof data:', typeof data, data);
            return data;
        }

        // Ошибка: generic ожидает number, а передаем string
        processedDataGeneric<number>('123'); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

        // Ошибка: generic возвращает number, а сохранить пытаемся в string
        let num1: string = processedDataGeneric<number>(123); //  error TS2322: Type 'number' is not assignable to type 'string'.
    }
)();
