import {testValues} from './test-values';

/**
 * В этом примере:
 *
 * 1. Демонстрируем объявление generic-функции через используя interface IErrorMessageFunction
 * Ранее мы делали такое через type {@link 20-ts/20-necessery/020-interface/index.ts}
 *
 * 2. Демонстрируем объявление generic-функции используя type TErrorMessageFunction
 */
(
    () => {
        /**
         * Пример использования generic для формирования строки лога на основании данных разного типа
         * @note: возвращаемый generic-методом тип может быть статичным (в данном случае string)
         */
        function getErrorMessageFunction<T>(
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

        interface IErrorMessageFunction {
            <T>(data: T): string
        }

        type TErrorMessageFunction = <T>(data: T) => string;

        interface ILog {
            getErrorMessage1: IErrorMessageFunction;
            getErrorMessage2: TErrorMessageFunction;
        }

        const
            fTErrorMessageFunction: TErrorMessageFunction = getErrorMessageFunction,
            fIErrorMessageFunction2: IErrorMessageFunction = getErrorMessageFunction,
            log: ILog = {
                getErrorMessage1: getErrorMessageFunction,
                getErrorMessage2: getErrorMessageFunction,
            }
        ;
        console.log('-- log.getErrorMessage1');
        testValues.values.forEach(
            (value) => {
                console.log(log.getErrorMessage1(value));
            }
        );
        console.log('-- log.getErrorMessage2');
        testValues.values.forEach(
            (value) => {
                console.log(log.getErrorMessage2(value));
            }
        );

        /*
-- log.getErrorMessage1
2024-10-14T08:28:39.480Z exception with class <Error> and message <test error class>
2024-10-14T08:28:39.480Z error code <123>
2024-10-14T08:28:39.480Z error message <test error string>
2024-10-14T08:28:39.480Z Unknown error type
2024-10-14T08:28:39.480Z Unknown error type
2024-10-14T08:28:39.480Z Unknown error type
-- log.getErrorMessage2
2024-10-14T08:28:39.481Z exception with class <Error> and message <test error class>
2024-10-14T08:28:39.481Z error code <123>
2024-10-14T08:28:39.481Z error message <test error string>
2024-10-14T08:28:39.481Z Unknown error type
2024-10-14T08:28:39.481Z Unknown error type
2024-10-14T08:28:39.481Z Unknown error type
*/
    }
)();
