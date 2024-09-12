var number = CSS.number;
var inputs = {
    emailInput: document.querySelector('#email'),
    titleInput: document.querySelector('#title'),
    textInput: document.querySelector('#text'),
    checkboxInput: document.querySelector('#checkbox')
};
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
var forms = document.forms;
for (var i = 0, count = forms.length; i < count; i++) {
    console.log('bind-form-submit', i, forms[i]);
    forms[i].addEventListener('submit', onSubmit);
}
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function onSubmit(e) {
    console.log('onSubmit', arguments);
    e.preventDefault();
    fillFormData();
    var isValid = validateFormData(formData);
    if (isValid) {
        checkFormData(formData);
    }
}
function fillFormData() {
    var _a, _b, _c, _d;
    console.log('fillFormData', arguments);
    formData.text = ((_a = inputs === null || inputs === void 0 ? void 0 : inputs.textInput) === null || _a === void 0 ? void 0 : _a.value) || '';
    formData.email = ((_b = inputs === null || inputs === void 0 ? void 0 : inputs.emailInput) === null || _b === void 0 ? void 0 : _b.value) || '';
    formData.title = ((_c = inputs === null || inputs === void 0 ? void 0 : inputs.titleInput) === null || _c === void 0 ? void 0 : _c.value) || '';
    formData.checkbox = ((_d = inputs === null || inputs === void 0 ? void 0 : inputs.checkboxInput) === null || _d === void 0 ? void 0 : _d.checked) || false;
}
function validateFormData(data) {
    console.log('validateFormData', arguments);
    // Если каждое из свойств объекта data правдиво...
    if (typeof (data) === 'object'
        && typeof (data === null || data === void 0 ? void 0 : data.text) === 'string'
        && data.text.length > 0
        && typeof (data === null || data === void 0 ? void 0 : data.email) === 'string'
        && data.email.length > 0
        && typeof (data === null || data === void 0 ? void 0 : data.title) === 'string'
        && data.title.length > 0
        && typeof (data === null || data === void 0 ? void 0 : data.checkbox) === 'boolean') {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data //
) {
    console.log('checkFormData', arguments);
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.indexOf(email) >= 0) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
//# sourceMappingURL=index.js.map