(()=>{
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
            this.name = 'Ivan'; // error TS17009: 'super' must be called before accessing 'this' in the constructor of a derived class.
            super();
        }
    }
})();