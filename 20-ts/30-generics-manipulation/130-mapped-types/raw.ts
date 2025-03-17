(()=>{
    type Currencies = {
        usa: "usd";
    };
    type CreateCustomCurr<T> = {
        [P in keyof T]: string;
    };
    type CustomCurrencies = CreateCustomCurr<Currencies>;

    type CurrenciesKeys = keyof Currencies;
    // console.log('CurrenciesKeys', CurrenciesKeys);
    // console.log('CurrenciesKeys', keyof CurrenciesKeys);


    const realCurrencies1: CustomCurrencies= {
        //usa: "real-currencies",
        /usa:Currencies["usa"]               // error TS2693: 'Currencies' only refers to a type, but is being used as a value here.
        //usa: Currencies.usa.key             // error TS2693: 'Currencies' only refers to a type, but is being used as a value here.
        //usa: Currencies.usa.key.toString()  // error TS2693: 'Currencies' only refers to a type, but is being used as a value here.
    };
})();

// (()=>{
//     type Currencies = {
//         usa: "usd";
//     } as const; // error TS2693: 'Currencies' only refers to a type, but is being used as a value here.
//
//     const usdValue = Currencies.usa;
//
//     console.log(usdValue); // Вывод: "usd"
// })();

(()=>{
    const currencies = {
        usa: "usd",
    };
    type Currencies = typeof currencies; // Создаем тип из значения
    const usdValue = currencies.usa;
    console.log(usdValue); // Вывод: "usd"
})();