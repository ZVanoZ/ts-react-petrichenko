import number = CSS.number;

interface Inputs {
    emailInput?: HTMLInputElement;
    titleInput?: HTMLInputElement;
    textInput?: HTMLInputElement;
    checkboxInput?: HTMLInputElement;
}

const inputs: Inputs = {
    emailInput: document.querySelector('#email'),
    titleInput: document.querySelector('#title'),
    textInput: document.querySelector('#text'),
    checkboxInput: document.querySelector('#checkbox')
}

const formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
const forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
for (let i: number = 0, count: number = forms.length; i < count; i++) {
    console.log('bind-form-submit', i, forms[i]);
    forms[i].addEventListener('submit', onSubmit)
}

// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function onSubmit(e) {
    console.log('onSubmit', arguments);
    e.preventDefault();
    fillFormData();
    const isValid: boolean = validateFormData(formData);
    if (isValid) {
        checkFormData(formData);
    }
}

function fillFormData() {
    console.log('fillFormData', arguments);
    formData.text = inputs?.textInput?.value || '';
    formData.email = inputs?.emailInput?.value || '';
    formData.title = inputs?.titleInput?.value || '';
    formData.checkbox = inputs?.checkboxInput?.checked || false;
}

function validateFormData(
    data
): data is typeof formData//
{
    console.log('validateFormData', arguments);
    // Если каждое из свойств объекта data правдиво...
    if (typeof (data) === 'object'
        && typeof (data?.text) === 'string'
        && data.text.length > 0
        && typeof (data?.email) === 'string'
        && data.email.length > 0
        && typeof (data?.title) === 'string'
        && data.title.length > 0
        && typeof (data?.checkbox) === 'boolean'
    ) {
        return true;
    } else {
        console.log("Please, complete all fields");
        return false;
    }
}

function checkFormData(
    data: typeof formData//
): void {
    console.log('checkFormData', arguments);
    const {email} = data;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

    // Если email совпадает хотя бы с одним из массива
    if (emails.indexOf(email) >= 0) {
        console.log("This email is already exist");
    } else {
        console.log("Posting data...");
    }
}
