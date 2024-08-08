/**
 * В этом примере демонстрируется, что переменной типа any можно присваивать что угодно.
 * Видим также, что переменную типа any можно присвоить переменным с другими типами и компилятор это позволяет.
 */
(
    () => {
        let
            anyTypeVariable: any,
            arrayOfStrings: string[] = ['Hello', ' ', 'World']
        ;

        console.log('anyTypeVariable не инициализирован:', anyTypeVariable); // anyTypeVariable не инициализирован: undefined
        console.log('typeof anyTypeVariable (1):', typeof anyTypeVariable);// typeof anyTypeVariable (1): undefined
        anyTypeVariable = 'string literal value';
        console.log('anyTypeVariable присвоили строковый литерал:', anyTypeVariable); // anyTypeVariable присвоили строковый литерал: string literal value
        console.log('typeof anyTypeVariable (2):', typeof anyTypeVariable);// typeof anyTypeVariable (2): string

        console.log('');

        console.log('typeof arrayOfStrings (1):', typeof arrayOfStrings);// typeof arrayOfStrings (1): object
        arrayOfStrings = anyTypeVariable; // Присвоили массиву строк значение с типом any
        console.log('arrayOfStrings присвоили anyTypeVariable:', arrayOfStrings);// arrayOfStrings присвоили anyTypeVariable: string literal value
        console.log('typeof arrayOfStrings (2):', typeof arrayOfStrings);// typeof arrayOfStrings (2): string
    }
)();
