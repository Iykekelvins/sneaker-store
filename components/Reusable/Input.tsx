import React from 'react';

type InputProps = {
    value: string
    name:string
    placeholder: string
    type: "text"
    onChange: (e: any)=> void
}

const Input:React.FC<InputProps> = ({value, name, type, placeholder, onChange}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input