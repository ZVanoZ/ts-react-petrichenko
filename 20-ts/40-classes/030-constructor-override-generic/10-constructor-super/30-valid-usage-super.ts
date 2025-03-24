(() => {
    class User {
        constructor() {
            console.log('User.constructor', arguments);
        }
    }

    class UserIvan extends User {
        name: string;

        constructor(
            initName: string = 'Ivan'
        ) {
            console.log('UserIvan.constructor', arguments);
            super();
            this.name = initName;
        }
    }

    console.log('-- User');
    console.log(new User());
    /*
-- User
User.constructor [Arguments] {}
User {}
    */

    console.log('-- UserIvan#()');
    console.log(new UserIvan());
    /*
-- UserIvan#()
UserIvan.constructor [Arguments] {}
User.constructor [Arguments] {}
UserIvan { name: 'Ivan' }
    */

    console.log('-- UserIvan#(string)');
    console.log(new UserIvan('Ivanov Ivan'));
    /*
-- UserIvan#(string)
UserIvan.constructor [Arguments] { '0': 'Ivanov Ivan' }
User.constructor [Arguments] {}
UserIvan { name: 'Ivanov Ivan' }
    */
})();