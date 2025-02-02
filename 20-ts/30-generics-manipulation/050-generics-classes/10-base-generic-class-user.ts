class User<T1, T2> {
    name: T1;
    age: T2;

    constructor(
        name: T1,
        age: T2
    ) {
        this.name = name;
        this.age = age;
    }

    getMyFullName<T>(surname: T): string {
        let
            stringSurname: string = ''
        ;
        if (typeof surname === 'string') {
            stringSurname = surname;
        } else if (
            //typeof surname === 'object' // error TS18047: 'surname' is possibly 'null'.
            surname instanceof Object     // OK
            && typeof (surname.toString) === 'function'
        ) {
            stringSurname = surname.toString();
        } else {
            stringSurname = 'unknown-type-of-surname';
        }
        return `res: ${this.name} ${stringSurname}`;
    }
}

/**
 * Когда мы наследуем от generic-класса, нам нужно четко указать generic-типы
 * для родительского класса.
 */
class AdminUser<T>
    extends User<string, number> // для родительского класса User заданы generic-типы
{
    rules: T;
}

(
    () => {
        console.log('-- example 1');

        const user1_0 = new User('Вася', 25);
        console.log('-- user1_0', user1_0);

        const user1_1 = new User('Вася', '25');
        console.log('-- user1_1', user1_1);


        const name = 'Галя';
        const age = 18;

        const user2_0 = new User<string, number>(name, age);
        console.log('-- user2_0', user2_0);

        const user2_1: User<string, number> = new User<string, number>(name, age);
        console.log('-- user2_1', user2_1);

        // Типы generic класса жестко декларированы
        const user2_2: User<string, string> = new User<string, string>(name, '18');
        console.log('-- user2_2', user2_2);

        // Типы generic класса определяются по фактическим типам передаваемых данных
        const user2_3: User<string, string> = new User(name, '18');
        console.log('-- user2_3', user2_3);

    }
)();
/*
Вывод в консоль:
-- example 1
-- user1_0 User { name: 'Вася', age: 25 }
-- user1_1 User { name: 'Вася', age: '25' }
-- user2_0 User { name: 'Галя', age: 18 }
-- user2_1 User { name: 'Галя', age: 18 }
-- user2_2 User { name: 'Галя', age: '18' }
-- user2_3 User { name: 'Галя', age: '18' }
 */

(
    () => {
        console.log('-- example .getMyFullName');
        const user3 = new User('Петя', 999);
        const user3surnameObject = {
            surname: 'Иванов-object',
            toString() {
                return this.surname;
            }
        };
        console.log('-- user3 fullName from string.', user3.getMyFullName('Иванов-string'));
        console.log('-- user3 fullName from object.', user3.getMyFullName<object>(user3surnameObject));
    }
)();
/*
Вывод в консоль:
-- example .getMyFullName
-- user3 fullName from string. res: Петя Иванов-string
-- user3 fullName from object. res: Петя Иванов-object
 */