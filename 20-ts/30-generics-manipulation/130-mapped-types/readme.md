# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/70)

В этом уроке мы изучим метод формирования типа через перебор

Ресурсы:

В документации [EN: Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

В руководстве [RU: Оператор keyof, Lookup Types, Mapped Types, Mapped Types - префиксы + и -](https://scriptdev.ru/guide/042/#_3)

## Конспект

При помощи TypeMapping можно синхронизировать набор ключей в классах, которые реализуют первичный тип.  
Это защищает от рассинхронизации типов.
```typescript
// Первичный тип, который содержит все валюты приложения
type Currencies = {
    usa: "usd";
    ukraine: "uah";
};
// Вспомогательный generic для создания субтипов в дальнейшем.
type CreateCustomCurr<T> = {
    [P in keyof T]: string;
};
// При помощи TypeMapping создаем новый тип данных. 
// Все объекты типа CreateCustomCurr ОБЯЗАНЫ содержать полный набор полей Currencies
type CustomCurrencies = CreateCustomCurr<Currencies>;

// Если в digitalCurrencies не будет ключей usa и ukraine, то получим ошибку компиляции
const digitalCurrencies: CustomCurrencies= {
    usa: "digital-usd",
    ukraine: "digital-uah"
}
```