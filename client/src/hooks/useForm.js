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

	const checkIsReadyToSubmit = () => {
		for (const error in formErrors) {
			if (formErrors[error].length > 0) {
				return false;
			}
		}

		return true;
	};

	// Change field requirements paragraph hidden property.It Control displaying field error / field requirements
	// When field is on Focus:
	// --- If there is an error -> Hide error and show paragraph with field requirements
	// --- If there isn't an error  -> Show paragraph with field requirement
	// When field is not onFocus:
	// --- Show field errors if any.
	// --- Field requirements are hidden.

	// When field is onFocus adds true into focusedField state for that field and AuthForm component will hide errors for that field if any AND shows field requirements.
	// When field is not onFocus if there are errors they will be shown and requirements for that field will be hidden
	const onFocus = (event) => {
		// console.log(event.target);

		let fieldBuffer = {};
		for (const field in focusedField) {
			fieldBuffer[field] = false;
		}

		// onSubmit remove focus from all fields, else set focus on clicked field.
		if (event.target.type == "submit") {
			setFocusedField((state) => ({
				...state,
				...fieldBuffer,
			}));
		} else {
			setFocusedField((state) => ({
				...state,
				...fieldBuffer,
				[event.target.name]: true,
			}));
		}
	};

	// Validate input data for current field, checks whether the requirements are met.
	const onChange = (event) => {
		setFormValues((formValues) => ({
			...formValues,
			[event.target.name]: event.target.value,
		}));

		const { errors, currentFieldRequirements } = validator(event);

		// If field requirements are completed then set to true -> AuthForm add success css class to field requirement paragraph
		setFieldRequirements((state) => ({
			...state,
			...currentFieldRequirements,
		}));

		// Set form errors for current field
		setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		console.log(formErrors, "submit");
		onFocus(event);
		checkEmptyFields();
		const isReady = checkIsReadyToSubmit();
		if (!isReady) return;
		// Check if request is successful

		const isSuccessful = await submitHandler(formValues);
		setSuccess(isSuccessful);
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
	};
};
