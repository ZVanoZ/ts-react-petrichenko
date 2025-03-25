(() => {
    enum TValidationResultEnum {
        skip = 'SKIP',
        done = 'DONE'
    }

    class TFormField {

        public value: string = '';

        public minLength?: number;

        public maxLength?: number;

        protected _allowChars: string = '1234567890'

        private _validatedAt?: Date;

        protected _validationInterval: number = 0; // Валидация не чаще validationInterval мс

        get validationInterval(): number {
            console.log('#TFormField.validationInterval (get)');
            return this._validationInterval;
        }

        set validationInterval(value: number) {
            console.log('#TFormField.validationInterval (set)', value);
            if (value < 0) {
                throw new Error('Validation Interval must be greater than 0');
            }
            this._validationInterval = value;
        }

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

        public validate(): TValidationResultEnum;
        public validate(force: boolean): TValidationResultEnum;
        public validate(
            force?: boolean
        ): TValidationResultEnum {
            console.log('#TFormField.validate', `#BEG# at "${new Date().toISOString()}".`);

            if (force !== true) {
                if (this._validatedAt instanceof Date) {
                    const timeLeft = Date.now() - this._validatedAt.getTime();
                    if (timeLeft < this._validationInterval) {
                        console.log('#TFormField.validate', `#SKIP# validation. timeLeft "${timeLeft}", interval "${this._validationInterval}".`);
                        return TValidationResultEnum.skip;
                    }
                }
            }

            this.validationErrors = [];
            if (this.maxLength !== undefined) {
                if (this.value.length > this.maxLength) {
                    this.validationErrors.push(`Max length should be at least ${this.maxLength}. Actual ${this.value.length}.`);
                }
            }
            if (this.minLength !== undefined) {
                if (this.value.length < this.minLength) {
                    this.validationErrors.push(`Minimum length should be at least ${this.minLength}. Actual ${this.value.length}.`);
                }
            }
            if (this.value.length > 0) {
                let invalidChars = '';
                for (const char of this.value) {
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

            this._validatedAt = new Date();
            console.log('#TFormField.validate', `#DONE# validatedAt "${this._validatedAt.toISOString()}".`);
            return TValidationResultEnum.done;
        }
    }

    (() => {
        const field = new TFormField('login');
        field.minLength = 3;
        field.maxLength = 20;

        console.log(`-- field "${field.name}", validatedAt "${field.getValidatedAtAsString()}" `);
        console.log(`value "${field.value}"`);
        console.log('isValid?', field.isValid());
        console.log('validationErrors', field.validationErrors);

        console.log(`-- field "${field.name}", validatedAt "${field.getValidatedAtAsString()}" `);
        field.value = '123456789-123456789#$#%';
        console.log(`value "${field.value}"`);
        console.log('isValid?', field.isValid());
        console.log('validationErrors', field.validationErrors);

        console.log(`-- field "${field.name}", validatedAt "${field.getValidatedAtAsString()}" `);
        field.value = '123';
        console.log(`value "${field.value}"`);
        console.log('isValid?', field.isValid());
        console.log('validationErrors', field.validationErrors);

        console.log(`-- field "${field.name}", validatedAt "${field.getValidatedAtAsString()}" `);
        console.log('-- 10:');
        field.value = '123#';
        field.validationInterval = 500;
        console.log(`value "${field.value}"`);
        console.log('validate', field.validate(true));
        console.log('validationErrors', field.validationErrors);
        console.log('-- 20-10: ');
        console.log('--      : Валидация не выполнится т.к. с момента предыдущей валидации не прошло нужное время.');
        console.log('--      : Должно быть "#$", но получим "#" от предыдущей валидации.');
        field.value = '123#$';
        console.log('validate', field.validate());
        console.log('validationErrors', field.validationErrors);
        console.log('-- 20-20:');
        let nowValidationInterval = field.validationInterval;
        console.log(`--      : Валидация выполнится т.к. с момента предыдущей валидации прошло нужное время "${nowValidationInterval}" мс.`);
        console.log('--      : Ожидаем "#$"');
        setTimeout(() => {
            console.log('validate', field.validate());
            console.log('validationErrors', field.validationErrors);
        }, nowValidationInterval + 10);
    })();
})();