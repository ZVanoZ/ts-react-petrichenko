(
    () => {
        console.log("\
\n-- В строковых Enum нельзя вычислять значение элемента перечисления.\
\n-- Однако на момент прохождения урока этой ошибки нет.\
\n-- \$node -v\
\n-- v21.7.1\
\n--\
");

        // Числовые операции работают
        enum Directions {
            TOP = 10,
            RIGHT = 10 + TOP,
            LEFT = 10 + RIGHT,
            BOTTOM = 10 + LEFT
        }

        console.log('Directions', Directions);

        enum TimingFunc {
            EASE = 'ease',
            EASE_IN = `${EASE}-in`, // Тут должна быть ошибка компиляции т.к. используется строковая операция
            LINEAR = 'linear'
        }

        console.log('TimingFunc', TimingFunc);
    }
)();
