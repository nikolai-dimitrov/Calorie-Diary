import { useState } from "react";
export const useForm = (initialValues, submitHandler, validator) => {
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState(() => {
		return Object.fromEntries(
			Object.entries(initialValues).map((el) => [el[0], []])
		);
	});
	const [success, setSuccess] = useState(false);

	const checkEmptyFields = () => {
		for (const key in formValues) {
			if (
				formValues[key] == "" &&
				!formErrors[key].includes("This field is required")
			) {
				formErrors[key].push("This field is required");
			}
		}
	};

	// TODO: Disable submit btn if errors
	// TODO: List all requirements for each field and validate -> onChange

	const onChange = (event) => {
		setFormValues((formValues) => ({
			...formValues,
			[event.target.name]: event.target.value,
		}));
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		checkEmptyFields();
		const isSuccessful = await submitHandler(formValues);
		setSuccess(isSuccessful);
	};

	const validateInput = (event) => {
		const errors = validator(event);
		setFormErrors((state) => ({ ...state, ...errors }));
	};

	return {
		formValues,
		formErrors,
		onChange,
		onSubmit,
		success,
		validateInput,
	};
};
