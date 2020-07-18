import React from 'react';
import './App.css';
import FieldArrayForm from "./components/fieldArrayForm";
import Testform from "./components/testform";
import Form from "./components/Form";
import {Input} from "./components/FormInputs";
import SubmitButton from "./components/SubmitButton";

function App() {
  const onSubmit = data => alert(`data: ${JSON.stringify(data)}`);
  return (
    <div className="App">
      {/*<FieldArrayForm/>*/}
      <Testform/>
      <Form onSubmit={onSubmit}>
        <Input label="Name" name="name" validation={{required: "Name is required"}}/>
        <Input label="Age" name="age" type="number" validation={{min: {value: 21, message: 'Min 21 is required'}}}/>
        <Input label="Email" name="email" type="email"/>
        <SubmitButton/>
      </Form>
    </div>
  );
}

export default App;
