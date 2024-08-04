/**
 * Пример использования модификатора "readonly" в интерфейсе.
 *
 * Результат: выдаст ошибку на этапе компиляции.
 * Причина: пытаемся присвоить значение полю с модификатором "readonly".
 */
(
    () => {
        interface IUser {
            readonly login: string; // Применили модификатор "readonly"к обязательному свойству.
            password: string;
            readonly addr?: string; // Применили модификатор "readonly" к необязательному свойству.
        }

        const
            user1: IUser = {
                login: 'User1', // OK
                password: "qwerty"
            },
            user2: IUser = {
                login: 'User2', // OK
                password: "qwerty",
                addr: 'Under a bridge 2' // OK
            }
        ;
        user1.password = 'some-sequrity-pass'; // OK. Присвоение работает.
        user1.login = 'User1_1';       // error TS2540: Cannot assign to 'login' because it is a read-only property.
        user1.addr = 'Under a bridge'; // error TS2540: Cannot assign to 'addr' because it is a read-only property.

        console.log('user1', user1);
        console.log('user2', user2);
    }
)();
