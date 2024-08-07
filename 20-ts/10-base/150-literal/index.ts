/**
 * Помимо обычных примитивных типов, перешедших из JavaScript, в TypeScript
 * существуют так называемые литеральные типы, которые, как можно понять из
 * названия, представляют собой литералы обычных примитивных типов.
 *
 * Число 5, строка “apple”, логическое значение true или константа
 * перечисления Fruits.Apple может выступать в качестве самостоятельного типа.
 *
 * Несложно догадаться, что в качестве значений в таком случае могут выступать
 * только литеральные эквиваленты самих типов, а также null и
 * undefined (при --strictNullChecks со значением false).
 *
 * [RU: Примитивные литеральные типы Number, String, Template String, Boolean, Unique Symbol, Enum](https://scriptdev.ru/guide/018/)
 * [EN: Everyday Types/Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
 */
(
    () => {
        let month: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" = "01";
        month = "02";

        // month = "2"; //  error TS2322: Type '"2"' is not assignable to type '"01" | "02" | ...

        function startServer(
            protocol: "http" | "https" = "http",
            port: 80 | 8080 | 443 | 8443 = 8080
        ): "SUCCESS" | "FAIL" {
            return "FAIL";
        }
    }
)();