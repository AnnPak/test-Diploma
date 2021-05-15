import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { ISignInComponent } from '../interfaces/ISignInComponent';

interface IProps {
  component: React.ElementType<ISignInComponent>;
}

export const SignInContainer: FC<IProps> = (props) => {
  const { component: Companent } = props;
  const methods = useForm();
  const a = 1;
  const onSubmit = useCallback(
    (formFields: any) => {
      console.log(a);
    },
    [a]
  );

  return <Companent formMethods={methods} onSubmit={methods.handleSubmit(onSubmit)} />;
};
