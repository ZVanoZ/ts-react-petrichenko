# about

https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/86

Описание эпизода

В этом уроке мы попрактикуемся работать с имплементацией

Ресурсы:

Файл задания

[Проверить код](https://github.com/yankovalenko94/TS_task_answers/blob/master/TS_step_10/index.ts)

# [answer](answer/index.ts)

Работает, но пришлось модифицировать интерфейс.

Постановка задачи ужасная:
* Почему в интерфейсе TransferError поле message обязательно?   
  У нас что, всегда какая-то ошибка передачи данных?  
  Или хотя бы сделал вариант NoError для нормального состояния.
* Как конкретно должен работать метод start?
* Зачем нужен параметр data?
* Когда должен меняться статус и на какой?

---

Запустить
```bash
../../node_modules/.bin/ts-node ./answer/index.ts
```

Компилировать
```bash
../../node_modules/.bin/tsc  --project ./answer/tsconfig.json
```