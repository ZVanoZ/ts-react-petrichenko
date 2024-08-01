/**
 * [RU: Union, Intersection](https://scriptdev.ru/guide/016/)
 * [EN: Everyday Types/Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 */
(
    () => {
        const var10: string | number | boolean = 5;

        var var20: string[] | number[] = [1, 2];

// var var20: string[] | number[] = [1, 2, "aaa"];// Ошибка. Смешивание типов в массиве не длопускается

        function fun10(msg: string | number): void {
            // msg = msg.toLowerCase(); // Так НЕ работает. Может прийти числоб.
            if ("number" == typeof msg) {
                msg = `err-code ${msg}`;
            } else {
                msg = msg.toLowerCase(); // Так работает.
            }
            console.log(msg);
        }

        fun10("Hello");
        fun10(12345);
    }
)();