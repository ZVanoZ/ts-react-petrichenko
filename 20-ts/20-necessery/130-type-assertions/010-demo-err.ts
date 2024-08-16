/**
 *
 */
(
    () => {
        const
            fetchData = (
                url: string,
                method: 'GET' | 'POST'
            ): void => {
                console.log('fetchData: ', url, method);
            },
            reqOptions = {
                url: "https://someurl.com",
                method: "GET"
            },
            reqOptionsFixed3 = {
                url: "https://reqOptionsFixed3",
                method: "GET-err-value" // ERR // TSC во время компиляции проверит соответствует ли значение типам во время вызова АПИ (см. ниже)
            } as const,
            methodGetLiteral = "GET",
            methodGetString: string = "GET"
        ;

        fetchData("10", "GET");     // OK // fetchData:  10 GET
        fetchData("20", methodGetLiteral); // OK // fetchData:  20 GET
        fetchData("30", methodGetString);  // error TS2345: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

        fetchData("40", 123 as "POST"); // error TS2352: Conversion of type 'number' to type '"POST"' may be a mistake because neither type sufficiently overlaps with the other.

        fetchData(
            reqOptions.url,    // OK
            reqOptions.method  // error TS2345: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
        );

        fetchData(
            reqOptionsFixed3.url,   // OK  //
            reqOptionsFixed3.method // error TS2345: Argument of type '"GET-err-value"' is not assignable to parameter of type '"GET" | "POST"'.
        );
    }
)();
