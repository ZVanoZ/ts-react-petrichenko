# О лекции

В этом уроке мы изучим обобщенные классы в Typescript

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/62)

## Ссылки

* EN: [Generic Classes](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes)

## Run

````shell
tsc ./*.ts 
````

````shell
tsc --build --verbose --force ./ 
````

## Коротко

generic-классы это шаблоны классов в которых конкретные типы не известны.  
Они подставляются снаружи в момент использования класса.
```typescript
class User<T1, T2> {
    name: T1;
    age: T2;

    constructor(name: T1, age: T2) {
    }

    getMyFullName<T>(surname: T): string {
    }
}
const user1_0 = new User('Вася', 25);   // <string, number>
const user1_1 = new User('Вася', '25'); // <string, string>
console.log('-- user3 fullName from string.', user3.getMyFullName('Иванов-string')); // getMyFullName<string>
```
Когда мы наследуем от generic-класса, нам нужно четко указать generic-типы для родительского класса.
```typescript
class AdminUser<T>
    extends User<string, number> // для родительского класса User заданы generic-типы
{
    rules: T;
}
```

