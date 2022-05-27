import { useState } from "react";
import validator from 'validator';

export const useForm = (initialState = { fields: {terms: false, revicedInformation: false}, errors: {}}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const phoneValidator = /(\+57|57|57)?[ -]*(601|604)[ -]*([0-9][ -]*){7}$/;

    const handleInputChange = ({ target }) => {
        setValues(
            {
                fields: {
                    ...values.fields,
                    [target.name]: target.value,
                },
                errors: {
                    ...values.errors,
                    [target.name]: validateField(target),

                }
            }
        );
    }

    const updateValues = (value) => {
        setValues(
            {
                fields: {
                    ...values.fields,
                    [value.field]: value.value,
                },
                errors: {
                    ...values.errors,
                    [value.field]: validateField(value.event.target, value.value)
                }
            }
        )

    }

    const validateField = (field, value) => {
        if (field.value.trim().length === 0) {
            return {
                isInvalid: true,
                isPristine: false
            };
        }

        else {
            if ((field.name === 'email') && (!validator.isEmail(field.value))) {
                return {
                    isInvalid: true,
                    isPristine: false
                };
            }

            else if ((field.name === 'phone') && (!phoneValidator.test(field.value))) {
                return {
                    isInvalid: true,
                    isPristine: false
                };
            }

            else if ((field.name === 'revicedInformation' || field.name === 'terms') && (value === false)) {
                return {
                    isInvalid: true,
                    isPristine: false
                };
            }

            else {
                return {
                    isInvalid: false,
                    isPristine: false
                };
            }

        }

    }

    return [values, handleInputChange, updateValues, reset];
}   
