import { ChangeEvent } from 'react';

export interface RegisterUIProps {
  errorText: string;
  email: string;
  userName: string;
  password: string;
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
