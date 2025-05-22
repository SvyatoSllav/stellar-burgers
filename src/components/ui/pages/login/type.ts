import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { PageUIProps } from '../common-type';

export interface LoginUIProps {
  errorText: string;
  email: string;
  password: string;
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
