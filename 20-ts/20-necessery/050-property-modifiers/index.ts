/**
 * Модификаторы свойств: optional (Property Modifiers)
 * [Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/38)
 *
 * [RU: Оператор опциональной последовательности](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
 * [EN: Optional Properties](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)
 **/

console.log('-'.repeat(80));
console.log('-- lection 38: Модификаторы свойств: optional (Property Modifiers)');
console.log('--           : @see https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/38');
console.log('-'.repeat(5));

(
    () => {
        interface IUser {
            login: string;
            password: string;
            age: number;
            addrDelivery: string | null;
            addrLive?: string;
            parents?: {
                father?: string;
                mother?: string;
            }
        }

        const
            user1: IUser = {
                login: 'userLogin',
                password: 'userPass',
                age: 33,
                addrDelivery: null,
                //addrLive : 'Ukraine, Kiyv, under a bridge'
            }
        ;
        console.log('user1:', user1);

        function sendUserData(
            user: IUser,
            db?: string
        ) {
            console.log('sendUserData', arguments);
            console.log('sendUserData/sample-10', {
                'user': user,
                'db?.toLowerCase()': db?.toLowerCase(),
                'father': user?.parents?.father?.toLowerCase(),
            });
        }

        sendUserData(user1);
    }
)();

(
    () => {

    }
)();

(
    () => {

    }
)();