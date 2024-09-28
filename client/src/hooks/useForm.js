import { useState } from "react";
export const useForm = (initialValues, submitHandler, validator) => {
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState(() => {
		return Object.fromEntries(
			Object.entries(initialValues).map((el) => [el[0], []])
		);
	});

	const [focusedField, setFocusedField] = useState(initialValues);
	const [fieldRequirements, setFieldRequirements] = useState(initialValues);
	const [success, setSuccess] = useState(false);

	const checkEmptyFields = () => {
		let formErrorsBuffer = formErrors;
		for (const key in formValues) {
			if (formValues[key] == "" && formErrorsBuffer[key].length == 0) {
				formErrorsBuffer[key].push("This field is required");
			}
		}
		setFormErrors((formErrors) => ({ ...formErrors, ...formErrorsBuffer }));
	};

	const checkIsReadyToSubmit = () => {
		for (const error in formErrors) {
			if (formErrors[error].length > 0) {
				return false;
			}
		}
		return true;
	};

	// If field is focused -> auth form doesn't show errors on that field (while focused)
	const onFocus = (event) => {
		setFocusedField((focusedField) => ({
			...focusedField,
			[event.target.name]: true,
		}));
	};

	const onChange = (event) => {
		setFormValues((formValues) => ({
			...formValues,
			[event.target.name]: event.target.value,
		}));

		// If field requirements are completed then set to true -> AuthForm add success css class
		const { errors, currentFieldRequirements } = validator(event);
		setFieldRequirements((state) => ({
			...state,
			...currentFieldRequirements,
		}));

		// Remove form errors for current field
		setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		console.log("SUBMIT");

		checkEmptyFields();
		const isReady = checkIsReadyToSubmit();
		if (!isReady) return;

		console.log("AFTER CHECK SUBMIT");
		// Check if request is successful
		const isSuccessful = await submitHandler(formValues);
		setSuccess(isSuccessful);
	};

	const validateInput = (event) => {
		console.log("validate ONBLUR");
		const { errors } = validator(event);
		// validateInput is called onBlur and remove focus of the current field

		setFormErrors((state) => ({ ...state, ...errors }));
		setFocusedField((focusedField) => ({
			...focusedField,
			[event.target.name]: false,
		}));
	};
	console.log(formErrors);
	return {
		formValues,
		formErrors,
		onChange,
		onSubmit,
		onFocus,
		success,
		focusedField,
		fieldRequirements,
		validateInput,
	};
};
