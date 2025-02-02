/**
 *
 */
(
    () => {
        /**
         * В этом примере объявляем сигнатуру generic-функции.
         * Затем пытаемся объявить переменные-функции, которые не соответствуют сигнатуре.
         */
        type TFunction_GetErrorsMessage = <T>(errors: T[]) => string[];
        const

            getErrorsMessage2: TFunction_GetErrorsMessage = function<T,T2,T3>(
                errors: T[], // << соответствует сигнатуре TFunction_GetErrorsMessage
                defVal : T2  // error TS2322: Type '<T, T2, T3>(errors: T[], defVal: T2) => string[]' is not assignable to type 'TFunction_GetErrorsMessage'.
            ): string[] {
                return ['Hello'];
            }
        ;
    }
)();
