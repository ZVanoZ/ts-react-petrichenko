/**
 * Пример объявления шаблона объекта через type.
 * Безсмысленно т.к. ту же функцию выполняет interface
 */
(() => {
    type UserTemplate<TLogin, TAge> = {
        login: TLogin;
        age: TAge
    }
    /*
    // UserTemplate аналогичен UserInterface
    interface UserInterface<TLogin, TAge> {
        login: TLogin;
        age: TAge
    }
    */

    // Тут мы объявляем конкретный тип UserStringNumber, который далее используется без угловых скобок
    type UserStringNumber = UserTemplate<string, number>;

    const
        user1: UserTemplate<string, number> = {
            login: 'user1login',
            age: 33
        },
        user2: UserStringNumber = {
            login: 'aaa',
            age: 11
        }
    ;

})();

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
 * Использоние generic-type с интерфейсаими классов.
 * Это нужно чтобы гарантировать набор полей класса в передаваемом объекте.
 */
(() => {
    interface PersonI {
        firstname: string;
        age: number;
        birthday ?: Date
    }
    interface UserI<TPerson extends PersonI> {
        login: string;
        person: TPerson;
    }
    type TPersonForUser1 = {
        firstname: string;
        age: number;
        //birthday : Date;
        married: boolean;
    };
    const
        // generic тип TPerson указывается через другой тип (в данном случае TPersonForUser1)
        user1: UserI<TPersonForUser1> = {
            login: 'u1login',
            person: {
                firstname: 'Anna',
                age: 1,
                //birthday : new Date(),
                married: false
            }
        },
        //  generic тип TPerson указывается через литеральный объект
        user2: UserI<{
            firstname: string;
            age : number;
            birthday : Date;
            married: boolean;
        }> = {
            login: 'u2login',
            person: {
                firstname: 'Tom',
                age: 1,
                birthday : new Date(),
                married: true
            }
        }
    ;
    console.log('user1', user1);
    console.log('user2', user2);
/*
user1 {
  login: 'u1login',
  person: { firstname: 'Anna', age: 1, married: false }
}
user2 {
  login: 'u2login',
  person: {
    firstname: 'Tom',
    age: 1,
    birthday: 2024-10-16T07:09:33.248Z,
    married: true
  }
}
*/
})();

/**
 * Использование generic-union для объявления параметра в generic-функции
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
    const depositMoneyFn1 = <TAmount extends number|string>(
        amount : TAmount
    ):void=>{
        console.log('depositMoneyFn1/amount', amount);
    }
    depositMoneyFn1(123);
    depositMoneyFn1('aaa');
    // depositMoneyFn1(null); error TS2345: Argument of type 'null' is not assignable to parameter of type 'string | number'.

    // Можно создать union тип AmountUnion), а затем испльзовать его при объявлении
    // generic параметра (amount)
    type AmountUnion = number|string;
    const depositMoneyFn2 = <TAmount extends AmountUnion>(
        amount : TAmount
    ):void=>{
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
