/**
 * Использование модификатора "Readonly" при объявлении объектного типа.
 *
 * Внимание!
 * Интерфейс не содержит модификаторов доступа.
 * Модификатор используется при объявлении типа переменной.
 * Таким образом весь объект становится не модифицируемым и никакое свойство нельзя менять.
 *
 * Результат: выдаст ошибку на этапе компиляции.
 * Причина: пытаемся присвоить значение любому свойству объекта с типом Readonly<type>.
 */
(
    () => {
        interface IUser {
            login: string;
            password: string;
        }

        type TUser = Readonly<IUser>;
        const
            user1: TUser = {
                login: 'User1', // OK
                password: "qwerty"
            },
            user2: Readonly<IUser> = {
                login: 'User2', // OK
                password: "qwerty"
            }
        ;

        user1.login = 'user1_1';  // error TS2540: Cannot assign to 'login' because it is a read-only property.
        user2.password = 'pass2'; // error TS2540: Cannot assign to 'password' because it is a read-only property.

        console.log('user1', user1);
        console.log('user2', user2);
    }
)();
