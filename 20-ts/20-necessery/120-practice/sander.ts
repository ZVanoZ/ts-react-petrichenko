/**
 *
 */
(
    () => {
        // Как определить является ли переменная массивом?
        console.log('typeof []', ': ', typeof []);                // object
        console.log('typeof {}', ': ', typeof {});                // object
        console.log('typeof null', ': ', typeof null);            // object
        console.log('typeof undefined', ': ', typeof undefined);  // undefined
        console.log('Array.isArray({})', ': ', Array.isArray({})); // false
        console.log('Array.isArray(null)', ': ', Array.isArray(null)); // false
        console.log('Array.isArray([])', ': ', Array.isArray([])); // true

        let
            arrayOfNumbers: number[] = [1, 2, 3]
        ;
        // Для массива чисел допустим вызов мектода join
        console.log('arrayOfNumbers.join(", ")', arrayOfNumbers.join("|"));

        console.log(' 1        ?? 0', ': ', 1 ?? 0);          // 1
        console.log(' 0        ?? 1', ': ', 0 ?? 1);          // 0
        console.log('-1        ?? 0', ': ', -1 ?? 0);         // -1
        console.log('null      ?? 1', ': ', null ?? 1);       // 1
        console.log('undefined ?? 1', ': ', undefined ?? 1);  // 1
        console.log('true      ?? 1', ': ', true ?? 1);       // true
        console.log('false     ?? 1', ': ', false ?? 1);      // false
        console.log('""        ?? 1', ': ', "" ?? 1);         // ""
        console.log('{}        ?? 1', ': ', {} ?? 1);         // {}
        console.log('[]        ?? 1', ': ', [] ?? 1);         // []
    }
)();
