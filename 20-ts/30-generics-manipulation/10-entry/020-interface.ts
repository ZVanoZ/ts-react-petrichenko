/**
 * Пример Generic с интерфейсом.
 */
(
    () => {
        interface Print<T> {
            design: T
        }

        const printString: Print<string> = {
            design: 'some-string'
        };
        console.log('printString:', printString)

        const printNumber: Print<number> = {
            design: 123
        };
        console.log('printNumber:', printNumber)
    }
)();
