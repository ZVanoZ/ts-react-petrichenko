/**
 * Демонстрация того, что JSON.parse плевать хотел на интерфейсы.
 * Команда работает в runtime, а TypeScript работает во время компиляции "*.ts".
 */
(() => {
    interface IUser {
        login: string;
        loginedAt: number;
    }

    const
        jsonText1 = '{"login":"user1", "loginedAt":123}',
        jsonText2 = '{"login":"user2", "loginedAt":"3h15m"}'
    ;

    let json: IUser;

    json = JSON.parse(jsonText1);
    console.log('json-1', json);
    /*
json-1 { login: 'user1', loginedAt: 123 }
    */
    console.log('json-1 typeof json.loginedAt', typeof json.loginedAt);
    /* ОК. Поле loginedAt типа number соответствует интерфейсу IUser
json-1 typeof json.loginedAt number
    */
    json = JSON.parse(jsonText2);
    console.log('json-2', json);
    /*
json-2 { login: 'user2', loginedAt: '3h15m' }
    */
    console.log('json-2 typeof json.loginedAt', typeof json.loginedAt);
    /* FAIL. Тип поля loginedAt string не соответствует интерфейсу IUser
json-2 typeof json.loginedAt string
    */
})();