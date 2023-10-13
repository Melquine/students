import React from "react"
import Select from "./Select/Select"
import Input from "./Input/Input"

const FormikControl = (props) => {
    const { control, ...rest } = props

    switch (control) {
        case 'select':
            return <Select {...rest} />
        case 'input':
            return <Input {...rest} />    
        default:
            return null    
    }
}

export default FormikControl