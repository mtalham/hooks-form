import React from 'react';
import './App.css';
import Form from "./components/Form";
import {Checkbox, Input, SelectInput} from "./components/FormInputs";
import SubmitButton from "./components/SubmitButton";

function App() {
  const onSubmit = data => alert(`data: ${JSON.stringify(data)}`);
  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <Input label="Name" name="name" validation={{required: "Name is required"}}/>
        <Input label="Age" name="age" type="number" validation={{min: {value: 21, message: 'Min 21 is required'}}}/>
        <Input label="Email" name="email" type="email"/>
        <Checkbox name="terms" label="Accept terms of agreement"/>
        <SelectInput name="Flavours" options={Options} />
        <SubmitButton/>
      </Form>
    </div>
  );
}

export default App;

const Options = [
  {value: "chocolate", label: "Chocolate"},
  {value: "vanilla", label: "Vanilla"},
  {value: "strawberry", label: "Strawberry"},
];
