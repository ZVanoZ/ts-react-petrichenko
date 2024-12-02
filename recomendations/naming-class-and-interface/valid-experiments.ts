interface User {
    login: string;
}

interface UserSalary {
    salary: number;
}

class User implements User, UserSalary {
    salary: number = 0;

    constructor(public login: string) {
    }
}

const user1 = new User('user1');

console.log('--user1:', user1);