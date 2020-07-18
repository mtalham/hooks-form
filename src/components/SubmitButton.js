import React from 'react';
import {useFormContext} from "react-hook-form";

const SubmitButton = () => {
  const {formState: {isDirty, isSubmitting}} = useFormContext()
  return (
    <button type="submit" disabled={!isDirty || isSubmitting}>
      Submit
    </button>
  );
};

export default SubmitButton;
