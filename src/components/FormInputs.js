import React from 'react'
import {useFormContext} from "react-hook-form";
import {Error} from "./inputs";

export const Input = ({label, name, required, validation, ...props}) => {
  const {register, errors} = useFormContext()

  return (
    <div>
      <label>
        {label}
        <input
          {...props}
          name={name}
          ref={register(validation || {required: !!required})}
        />
      </label>
      {errors[name] && <Error>{errors[name].message}</Error>}
    </div>
  )
}
