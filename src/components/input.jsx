
const Input = ({ value, placeholder, type, name, id, onChange }) => {
    return (
        <input value={value} className='h10 w-full border rounded-md p-2 outline-none mt-3'
            placeholder={placeholder} type={type} name={name} id={id} onChange={onChange} />
    )
}

export default Input