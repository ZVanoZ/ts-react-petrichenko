/**
 * Использование generic-union для объявления параметра в generic-функции
 *
 * В данном примере TAmount - подстановочный(generic) тип, который
 * принимает "number" или "string".
 *
 * Зачем - ХЗ.
 * Такие же функции можно объявить используя аннотации.
 * <code class="TS">
 *     const depositMoneyFn1 = (
 *         amount : number|string  // Объявление union-типа через аннотацию
 *     ):void=>
 *     {
 *         //...
 *     }
 * </code>
 */
(() => {
    // Можно указать union при объявлении generic параметра (amount)
    const depositMoneyFn1 = <TAmount extends number | string>(
        amount: TAmount
    ): void => {
        console.log('depositMoneyFn1/amount', amount);
    }
    depositMoneyFn1(123);
    depositMoneyFn1('aaa');
    // depositMoneyFn1(null); error TS2345: Argument of type 'null' is not assignable to parameter of type 'string | number'.

    // Можно создать union тип AmountUnion), а затем испльзовать его при объявлении
    // generic параметра (amount)
    type AmountUnion = number | string;
    const depositMoneyFn2 = <TAmount extends AmountUnion>(
        amount: TAmount
    ): void => {
        console.log('depositMoneyFn2/amount', amount);
    }
    depositMoneyFn2(123);
    depositMoneyFn2('aaa');
    /*
    depositMoneyFn1/amount 123
    depositMoneyFn1/amount aaa
    depositMoneyFn2/amount 123
    depositMoneyFn2/amount aaa
    */
})();

/**
 *
 */
(() => {
    //...
})();
