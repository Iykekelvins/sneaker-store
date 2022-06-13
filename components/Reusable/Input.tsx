import React from 'react';

type InputProps = {
    value: string
    name:string
    placeholder: string
    required?: boolean
    type: "text"
    onChange: (e: any)=> void
}

const Input:React.FC<InputProps> = ({value, name, type, placeholder, required, onChange}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input