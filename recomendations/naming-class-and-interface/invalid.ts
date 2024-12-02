/**
 * Этот скрипт неверен с точки зрения Gemini
 *
 * Gemini: Как именовать интерфейсы в TypeScript: лучшие практики
 * @see https://g.co/gemini/share/be1f1a3614ca
 */
interface IUser {
    login: string;
}

class TUser
    implements IUser //
{
    login: string;
    constructor(
        login : string
    ) {
        this.login = login;
    }
}

const
    user1 = new TUser('user1')
;

console.log('--user1:', user1);