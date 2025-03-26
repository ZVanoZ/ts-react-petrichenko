import user from "../../020-classes-ts/30-demo/User";

(() => {
    console.log('-10-');

    class User {
        login?: string;
        password?: string;
    }

    const user = new User();
    user.login = 'user1';
    console.log(user);
})();


(() => {
    console.log('-20-');

    class User {
        public login?: string;
        public password?: string;
    }

    const user = new User();
    user.login = 'user1';
    console.log(user);
})();


(() => {
    console.log('-30-');

    class User {
        constructor(
            public login?: string,
            public password?: string
        ) {
        }
    }

    const user = new User();
    user.login = 'user1';
    console.log(user);
})();

(() => {
    console.log('-40-');

    class User {
        constructor(
            protected login?: string,
            private password?: string
        ) {
        }
    }

    const user = new User('user1', 'user1pass');
    // user.login = 'user1'; // error TS2445: Property 'login' is protected and only accessible within class 'User' and its subclasses.
    console.log(user);
})();

(() => {
    console.log('-40-');

    class User {
        protected login?: string;
        private password?: string

        constructor(
            login?: string,
            password?: string
        ) {
            this.login = login;
            this.password = password;
        }
    }

    const user = new User('user1', 'user1pass');
    console.log(user);
})();

(() => {
    console.log('-50-');

    class User {
        private _login: string;
        private _password: string

        constructor(
            login?: string,
            password?: string
        ) {
            console.log('-> User.constructor ', login, password);
            this._login = login ? login : '';
            this._password = password ? password : '';
        }

        get login(): string {
            console.log('-> User.login get', this._login)
            return this._login;
        }

        set login(value: string) {
            console.log('-> User.login set', value)
            this._login = value;
        }
    }

    let login = 'user1'
    const user = new User(login, 'user1pass');
    console.log('-- user');
    console.log(user);// Модификаторы в JS не работают. Видим все поля.
    console.log('-- get login');
    login = user.login
    console.log(login);
    console.log('-- set login');
    user.login = 'user2'
    console.log('-- get login');
    login = user.login
    console.log(login);
})();


(() => {
    console.log('-60-');

    class BaseUser {
        protected login?: string;  // Свойство с модификатором "protected" доступно в потомках
        private password?: string; // Свойство с модификатором "private" не доступно в потомках

        constructor(
            login?: string,
            password?: string
        ) {
            this.login = login;
            this.password = password;
        }

        public display() {
            console.log('BaseUser.display', this.login, this.password);
        }
    }

    class GameUser extends BaseUser {
        protected server: string;

        constructor(
            server: string,
            login?: string,
            password?: string
        ) {
            super(login, password);
            this.server = server;
        }

        override display() {
            //super.display();
            console.log('BaseUser.display', this.server, this.login);

            // error TS2341: Property 'password' is private and only accessible within class 'BaseUser'.
            //console.log('BaseUser.display (this.password)', this.password);

            // error TS2855: Class field 'password' defined by the parent class is not accessible in the child class via super.
            //console.log('BaseUser.display (super.password)', super.password);

            // error TS2855: Class field 'login' defined by the parent class is not accessible in the child class via super.
            //console.log('BaseUser.display (super.login)', super.login);
        }
    }

    const user = new GameUser('server-123', 'user1', 'user1pass');
    console.log(user);
    /*
-- Видим, что в JS данные полей доступны несмотря на ограничения модификаторов.
-- Ограничения действуют только на этапе компиляции.
GameUser {
  login: 'user1',
  password: 'user1pass',
  server: 'server-123'
}
    */
})();
