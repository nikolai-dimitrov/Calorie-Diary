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

	// If there aren't any form errors and field/fields are empty show message: field is required
	const checkEmptyFields = () => {
		let formErrorsBuffer = formErrors;
		for (const key in formValues) {
			if (formValues[key] == "" && formErrorsBuffer[key].length == 0) {
				formErrorsBuffer[key].push("This field is required");
			}
		}
		setFormErrors((formErrors) => ({ ...formErrors, ...formErrorsBuffer }));
	};

	const checkFieldRequirements = () => {
		console.log(fieldRequirements, "requirements");
	};

	const checkIsReadyToSubmit = () => {
		for (const error in formErrors) {
			if (formErrors[error].length > 0) {
				return false;
			}
		}

		return true;
	};

	// Change field requirements paragraph hidden property
	// Field requirements paragraph hidden or not depends on focusedField state. If focused true -> show paragraph, false-> hide paragraph
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

		// If field requirements are completed then set to true -> AuthForm add success css class to field requirement paragraph
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
		console.log("dsa");
		checkEmptyFields();
		// checkFieldRequirements();
		const isReady = checkIsReadyToSubmit();
		if (!isReady) return;
		// Check if request is successful
		const isSuccessful = await submitHandler(formValues);
		setSuccess(isSuccessful);
	};

	// (onBlur) Validate field -> if there are any errors show error messages than remove current field focus and hide field requirements list
	const validateInput = (event) => {
		console.log("validate ONBLUR");
		const { errors } = validator(event);

		setFormErrors((state) => ({ ...state, ...errors }));
		setFocusedField((focusedField) => ({
			...focusedField,
			[event.target.name]: false,
		}));
	};

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
