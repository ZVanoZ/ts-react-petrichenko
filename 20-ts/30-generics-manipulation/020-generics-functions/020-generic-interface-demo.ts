/**
 * В этом примере используем generic в интерфейсе класса
 */
import number = CSS.number;
import {testValues} from "./test-values";

(
    () => {
        interface ILog {
            normalizeError<T>(err: T): T;
            getErrorMessage<T>(err: T): string;
        }

        const
            log: ILog = {
                normalizeError<T>(err: T): T {
                    // ...Что-то делаем с "err".
                    return err;// 
                },
                /**

                 * Пример использования generic для формирования строки лога на основании данных разного типа
                 * @note: возвращаемый generic-методом тип может быть статичным (в данном случае string)
                 */
                getErrorMessage: function <T>(
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
            }
        ;
        testValues.values.forEach((value) => {
            value = log.normalizeError(value);
            console.log(log.getErrorMessage(value));
        });
        /*
2024-10-14T07:58:45.060Z exception with class <Error> and message <test error class>
2024-10-14T07:58:45.061Z error code <123>
2024-10-14T07:58:45.061Z error message <test error string>
2024-10-14T07:58:45.061Z Unknown error type
2024-10-14T07:58:45.061Z Unknown error type
2024-10-14T07:58:45.061Z Unknown error type
        */
    }
)();
