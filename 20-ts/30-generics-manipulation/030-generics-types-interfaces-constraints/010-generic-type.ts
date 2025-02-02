/**
 * Пример объявления шаблона объекта через type.
 * Бессмысленно т.к. ту же функцию выполняет interface
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
 *
 */
(() => {
    //...
})();
