import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = (props) => {
    const { label, name, handleState, options, ...rest} = props

    return (
        <div>
            <label htmlFor={name}>{label}</label>
           
            <select defaultValue='create' id={name} name={name} {...rest} onChange={(e) => handleState(e.target.value)}>
                {options.map(option => {
                    const { value, ...rest } = option
                    return (
                        <option key={option.value} value={option.value} {...rest}>
                            {option.key}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select