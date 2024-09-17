# О лекции

В этом дополнительном уроке мы посмотрим на работу типа void

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/55)

## Дополнительные материаллы

* EN [Return type void](https://www.typescriptlang.org/docs/handbook/2/functions.html#return-type-void)

## Run

````shell
tsc ./*.ts 
````

## Суть урока

* Если функция объявлена с явным указанием типа void в качестве результата, то TSC проверяет что возвращает
  функция.
  ````typescript
    type TFunctionVoid = () => void;
    const
            funRetString: TFunctionVoid = (): void => {
                return 'some-string-result'; // error TS2322: Type 'string' is not assignable to type 'void'.
            }
    ;
  ````
* Если функция объявлена с применением сигнатуры, то TSC не следит за типом возвращаемого значения.
  ````typescript
    type TFunctionVoid = () => void;
    const
        funRetString: TFunctionVoid = () => {
            return 'some-string-result';
        }
    ;
  ````