# "cource-plan-for-ai.md"

План курса для AI ассистента.

Применяется в команде "/review".

Актуальный план по адресу 

При вызове подкоманды `/review cource-plan-for-ai` AI должен:
- прочитать этот файл и взять ссылку на актуальный план из строки "Актуальный план по адресу ...";
- обратиться по указанному адресу и перегенерировать секцию "## План курса" ниже в этом файле.

При выполнении любой подкоманды `/review`, связанной с анализом урока (`lesson`, `all`, `analyze`), AI должен учитывать "План курса":
- использовать порядок уроков из секции "## План курса";
- **не** указывать в `ai-relevance.md`, что тема "не проработана", если эта тема согласно плану относится к урокам, идущим после анализируемого.

## "ai-options"

```ini
plan-url="https://campfire-school.com/courses/polnyy-kurs-po-typescript-react" 
```

## "cource-plan"

- **Полный курс по Typescript + React**

  - **Введение**
    - 9. [Про этот курс](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/9)
    - 10. [Как проходить данный курс](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/10)
    - 11. [Про закрытый чат, редакторы кода, материалы и ссылки + конспект по TS](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/11)
    - 12. [Дополнительно: настройка рабочего пространства](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/12)
    - 13. [Дополнительно: Установка автоматического форматирования](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/13)

  - **Typescript. Базовые знания** (`20-ts/10-base`)
    - 14. [Что такое TypeScript и зачем он нужен](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/14)
    - 15. [Установка TS и запуск файлов](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/15)
    - 16. [Базовые типы: строка, число, логическое значение](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/16)
    - 17. [Использование системы типов в функциях](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/17)
    - 18. [Специальный тип any](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/18)
    - 19. [Практика типизации кода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/19)
    - 20. [Тип never](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/20)
    - 21. [Типы null и undefined](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/21)
    - 22. [(д) Редкие примитивные типы bigint, symbol](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/22)
    - 23. [Типизация объектов и деструктуризация](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/23)
    - 24. [Типизация массивов](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/24)
    - 25. [Практика типизации кода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/25)
    - 26. [Tuples (Кортежи)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/26)
    - 27. [Union (Объединение)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/27)
    - 28. [Сужение типов (Narrowing)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/28)
    - 29. [Примитивные литеральные типы (Literal types)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/29)
    - 30. [Псевдонимы типов (Type aliases)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/30) — `20-ts/10-base/160-type-aliases`
    - 31–32. [Объектные литералы, аннотации функций и проверка знаний](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/31)

  - **Typescript. Необходимый уровень** (`20-ts/20-necessery`)
    - 33. [Более продвинутый Type и пересечение типов (Intersection)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/33) — `20-ts/20-necessery/010-intersection`
    - 34–36. Интерфейсы и сравнение Type vs Interface — `20-ts/20-necessery/020-interface`
    - 37. Практика работы с интерфейсами и типами — `20-ts/20-necessery/030-practice`
    - 38. [Механизм вывода типов (Type Inference)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/37) — `20-ts/20-necessery/040-type-inference`
    - 38. [Модификаторы свойств: optional](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/38) — `20-ts/20-necessery/050-property-modifiers`
    - 39. [Оператор Non-Null and Non-Undefined](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/39) — `20-ts/20-necessery/060-non-null-and-non-undefined`
    - 40. [Модификаторы свойств: readonly](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/40) — `20-ts/20-necessery/070-readonly`
    - 41–42. Enums и проблемы их использования — `20-ts/20-necessery/080-enum`, `090-enum-trubles`
    - 43. [Тип Unknown](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/43) — `20-ts/20-necessery/100-type-unknown`
    - 44. [Запросы типов (Type Queries)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/44) — `20-ts/20-necessery/110-type-queries`
    - 45. Практика — `20-ts/20-necessery/120-practice`
    - 46. [Утверждение типов (Type Assertions)](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/46) — `20-ts/20-necessery/130-type-assertions`
    - 47. Внутренние типы и приведение типов — `20-ts/20-necessery/140-type-casting`
    - 48. [Type Guard](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/48) — `20-ts/20-necessery/190-practice-typeguard-interfaces`
    - 49–56. Дополнительные темы и практика по TS (never, перегрузка функций, DOM и т.п.)

  - **Typescript. Generics and type manipulations** (`20-ts/30-generics-manipulation`)
    - 57. Введение в модуль — `20-ts/30-generics-manipulation/010-entry/readme.md`
    - 58–60. Generics: функции, типы и интерфейсы, ограничения — `20-ts/30-generics-manipulation/20-generics-functions`, `030-generics-types-interfaces-constraints`
    - 61. Практика — `20-ts/30-generics-manipulation/040-generics-types-practice`
    - 62. Generics classes — `20-ts/30-generics-manipulation/050-generics-classes`
    - 63–72. Встроенные generics, type manipulation, keyof, typeof, indexed access types, template literal types, utility types — директории `060`–`150`
    - 73–74. Практика и разбор задач — `160-practice`, `160-practice/teacher`
    - 75–77. Дополнительные utility types, работа с Promise/JSON, Awaited — `170-utility-types`, `180-promise-and-json`, `190-awaited`

  - **Typescript. Классы.** (`20-ts/40-classes`)
    - 79. Введение в модуль — `20-ts/40-classes/010-intro`
    - 80–81. Базовая работа с классом, конструкторы и дженерики — `20-ts/40-classes/020-classes-ts`
    - 82. Методы, перегрузки, getter/setter — `20-ts/40-classes/030-methods-override-getter-setter`
    - 83. Начальное значение и index signatures — `20-ts/40-classes/040-index-signatures`
    - 84. Наследование (extends) — `20-ts/40-classes/050-extends`
    - 85. Имплементация интерфейсов (implements) — `20-ts/40-classes/060-implements`
    - 86. Практика имплементации интерфейсов — `20-ts/40-classes/070-implements-practice`
    - 87. Модификаторы видимости свойств — `20-ts/40-classes/080-public-protected-private`
    - 88. Приватные поля (#, возможности JS) — `20-ts/40-classes/090-private-js-and-tsc`
    - 89. Статичные свойства и методы — `20-ts/40-classes/100-static`
    - 90. this и типизация контекста — `20-ts/40-classes/110-this-and-typed-context`
    - 91. Абстрактные классы — `20-ts/40-classes/120-abstract`

  - **Typescript. Декораторы и конфигурация** (`20-ts/50-decorators-and-configs`)
    - @TODO: пройти раздел (структура уроков будет добавлена по мере прохождения курса)

  - **React + Typescript. Большая практика** (`30-practice`)
    - @TODO: пройти раздел (план практических проектов и их директории будут добавлены по мере прохождения курса)