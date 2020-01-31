import React, {useEffect} from 'react';
import Select from "react-select";

const Error = ({children}) => (<p style={{color: "orangered"}}>{children}</p>);

export const TextInput = React.forwardRef(({label, error}, ref) => (
  <>
    <label>{label}</label>
    <input name={label} ref={ref}/>
    {error && <p>{label} is required</p>}
  </>
));

export const NumberInput = ({label, register, error, min = 18, max = 99}) => (
  <>
    <label>{label}</label>
    <input type="number" name={label} ref={register({required: true, min, max})}/>
    {error && (error.type === "required" ? <Error>{label} is required</Error> :
      <Error>Min {min} and Max {max} is allowed</Error>)}
  </>
);

export const SelectInput = ({name, options, value, handleChange, register, isMulti = true}) => {
  useEffect(() => {
    register({name: name});
  }, [register, name]);

  return (
    <>
      <label>{name}</label>
      <Select
        name={name}
        placeholder={name}
        options={options}
        onChange={handleChange}
        value={value}
        isMulti={isMulti}
      />
    </>
  );
};
