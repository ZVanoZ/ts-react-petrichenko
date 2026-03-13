# Tech Context

### Основной стек

- **Язык**: TypeScript (актуальная ветка по документации — 5.x).
- **Фреймворк для UI (в практической части)**: React (акцент на классический SPA-клиент и hooks).
- **Инструменты разработки**:
  - Node.js (используется конфигурация run-конфигурации WebStorm `node-21-ts` c `ts-node/register`).
  - IDE: WebStorm, Cursor (c Memory Bank системой).

### Структура кода (уровень разделов)

- `20-ts` — тренировка ядра TypeScript:
  - `10-base` — базовые типы, функции, any/never, null/undefined, literal types, type aliases и др.
  - `20-necessery` — intersection, interface vs type, type inference, optional/readonly, unknown, type queries, enum/enum-troubles, type guards, работа с DOM и др.
  - `30-generics-manipulation` — generics, constraints, utility types, template literal types, условные типы, `keyof`, `typeof`, indexed access, маппированные типы и др.
  - `40-classes` — классы, конструкторы и дженерики, методы/getter/setter, index signatures, наследование/implements, модификаторы видимости, приватные поля, static, abstract и т.п.
  - `50-decorators-and-configs` — декораторы и конфигурация (TODO-раздел).
- `30-practice` — React + TypeScript практика (структура и сценарии зависят от пройденной части курса).

### Связь с внешней документацией (MCP Context7)

- TypeScript (`/websites/typescriptlang`):
  - Базовые конструкции, практикуемые в репозитории, полностью соответствуют текущему языку.
  - Возможные зоны расширения: новые utility-типы, улучшения в control flow analysis, дополнительные опции `tsconfig`.
- React (`/reactjs/react.dev`):
  - Практика в репозитории, вероятнее всего, фокусируется на базовых hooks и клиентском рендеринге.
  - Современные темы (Server Components, `use` для промисов, продвинутый Suspense, новые паттерны роутинга и transitions) стоит при необходимости подсматривать в актуальной документации.

### Рекомендации по развитию

- При добавлении новых примеров подстраивать их под:
  - строгую типизацию (минимум `any`);
  - использование generics, где это улучшает читаемость и безопасность;
  - декомпозицию на небольшие, переиспользуемые компоненты/классы (ООП-подход и композиция).

