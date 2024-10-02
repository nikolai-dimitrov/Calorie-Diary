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
	const throwIfFieldsAreEmpty = () => {
		let formErrorsBuffer = formErrors;
		for (const key in formValues) {
			if (formValues[key] == "" && formErrorsBuffer[key].length == 0) {
				formErrorsBuffer[key].push("This field is required");
			}
		}
		setFormErrors((formErrors) => ({ ...formErrors, ...formErrorsBuffer }));
	};

	const checkFormErrors = () => {
		for (const error in formErrors) {
			if (formErrors[error].length > 0) {
				return true;
			}
		}

		return false;
	};

	// * It sets all properties into focusedField state to false.
	//   1. When focusedField property = false -> AuthForm component shows error for that field if any and hide field requirements.
	//  (Invoke onSubmit)
	const hideRequirementsShowErrors = () => {
		let focusedFields = Object.fromEntries(
			Object.entries(focusedField).map((el) => [el[0], (el[1] = false)])
		);

		setFocusedField((state) => ({
			...focusedFields,
		}));
	};

	// * When field is onFocus it sets property for that field in focusedField state to true AND false for other fields.
	//   1. When focusField state property = true: -> field requirements for that field are visible for the user instead of errors if any.
	const hideErrorShowRequirements = (event) => {
		let focusedFields = Object.fromEntries(
			Object.entries(focusedField).map((el) => [el[0], (el[1] = false)])
		);

		const focusedFieldName = event.target.name;

		setFocusedField((state) => ({
			...focusedFields,
			[focusedFieldName]: true,
		}));
	};

	const onFocus = (event) => {
		hideErrorShowRequirements(event);
	};

	// Validate input data for current field and checks whether the requirements are met.
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
		throwIfFieldsAreEmpty();
		const errors = checkFormErrors();

		if (errors) {
			hideRequirementsShowErrors();
			return;
		}

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

// Da napravq funciq po elegantno da ne e s for loop da setva i premahva fokusite
