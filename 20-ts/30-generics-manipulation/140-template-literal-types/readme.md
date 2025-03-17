# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/71)

В этом уроке мы изучим прием Template literal types

Ресурсы:

[EN: В документации](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

## Конспект

* При помощи этой техники создаем строковые union-типы комбинируя другие строковые типы.
  [10-simple.ts](10-simple.ts)
```typescript
type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';
type TNewAnimation1 = `${MyAnimation}${Direction}`;            // "fadein" | "fadeout" | "swipein" | "swipeout"
type TNewAnimation2 = `${MyAnimation}${Capitalize<Direction>}`;// "fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"
const animation2: TNewAnimation2 = 'swipeOut';
console.log('animation2', animation2);           // animation2 swipeOut
```

* Можно создавать новые классы, в которых названия полей преобразованы по шаблону
  [20-capitalize-currency.ts](20-capitalize-currency.ts)
```typescript
type Currencies = {
    usa: "usd";
    ukraine: "uah";
};
type CreateCustomCurr<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};
type CustomCurrencies = CreateCustomCurr<Currencies>;

const digitalCurrencies: CustomCurrencies= {
    customUsa: "digital-usd",
    customUkraine: "digital-uah"
};
```