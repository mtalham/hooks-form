import React, {useEffect, useState} from 'react'
import {useFormContext} from "react-hook-form";
import Select from "react-select";

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

export const Checkbox = ({label, name}) => {
  const {register} = useFormContext()

  return (
    <label>
      <input style={{width: "14px"}} type="checkbox" name={name} ref={register}/>
      {label}
    </label>
  )
}

export const SelectInput = ({name, options, isMulti = true}) => {
  const [values, setSelectedValue] = useState({selectedOption: []});
  const {register, setValue} = useFormContext()

  useEffect(() => {
    register({name: name});
  }, [register, name]);

  const handleMultiChange = selectedOption => {
    setValue(name, selectedOption);
    setSelectedValue({selectedOption})
  };

  return (
    <>
      <label>{name}</label>
      <Select
        name={name}
        placeholder={name}
        options={options}
        onChange={handleMultiChange}
        value={values.selectedOption}
        isMulti={isMulti}
      />
    </>
  );
};

export const Error = ({children}) => (<p style={{color: "orangered"}}>{children}</p>);
