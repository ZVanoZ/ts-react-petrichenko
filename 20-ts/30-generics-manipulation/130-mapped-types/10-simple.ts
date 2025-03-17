(() => {
    type Currencies = {
        usa: "usd";
        // china: "cny";
        // ukraine: "uah";
    };
    type CreateCustomCurr<T> = {
        [P in keyof T]: string;
    };
    type CustomCurrencies = CreateCustomCurr<Currencies>;

    const digitalCurrencies: CustomCurrencies= {
        usa: "digital-usd",
        // china: "digital-cny",
        // ukraine: "digital-uah"
    }

    console.log('digitalCurrencies', digitalCurrencies);

    const realCurrencies1: CustomCurrencies= {
        usa: "real-currencies",
    };
    console.log('realCurrencies1', realCurrencies1);
    realCurrencies1.usa = realCurrencies1.usa + '-M';
    console.log('realCurrencies1-M', realCurrencies1);

    type CreateCustomCurrReadOnly<T> = {
        readonly [P in keyof T]: string;
    };
    const realCurrencies2: CreateCustomCurrReadOnly<CustomCurrencies>= {
        usa: "real-currencies",
    };
    console.log('realCurrencies2', realCurrencies2);
    // realCurrencies2.usa = realCurrencies2.usa + '-M'; // error TS2540: Cannot assign to 'usa' because it is a read-only property.
})();
