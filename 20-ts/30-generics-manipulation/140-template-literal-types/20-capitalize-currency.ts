(()=>{
    type Currencies = {
        usa: "usd";
        ukraine: "uah";
    };
    (()=>{
        // error TS2344: Type 'P' does not satisfy the constraint 'string'.
        // type CreateCustomCurr<T> = {
        //     [P in keyof T as `custom${Capitalize<P>}`]: string;
        // };
    })();
    type CreateCustomCurr<T> = {
        [P in keyof T as `custom${Capitalize<string & P>}`]: string;
    };
    type CustomCurrencies = CreateCustomCurr<Currencies>;

    const digitalCurrencies: CustomCurrencies= {
        customUsa: "digital-usd",
        customUkraine: "digital-uah"
    };
})();
