(() => {
    enum TValidationResultEnum {
        skip = 'SKIP',
        done = 'DONE'
    }

    class TFormField {
        private _value: string = '';

        get value(): string {
            console.log('#TFormField.value (get)', `"${this._value}"`);
            return this._value;
        }

        set value(value: string) {
            console.log('#TFormField.value (set)', `"${value}"`);
            this._value = value;
            this.validate();
        }

        public minLength?: number;
        public maxLength?: number;
        protected _allowChars?: string;
        private _validatedAt?: Date;

        public validationErrors: string[] = [];

        constructor(public name: string) {
        }

        public getValidatedAtAsString(): string {
            let res: string = '';
            if (this._validatedAt instanceof Date) {
                res = this._validatedAt.toISOString();
            }
            return res;
        }

        public isValid(): boolean {
            console.log('#TFormField.isValid');
            let res = true;
            this.validate();
            res = this.validationErrors.length < 1;
            return res;
        }

        public validate(): TValidationResultEnum {
            console.log('#TFormField.validate');
            this.validationErrors = [];
            if (this.maxLength !== undefined) {
                if (this._value.length > this.maxLength) {
                    this.validationErrors.push(`Max length should be at least ${this.maxLength}. Actual ${this._value.length}.`);
                }
            }
            if (this.minLength !== undefined) {
                if (this._value.length < this.minLength) {
                    this.validationErrors.push(`Minimum length should be at least ${this.minLength}. Actual ${this._value.length}.`);
                }
            }
            this.validateChars();

            this._validatedAt = new Date();
            return TValidationResultEnum.done;
        }

        protected validateChars(): void {
            console.log('#TFormField.validateChars');
            if (typeof this._allowChars !== 'string') {
                console.log('#TFormField.validateChars', `#SKIP# Reason - empty _allowChars.`);
                return;
            }
            if (this._value.length > 0) {
                let invalidChars = '';
                for (const char of this._value) {
                    if (!this._allowChars.includes(char)) {
                        if (!invalidChars.includes(char)) {
                            invalidChars += char;
                        }
                    }
                }
                if (invalidChars !== '') {
                    this.validationErrors.push(`Invalid chars "${invalidChars}"`);
                }
            }
        }
    }

    class TFormFieldPin extends TFormField {
        public minLength: number = 4;
        public maxLength: number = 4;
        protected _allowChars: string = '1234567890';
    }

    class TFormFieldLogin extends TFormField {
        public minLength: number = 3;
        public maxLength: number = 20;
        protected _allowChars: string = '-1234567890.AABCDEFGHIJKLMNOPQRSTUVWXYZaabcdefghijklmnopqrstuvwxyz';
        protected _danyFirstChar = '-.1234567890';

        override validateChars():void {
            console.log('#TFormFieldLogin.validateChars');
            super.validateChars();
            if (this.value.length > 0) {
                const firstChar = this.value[0];
                if (this._danyFirstChar.includes(firstChar)) {
                    this.validationErrors.push(`Invalid first char "${firstChar}"`);
                }
            }

        }
    }

    (() => {
        console.log('-- TFormField');
        const field = new TFormField('comment');
        field.minLength = 10;
        field.maxLength = 25;

        ['', '123', 'Some comment', 'Some long comment 1234567890'].forEach(
            (newValue: string) => {
                console.log(`-- TFormField "${field.name}" test "${newValue}"`);
                field.value = newValue;
                console.log('validationErrors', field.value, field.validationErrors);
            }
        );
    })();

    (() => {
        console.log('-- pin');
        const field = new TFormFieldPin('pin');

        ['', '1', 'A2C4', '4321'].forEach(
            (newValue: string) => {
                console.log(`-- TFormField "${field.name}" test "${newValue}"`);
                field.value = newValue;
                console.log('validationErrors', field.value, field.validationErrors);
            }
        );
    })();

    (() => {
        console.log('-- login');
        const field = new TFormFieldLogin('login');

        ['', 'user1', '12', '1user', 'User@XYZ'].forEach(
            (newValue: string) => {
                console.log(`-- TFormField "${field.name}" test "${newValue}"`);
                field.value = newValue;
                console.log('validationErrors', field.value, field.validationErrors);
            }
        );
    })();
})();