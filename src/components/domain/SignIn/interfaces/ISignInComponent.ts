import { UseFormReturn } from 'react-hook-form';

export interface ISignInComponent {
  formMethods: UseFormReturn;
  // onSubmit: (formFields: any) => any;
  onSubmit: any;
}
