/**
 * Пример объявления generic-helper-type
 */
(() => {
    //--
    // Объявляем generic-тип, который принимает либо значение указанного типа, либо null

    type OrNull<Type> = Type | null;

    const
        numberValue: OrNull<number> = 33,
        nullValue: OrNull<number> = null
    ;

    //--
    // Объявляем generic-тип, который принимает либо значение указанного типа, либо
    // массив таких значений
    type OneOrMany<Type> = Type | Type[];

    const
        oneNumber: OneOrMany<number> = 33,
        manyNumber: OneOrMany<number> = [33, 34]
    ;
})();

/**
 *
 */
(() => {
    //...
})();
