/**

 */
interface User {
    login: string;
}

class User implements User {
    constructor(public login: string) {}
}

const user1 = new User('user1');

console.log('--user1:', user1);