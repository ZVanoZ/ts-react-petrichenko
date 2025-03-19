interface IForm {
	login: string;
	password: string;
}

const validationData = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};
