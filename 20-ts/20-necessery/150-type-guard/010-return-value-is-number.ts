/**
 * В этом примере показываем как использовать шаблон вида "function(...):... is <type>{...}"
 * Это называется "Type Flow".
 * Помогает сужать типы.
 */
(
    () => {
        var
            randValue = Math.round(100 * Math.random()),
            someValue = randValue > 50 ? 'String ' + randValue : randValue
        ;

        if (isNumber(someValue)) {
            // В этом месте TSC знает, что someValue имеет тип number т.к.
            // isNumber задекларирован с "... is number"
            console.log('number', someValue);
        } else {
            console.log('??????', someValue);
        }

        function isNumber(
            value: unknown
        ): value is number // Подсказываем TSC, что если функция isNumber вернет true,
                           // то значение value имеет тип number
        {
            return typeof value === 'number';
        }
    }
)();
