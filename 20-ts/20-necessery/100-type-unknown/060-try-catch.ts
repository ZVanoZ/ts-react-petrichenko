/**
 * Автор говорит, что в блок catch приходит значение с типом unknown.
 * Аргументирует тем, что такой тип отображает VSCode в хинте при наведении на блок catch.
 * WebStorm показывает тип "any".
 *
 * 1. Неизвестно какой именно тип определяет TSC.
 * 2. Главное в этой ситуации, что в catch приходит все что угодно и это пришло из JavaScript
 */
(
    () => {
        try {
            const randVal: number = 100 * Math.random();
            if (randVal > 50) {
                throw randVal;
            } else {
                throw new Error('Error ' + randVal);
            }
        } catch (e) {
            console.log('test-rand', {
                type: typeof e,
                error: e
            });
        }

        type TProtocol = 'HTTP' | 'HTTPS';
        const
            protocol: TProtocol = 'HTTPS',
            values = {
                'test string': 'Hello',
                'test number': 123,
                'test bool': true,
                'test array': [1, 'string', false],
                'test objext': {someProp: 'Some val'},
                'test Error': new Error('Some error ' + Math.random()),
                //
                'test function': function innerNameOfTheFunction() {
                    return innerNameOfTheFunction.length
                },
                'test function arrow': () => {
                    // aaa
                },
                // 'test TProtocol': TProtocol, // error TS2693: 'TProtocol' only refers to a type, but is being used as a value here.
                'test protocol': protocol,
            }
        ;
        for (const tag in values) {
            try {
                throw values[tag];
            } catch (e) {
                let
                    typeName = typeof e,
                    displayValue = e
                ;
                if (e instanceof Error) {
                    displayValue = `e.name=${e.name}; e.message="${e.message}"; e.stack.length=${e.stack.length}`;
                } else if (typeof e === 'function') {
                    displayValue = e.toString();
                }
                console.log('test-values', {
                    tag: tag,
                    type: typeof e,
                    displayValue: displayValue
                });
            }
        }
    }
)();
