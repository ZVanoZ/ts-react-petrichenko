# О лекции

Практика работы с DOM.

В этом уроке мы попрактикуемся работать со страницей

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/54)

## Run

* Скомпилировать *.tsc в папке "./answer/"
````shell
tsc --build answer 
````

    * Вывести дополнительную информацию о компиляции

````shell
tsc --build --verbose answer 
````
Принудительно перекомпилировать приложение, даже если исходник не изменился  
````shell
tsc --build --verbose --force answer 
````

* Попытка скомпилировать один файл с конфмгом вызывает ошибку TS5042 
````shell
tsc --project answer/tsconfig.json answer/index.ts 
````
error TS5042: Option 'project' cannot be mixed with source files on a command line.  
https://github.com/microsoft/TypeScript/issues/27379
```text
Allow tsconfig.json when input files are specified #27379 
```
## Дополнительные материаллы

* RU []()
* EN [ Source Map - sourceMap](https://www.typescriptlang.org/tsconfig/#sourceMap)