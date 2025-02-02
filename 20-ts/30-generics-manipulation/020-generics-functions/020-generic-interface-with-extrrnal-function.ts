/**
 * В этом примере:
 *
 * 1. демонстрируем использование generic-функции getErrorMessageFunction
 * в качестве метода объекта "log.getErrorMessage".
 * Важно чтобы объявление функции getErrorMessageFunction совпадало по
 * сигнатуре с ILog.getErrorMessage
 *
 * 2. Демонстрируем использование generic-аункции normalizeErrorFunction
 * в качестве источника сигнатуры для метода "ILog.normalizeError",
 * а затем использование этой функции для объявления метода "log.normalizeError".
 * Важно чтобы все эти элементы были совместимы по типу.
 */
import {testValues} from "./test-values";

(
    () => {
        function normalizeErrorFunction<T>(err: T): T {
            // ...Что-то делаем с "err".
            return err;//
        }

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

        interface ILog {
            normalizeError: typeof normalizeErrorFunction;
            getErrorMessage<T>(err: T): string;
        }

        const
            log: ILog = {
                normalizeError: normalizeErrorFunction,
                getErrorMessage: getErrorMessageFunction
            }
        ;
        testValues.values.forEach((value) => {
            value = log.normalizeError(value);
            console.log(log.getErrorMessage(value));
        });
        /*
2024-10-14T07:59:04.744Z exception with class <Error> and message <test error class>
2024-10-14T07:59:04.745Z error code <123>
2024-10-14T07:59:04.745Z error message <test error string>
2024-10-14T07:59:04.745Z Unknown error type
2024-10-14T07:59:04.745Z Unknown error type
2024-10-14T07:59:04.745Z Unknown error type
        */
    }
)();
