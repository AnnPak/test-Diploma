import React from 'react';
import { Button, TextField } from '@material-ui/core';

import { ISignInComponent } from '../interfaces/ISignInComponent';

export const SignIn: React.FC<ISignInComponent> = ({ formMethods, onSubmit }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;
  return (
    <div>
      <h5>Авторизация</h5>
      <div>
        <TextField
          label="Логин"
          placeholder="Введите логин"
          variant="outlined"
          helperText={errors.login?.message}
          error={!!errors.login}
          // {...register('login', {
          //   required: { value: true, message: 'Заполните поле!' },
          //   minLength: 5,
          //   maxLength: 32,
          // })}
        />
        <TextField
          label="Пароль"
          placeholder="Введите пароль"
          variant="outlined"
          helperText={errors.password?.message}
          error={!!errors.password}
          {...register('password', {
            required: { value: true, message: 'Заполните поле!' },
            minLength: 3,
            maxLength: 32,
          })}
        />
      </div>
      <div>
        <Button onClick={onSubmit}>Вход</Button>
      </div>
    </div>
  );
};
