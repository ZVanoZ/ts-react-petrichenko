/**
 * Пример использования типа "unknown" в сценарии, когда
 */
(
    () => {

        const
            user1JsonString = '{"firstname" : "Bob", "age" : 40}',
            user1JsonObjectAsUnknownType: unknown = safeParse(user1JsonString)
        ;
        transfer(user1JsonString); // lowercase data {"firstname" : "bob", "age" : 40}
        transfer(user1JsonObjectAsUnknownType);    // data { firstname: 'Bob', age: 40 }
        transfer(123);       // Unsupported value

        function safeParse(
            data: string
        ): unknown {
            return JSON.parse(data);
        }

        function transfer(
            data: unknown
        ): void {
            if (typeof data === "string") {
                console.log('lowercase data', data.toLowerCase());
            } else if (typeof data === 'object' && data !== null) {
                console.log('data', data);
            } else {
                console.error('Unsupported value');
            }
        }
    }
)();
