import { useState } from 'react';

export const useAddTask = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onChangeName: React.ChangeEventHandler<HTMLInputElement> = e => {
    setName(e.target.value);
  };

  const onChangeDescription: React.ChangeEventHandler<HTMLInputElement> = e => {
    setDescription(e.target.value);
  };

  const onCreate = () => {};

  return { name, onChangeName, description, onChangeDescription, onCreate };
};
