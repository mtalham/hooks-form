import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {NumberInput, SelectInput, TextInput} from "./inputs";

const Testform = () => {
  const {handleSubmit, register, errors, setValue} = useForm({
    defaultValues: {name: 'Test name'}
  });

  const [values, setSelectedValue] = useState({selectedOption: []});
  const [values2, setSelectedValue2] = useState({selectedOption2: []});

  const handleMultiChange = selectedOption => {
    setValue("Flavours", selectedOption);
    setSelectedValue({selectedOption})
  };

  const handleMultiChange2 = selectedOption => {
    setValue("IceFlavours", selectedOption);
    setSelectedValue2({selectedOption})
  };

  const onSubmit = data => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="name" ref={register({required: true})} error={errors.name}/>
      <NumberInput label="age" register={register} error={errors.age} min={22}/>
      <SelectInput name="Flavours" value={values.selectedOption} handleChange={handleMultiChange} options={Options} register={register}  />
      <SelectInput
        name="IceFlavours"
        value={values2.selectedOption}
        handleChange={handleMultiChange2}
        options={Options}
        register={register}
      />
      <input type="submit"/>
    </form>
  );
};

export default Testform;

const Options = [
  {value: "chocolate", label: "Chocolate"},
  {value: "vanilla", label: "Vanilla"},
  {value: "strawberry", label: "Strawberry"},
];
