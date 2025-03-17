(()=>{
    const currencies = {
        usa: "usd",
        ukraine: "uah",
    };
    const usdValue = currencies.usa;
    console.log(usdValue); // Вывод: "usd"

    type Currencies = typeof currencies; // Создаем тип из значения
    type CreateCustomCurr<T> = {
        [P in keyof T]: string;
    };
    type CustomCurrencies = CreateCustomCurr<Currencies>;


    const realCurrencies1: CustomCurrencies= {
        usa: currencies.usa,
        ukraine: currencies.ukraine,
    };
    console.log('realCurrencies1', realCurrencies1);
    realCurrencies1.usa = realCurrencies1.usa + '-M';
    console.log('realCurrencies1-M', realCurrencies1);
})();

