(
    () => {
        console.log("\
\n-- Демонстрация оптимизации больших Enum. Компилируем в JS и анализируем результат.\
\n-- Тут получается НЕ ОПТИМИЗИРОВАННЫЙ JS-файл.\
\n--\
");

        // Числовые операции работают
        enum DirectionsEnum {
            TOP = 10,
            RIGHT = 10 + TOP,
            LEFT = 10 + RIGHT,
            BOTTOM = 10 + LEFT
        }

        console.log('DirectionsEnum', DirectionsEnum);
        console.log('DirectionsEnum.RIGHT', DirectionsEnum.RIGHT);

        enum TimingFuncEnum {
            EASE = 'ease',
            EASE_IN = `${EASE}-in`, // Тут должна быть ошибка компиляции т.к. используется строковая операция
            LINEAR = 'linear'
        }

        console.log('TimingFuncEnum', TimingFuncEnum);
        console.log('TimingFuncEnum.EASE_IN', TimingFuncEnum.EASE_IN);
    }
)();
