/**
 * В этом примере демонстрируем ошибки runtime, которые возникают при использовании типа any.
 */
(
    () => {
        let
            anyTypeValue: any,
            arrayOfStrings: string[] = ['Hello', ' ', 'World']
        ;

        anyTypeValue = 'string literal value';
        arrayOfStrings = anyTypeValue;
        console.log('arrayOfStrings:', arrayOfStrings); // arrayOfStrings: string literal value

        console.log('-'.repeat(80));
        try {
            arrayOfStrings.join(';');
        }catch (e){
            console.log(e); // TypeError: arrayOfStrings.join is not a function
        }

        console.log('-'.repeat(80));
        try {
            arrayOfStrings.find(
                (item) => {
                    console.log('item=', item);
                    // ...
                }
            );
        }catch (e){
            console.log(e); // TypeError: arrayOfStrings.find is not a function
        }

    }
)();
