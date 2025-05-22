import { FC, SyntheticEvent } from 'react';
import { LoginUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import {
  loginUser,
  loginErrorSelector
} from '../../services/slices/userSlice/userSlice';
import { useForm } from '../../hooks/useForm';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!values.email.length || !values.password.length) return;
    dispatch(loginUser({ email: values.email, password: values.password }));
  };
  const errorText = useSelector(loginErrorSelector) ?? '';

  return (
    <LoginUI
      errorText={errorText}
      email={values.email}
      password={values.password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
