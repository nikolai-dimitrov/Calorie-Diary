import { useState } from "react";

export const useForm = (initialValues, submitHandler) => {
	const [formValues, setFormValues] = useState(initialValues);

	const onChange = (event) => {
		setFormValues((formValues) => ({
			...formValues,
			[event.target.name]: event.target.value,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		submitHandler(formValues);
	};

	return {
		formValues,
		onChange,
		onSubmit,
	};
};
