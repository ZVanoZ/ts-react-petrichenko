/**
 * Пример правильного использования интерфейсов с полями "readonly".
 * Результат: отработает без ошибок.
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
        console.log('user1', user1);
        console.log('user2', user2);
    }
)();
