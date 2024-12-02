# О лекции

Type Guard

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/48)

````text
Понимание механизмов, рассматриваемых в этой главе, научит определять конструкции, 
которые часто применяются на практике и способны сделать код более понятным и 
выразительным.

--strictNullChecks 
    запрещает неявные операции, в которых участвует значение null и undefined
````

type-guard позволяет сузить тип данных на основании функции-утверждения.
Если функция-утверждения возвращает true, то TS считает что проверка типа 
пройдена и далее он работает с переменной думая, что ее тип соответствует утвержденному.  
```ts
// "isNumber" - функция-утверждения типа number
function isNumber(
    value: unknown
): value is number 
{
    return typeof value === 'number';
}

// "isCar" - функция-утверждения типа CarInterface
function isCar(
    value: CarInterface | ShipInterface
): value is CarInterface //
{
    return 'wheels' in value;
}
```

## Дополнительные материаллы

* RU [Защитники типа](https://scriptdev.ru/guide/036/)
* EN [Using type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)