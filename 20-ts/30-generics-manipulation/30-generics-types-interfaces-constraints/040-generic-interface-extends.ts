/**
 * Использоние generic-type с интерфейсаими классов.
 * Это нужно чтобы гарантировать набор полей класса в передаваемом объекте.
 */
(() => {
    interface PersonI {
        firstname: string;
        age: number;
        birthday?: Date
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
            age: number;
            birthday: Date;
            married: boolean;
        }> = {
            login: 'u2login',
            person: {
                firstname: 'Tom',
                age: 1,
                birthday: new Date(),
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
