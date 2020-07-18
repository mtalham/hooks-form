import React from 'react';
import {FormProvider, useForm} from "react-hook-form";

const Form = ({initialValues, children, onSubmit}) => {
  const methods = useForm({defaultValues: initialValues})
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
