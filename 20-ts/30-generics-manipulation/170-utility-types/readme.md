# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/75)

В этом уроке мы продолжим разбирать вспомогательные
типы  ["utility-types"](https://www.typescriptlang.org/docs/handbook/utility-types.html)

Ресурсы:

* [ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)

* [Parameters](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)

* [ConstructorParameters](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype)

## Конспект

* [10-ReturnType,Parameters.ts](10-ReturnType%2CParameters.ts)

```typescript
type TCalculateResult = ReturnType<typeof calculate>; // number
type TCalculateParams = Parameters<typeof calculate>; // Массив типов
let
    res: TCalculateResult,   // number
    p1: TCalculateParams[0], // number
    p2: TCalculateParams[1]  // number
;

function calculate(
    a: number,
    b: number
): number //
{
    return a * b;
}
```

* [20-ConstructorParameters.ts](20-ConstructorParameters.ts)

```typescript
type p1type = ConstructorParameters<typeof Example>[0]; // number
let p1: p1type = 123; // number

class Example {
    constructor(a: number) {
    }
}
```