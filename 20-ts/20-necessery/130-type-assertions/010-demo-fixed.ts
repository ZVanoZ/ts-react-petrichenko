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
            reqOptionsFixed = {
                url: "https://reqOptionsFixed",
                method: "GET" as "POST"
            },
            reqOptionsFixed2 = {
                url: "https://reqOptionsFixed2",
                method: "GET-err-value" as "POST" // ERR // TSC не проверяет соответствует ли значение аргументу
            },
            reqOptionsFixed3 = {
                url: "https://reqOptionsFixed3",
                method: "GET" // OK. TSC будет проверять значение во время компиляции
            } as const,
            methodGetLiteral = "GET",
            methodGetString: string = "GET",
            methodGetString2: string = "GET-err-value" // ERR // TSC не проверяет соответствует ли значение аргументу
        ;

        fetchData("10", "GET");              // OK // fetchData:  10 GET
        fetchData("20", methodGetLiteral);          // OK // fetchData:  20 GET
        fetchData("30-1", methodGetString as "POST"); // OK // fetchData:  30-1 GET
        fetchData("30-2", <"POST">methodGetString);   // OK // fetchData:  30-2 GET

        // Тут мы видим что указав "as" мы отключаем проверку значения
        // Это привело к логической ошибке - позволило передать в аргументе method значение "GET-err-value", которое не входит в список ['GET' | 'POST']
        fetchData("40-1", methodGetString2 as "POST"); // ERR // fetchData:  40-1 GET-err-value
        fetchData("40-2", <"POST">methodGetString2);   // ERR // fetchData:  40-2 GET-err-value

        fetchData(
            reqOptions.url,             // OK //
            reqOptions.method as "POST" // OK // fetchData:  https://someurl.com GET
        );

        fetchData(
            reqOptionsFixed.url,   // OK //
            reqOptionsFixed.method // OK // fetchData:  https://reqOptionsFixed GET
        );
        fetchData(
            reqOptionsFixed2.url,   // OK  //
            reqOptionsFixed2.method // ERR // fetchData:  https://reqOptionsFixed2 GET-err-value
        );
        fetchData(
            reqOptionsFixed3.url,   // OK  //
            reqOptionsFixed3.method // OK //
        );
    }
)();
