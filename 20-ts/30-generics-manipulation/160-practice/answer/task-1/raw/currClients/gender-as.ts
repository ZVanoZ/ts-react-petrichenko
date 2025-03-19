/**
 * В этом примере выполняется адаптация исходных данных под тип, который нужно получить в результате.
 * Не годится.
 */
(()=>{
    const currClients = [
        {
            name: "John Smith",
            age: "-",
            gender: "male" as "male", // Утверждаем тип gender
            timeLeft: "1 month",
        },
        {
            name: "Alise Smith",
            age: 35,
            gender: "female" as "female", // Утверждаем тип gender
            timeLeft: "3 month",
        },
        {
            name: "Ann Sonne",
            age: 24,
            gender: "female" as "female", // Утверждаем тип gender
            timeLeft: "5 month",
        },
    ];

    interface ICurrClient {
        name: string;
        age?: number | string;
        gender: "male" | "female";
        timeLeft: string;
    }

    const client0: ICurrClient = currClients[0];
})();