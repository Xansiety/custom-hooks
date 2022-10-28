import { useState } from "react";


export const useForm = (initialForm = {}) => {

  const [formState, setFormSatate] = useState(initialForm);
 
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormSatate({
      ...formState,
      [name]: value, 
    });
  };
 
  const onResetForm = () => {
    setFormSatate(initialForm);
  };


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};
