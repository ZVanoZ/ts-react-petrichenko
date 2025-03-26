# about

https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/87

Описание эпизода

В этом уроке мы рассмотрим три модификатора видимости

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

* RU [В руководстве](https://scriptdev.ru/guide/023/)

# [index.ts](demo/index.ts)...

```typescript
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
```
