/**
 *
 */
(
    () => {
        type TFunctionVoid = () => void;
        const
            funRetString: TFunctionVoid = (): void => {
                return 'some-string-result'; // error TS2322: Type 'string' is not assignable to type 'void'.
            },
            funRetString2 = (): void => {
                return 'some-string-result'; // error TS2322: Type 'string' is not assignable to type 'void'.
            }
        ;

        function funRetNumber(): void {
            return 123; // error TS2322: Type 'number' is not assignable to type 'void'.
        }
    }
)();
