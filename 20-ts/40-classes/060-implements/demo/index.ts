(() => {
    interface IUser {
        login: string;
        password: string;
    }

    interface IValidate {
        isValid: boolean;

        validate(data?: string): boolean;
    }

    class UserForm implements IUser, IValidate {
        login: string = '';
        password: string = '';
        isValid: boolean = true;

        validate(data?: string): boolean {
            if (!data) {
                data = this.login
            }
            this.isValid = data.length > 0;
            return this.isValid;
        }
    }

    (() => {
        const form = new UserForm();
        console.log('-1-', form.validate());
        form.login = 'user1';
        console.log('-2-', form.validate());

    })();
})();