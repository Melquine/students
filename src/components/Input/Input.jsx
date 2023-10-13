const Input = (props) => {
    const { label, name } = props
    
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input name={name} />
        </>

    )
}

export default Input