/**
 *
 */
(
    () => {
        /**
         * Пример использования generic для формирования строки лога на основании данных разного типа
         * @note: возвращаемый generic-функцией тип может быть статичным (в данном случае string)
         */
        function getErrorMessage<T>(
            err: T
        ): string {
            var now = new Date(),
                result = now.toISOString() + " "
            ;
            if (err instanceof Error) {
                result += `exception with class <${err.name}> and message <${err.message}>`;
            } else {
                switch (typeof err) {
                    case 'number':
                        result += `error code <${err}>`;
                        break;
                    case "string" :
                        result += `error message <${err}>`;
                        break;
                    default:
                        result += 'Unknown error type'
                }
            }

            return result;
        }

        console.log(getErrorMessage(new Error('test error class'))); // 2024-09-27T05:29:41.388Z exception with class <Error> and message <test error class>
        console.log(getErrorMessage(123));                       // 2024-09-27T05:29:41.389Z error code <123>
        console.log(getErrorMessage('test error string'));       // 2024-09-27T05:29:41.389Z error message <test error string>
        console.log(getErrorMessage(null));                      // 2024-09-27T05:31:12.673Z Unknown error type
        console.log(getErrorMessage(undefined));                 // 2024-09-27T05:31:12.673Z Unknown error type
        console.log(getErrorMessage(true));                      // 2024-09-27T05:31:12.673Z Unknown error type

        /**
         * Пример использования generic типа для объявления массива этого типа
         * @param {T[]} errors - массив данных типа T
         */
        function getErrorsMessage<T>(
            errors: T[]
        ): string[] {
            let
                result: string[] = []
            ;
            errors.forEach((err) => {
                result.push(getErrorMessage(err));
            })
            return result;
        }

        console.log(getErrorsMessage([
            new Error('test error class'),
            123,
            'test error string',
            null,
            undefined,
            true
        ]));
        /* Результат
        [
          '2024-09-27T05:41:17.835Z exception with class <Error> and message <test error class>',
          '2024-09-27T05:41:17.835Z error code <123>',
          '2024-09-27T05:41:17.835Z error message <test error string>',
          '2024-09-27T05:41:17.835Z Unknown error type',
          '2024-09-27T05:41:17.835Z Unknown error type',
          '2024-09-27T05:41:17.835Z Unknown error type'
        ]
        */

        /**
         * В этом примере объявляем сигнатуру generic-функции
         * Идиотизм в том, что нам приходится повторять сигнатуру при описании функции.
         * Однако, если мы ошибемся при написании функции, то TSC выдаст ошибку при компиляции.
         *
         * Обращаем внимание на то, что мы можем указать дополнительные типы generic <T2,T3>, но
         * не сможем их использовать.
         */
        type TFunction_GetErrorsMessage = <T>(errors: T[]) => string[];
        const
            getErrorsMessage2: TFunction_GetErrorsMessage = function<T,T2,T3>(
                errors: T[] //
            ): string[] {
                return getErrorsMessage(errors);
            }
        ;
        console.log(getErrorsMessage2([
            new Error('test error class'),
            123,
            'test error string',
            null,
            undefined,
            true
        ]));

    }
)();
