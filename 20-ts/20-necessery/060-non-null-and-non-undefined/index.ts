/**
 *
 * Суть лекции:
 * При передаче в функцию переменная может быть переопределена.
 * Но TS не знает в синхронном или асинхронном режиме выполняется код.
 * Если в асинхронном, то вероятно переменная не успеет получить значение.
 * Поэтому компилятор генерирует ошибку TS(2454) "Valiable is uded before"
 *
 * В данный момент ошибка не наблюдается.
 * Вероятно, исправлена в TS с момента записи урока.
 * https://github.com/microsoft/TypeScript/issues/42143
 * https://github.com/microsoft/TypeScript/issues/43349
 *
 * [RU: Оператор ! (Non-Null and Non-Undefined Operator)](https://scriptdev.ru/guide/031/#non-null-and-non-undefined-operator)
 * [EN: Non-null Assertion Operator (Postfix!)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-)
 **/

console.log('-'.repeat(80));
console.log('-- (д) Оператор Non-Null and Non-Undefined');
console.log('-- https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/39');
console.log('-'.repeat(5));

(
    () => {
        console.log('-'.repeat(5));
        console.log('-- Адаптированный пример от Петриченко');
        console.log('-'.repeat(2));
        let connString: string;

        console.log('connString/before', connString);
        createConnectionString(connString);
        console.log('connString/after/Perichenko', connString!); // Вот так с проблемой боролись ранее
        console.log('connString/after', connString);

        function createConnectionString(
            connString?: string
        ) {
            connString = 'localhost:11022';
        }
    }
)();

(
    () => {
        console.log('-'.repeat(5));
        console.log('-- https://github.com/microsoft/TypeScript/issues/43349');
        console.log('-'.repeat(2));

        function doubleConditionalFunc() {

            let var_a: string
            let var_b: string
            let var_c: string

            const conditionCheck: boolean = true

            if (conditionCheck) {
                var_a = 'A'
                var_b = 'B'
            } else {  // even if the else block is removed would have the same issue
                var_c = 'C'
            }

            if (conditionCheck) {   // same condtional check
                if (var_a) console.log(var_a)  // does log properly in the console
                if (var_b) console.log(var_b)
            } else {
                if (var_c) console.log(var_c)
            }
        }

        doubleConditionalFunc();
    }
)();

// (
//     () => {
//         console.log('-'.repeat(5));
//         console.log('-- XXX');
//         console.log('-'.repeat(2));
//     }
// )();