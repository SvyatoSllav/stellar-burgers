import { FC, SyntheticEvent, useState } from 'react';
import { RegisterUI } from '@ui-pages';
import { useDispatch } from '../../services/store';
import { registerUserApi } from '@api';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const Register: FC = () => {
  const { values, handleChange } = useForm({
    userName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    registerUserApi({
      name: values.userName,
      email: values.email,
      password: values.password
    })
      .then((user) => {
        navigate('/login');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <RegisterUI
      errorText={error}
      email={values.email}
      userName={values.userName}
      password={values.password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
