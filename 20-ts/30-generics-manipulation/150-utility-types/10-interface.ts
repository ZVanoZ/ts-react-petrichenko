(() => {
    interface Currencies {
        kz: 'tenge';
        ukraine: "uah";
        usa: "usd";
    }

    (() => {
        // Initial type: {ukraine: "uah", kz: "tenge"}
        type TCurrency = Omit<Currencies, 'usa'>; // Удаляем свойство 'usa'
        const currency: TCurrency = {
            kz: "tenge",
            ukraine: "uah"
        };
    })();

    (() => {
        //Initial type: {usa: "usd", ukraine: "uah"}
        type TCurrency = Pick<Currencies, 'usa' | 'ukraine'>; // Оставляем только 'usa' | 'ukraine'
        const currency: TCurrency = {
            ukraine: "uah",
            usa: "usd"
        };

        // Pick основан на mapped-types
        // @see [130-mapped-types](../130-mapped-types)
        type MyPick<T, K extends keyof T> = {
            [P in K]: T[P];
        };
        type TCurrency2 = MyPick<Currencies, 'usa' | 'kz'>
        const currency2: TCurrency2 = {
            kz: "tenge",
            usa: "usd"
        };
    })();

    (() => {
        // Exclude исключает из перечисления указанные элементы
        type TKeysOfCurrencies = keyof Currencies;                       // "kz" | "ukraine" | "usa"
        type TKeysOfCurrencies1 = Exclude<TKeysOfCurrencies, 'ukraine'>; // "kz" | "usa"
        type TKeysOfCurrencies2 = Exclude<keyof Currencies, 'usa'>;      // "kz" | "ukraine"

        // Exclude основан на условных типах.
        // @see [10-base.ts](../120-conditional-types-and-infer/10-base.ts)
        type MyExclude<T, U> = T extends U ? never : T; // Свой аналог Exclude.
        type TKeysOfCurrencies3 = MyExclude<keyof Currencies, 'usa'>;    // "kz" | "ukraine"
    })();

})();


(() => {

})();