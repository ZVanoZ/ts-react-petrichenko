# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/83)

В этом уроке мы рассмотрим альтернативный вариант задания начального значения

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html#index-signatures)

* RU [В руководстве](https://scriptdev.ru/guide/022/)

*
EN [Class fields documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

## Конспект

1. Значение по умолчанию. Уже пройдено в [index.ts](../030-methods-override-getter-setter/demo/index.ts)

```typescript
class TFormField {
    public value: string = '';
    protected _allowChars: string = '1234567890'
}
```

2. Можно задекларировать все поля с указанным типом

Практического смысла не вижу. В правильном коде должны использоваться структуры с четкими правилами. 

```typescript
    class TStyles1 {
}

class TStyles2 {
    // Позволяются поля со строковым ключем и строковым значением
    [s: string]: string;
}

class TStyles3 {
    // Позволяются поля со строковым ключем и строковым значением, а также 
    // функции с сигнатурой "(string, string | number):boolean"
    [s: string]: string | ((key: string, val: string | number) => boolean);

    setStyle(
        key: string,
        val: string | number
    ): boolean//
    {
        if (typeof val === 'number') {
            val = val.toString();
        }
        this[key] = val;
        return true;
    }
}

let styles1 = new TStyles1();
// styles1.color = 'red'; //error TS2339: Property 'color' does not exist on type 'TStyles1'.
console.log('styles1', styles1);

let styles2 = new TStyles2();
styles2.color = 'red'; // OK
//styles2.size = 12; // error TS2322: Type 'number' is not assignable to type 'string'.
console.log('styles2', styles2);

let styles3 = new TStyles3();
styles3.color = 'red';        // OK
styles3.setStyle('size', 12); // OK
console.log('styles3', styles3);
/*
styles1 TStyles1 {}
styles2 TStyles2 { color: 'red' }
styles3 TStyles3 { color: 'red', size: '12' }
*/
```