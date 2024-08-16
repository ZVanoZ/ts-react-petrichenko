/**
 *
 */
(
    () => {
        const
            boxEl = document.querySelector('.box'),   // type = Element
            box = document.querySelector('.box') as HTMLElement,
            input = document.querySelector('input') as HTMLInputElement,
            input2 = <HTMLInputElement>document.querySelector('input')
        ;
        console.log('boxEl', typeof boxEl, boxEl);
        console.log('boxEl instanceof Element', boxEl instanceof Element);                   // true
        console.log('boxEl instanceof HTMLElement', boxEl instanceof HTMLElement);           // true
        console.log('boxEl instanceof HTMLInputElement', boxEl instanceof HTMLInputElement); // false

        // boxEl?.style   // Fail // error TS2339: Property 'style' does not exist on type 'Element'.
        // boxEl?.classList // OK
        console.log('box.style', box.style);

        const
            inputText = input.value, // type = string
            inputNumber: number = +input.value, // Конвертация типа через трюк JavaScript
            inputNumber1: number = parseInt(input.value), // Конвертация типа из строки. Правильный способ работы.
            //inputNumber2 : number = input.value as number, // error TS2352: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
            inputNumber2: number = input.value as any as number // Утверждение типа. Обманываем проверку типов TSC. На самом деле в переменной будет string
        ;
        console.log('inputText', inputText, typeof inputText);          // 55 string
        console.log('inputNumber', inputNumber, typeof inputNumber);    // 55 number
        console.log('inputNumber1', inputNumber1, typeof inputNumber1); // 55 number
        console.log('inputNumber2', inputNumber2, typeof inputNumber2); // 55 string

        console.log('inputNumber.toFixed()', inputNumber.toFixed(), typeof inputNumber.toFixed()); // 55 string
        try {
            console.log('inputNumber2.toFixed()', inputNumber2.toFixed()); // TypeError: inputNumber2.toFixed is not a function
        } catch (e) {
            console.log('inputNumber2.toFixed()', 'Error:', e);
        }

    }
)();
