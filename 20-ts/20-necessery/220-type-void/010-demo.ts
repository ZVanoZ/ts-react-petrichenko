/**
 * В этом примере показано, что применение смгнатуры функции с void в качестве
 * результата не влияет на TSC.
 * 1. TSC генерирует JS без ошибок.
 * 2. JS выполняет функцию, как обычно.
 *
 * На мой взгляд, это недоработка TSC.
 */
(
    () => {
        type TFunctionVoid = () => void;

        const
            funRetString: TFunctionVoid = () => {
                return 'some-string-result';
            },
            funRetNumber: TFunctionVoid = () => {
                return 123;
            }
        ;
        console.log('funRetString:', funRetString()); // some-string-result
        console.log('funRetNumber:', funRetNumber()); // 123
    }
)();
