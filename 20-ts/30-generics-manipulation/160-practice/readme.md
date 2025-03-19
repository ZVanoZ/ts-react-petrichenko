# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/72)

Описание эпизода

Практика работы с дженериками, типами и манипуляциями

Ресурсы:

[index.ts](task/index.ts)

[slider.ts](task/slider.ts)

[form.ts](task/form.ts)

[Проверить код](https://github.com/yankovalenko94/TS_task_answers/tree/master/TS_step_9)

## Постановка

1.  [index.ts](task/index.ts)
Есть входящий объект следующей структуры  
```typescript

const fitnessClubCenter = {
	clubName: "Fitness club Center",
	location: "central ave. 45, 5th floor",
	classes: [{...}],
    futureClasses: [{...}],
    currClients: [{...}],
    exClients: [{...}],
    futureClients: [{...}],
};
```
Необходимо его типизировать, как мы это делали в [30-record-transform.ts](../150-utility-types/30-record-transform.ts)
2. [slider.ts](task/slider.ts)
@TODO: Пересмотреть видео и попытаться понять, что нужно сделать.   
С первого раза не понял в чем суть задачи.  
3. [form.ts](task/form.ts)  
Сделать валидатор данных формы.  
Результат должен оперировать подобными структурами.
```typescript
interface IValidationItem {
    isValid: boolean;
    errorMessage?: string;
}

interface IFormLoginValidationResult {
    login: IValidationItem;
    password: IValidationItem;
}

function validateFormLogin(data: IForm): IFormLoginValidationResult {
    // ...
}
```