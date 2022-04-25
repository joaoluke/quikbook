import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { faUser, faLock, faA } from '@fortawesome/free-solid-svg-icons';

import ApiFaker from '../../../fakerApi';

import {
  CardComponent,
  ButtonComponent,
  InputComponent,
  TextComponent,
} from '../../components';
import { ValidationInputsRegister } from '../../utils/useValidate';
import * as Style from './style';

const Register = () => {
  const [inputsValues, setInputsValues] = useState({
    name: '',
    user: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState<string>('');

  const [openAlert, setOpenAlert] = useState(false);
  const [responseRegister, setResponseRegister] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (target: HTMLInputElement) => {
    const { id, value } = target;
    setInputsValues({ ...inputsValues, [id]: value });
  };

  const submit = async () => {
    const validation = await ValidationInputsRegister(inputsValues);
    if (validation.error) {
      setError(validation.message);
      return;
    }
    setError(validation.message);

    setLoading(true);
    try {
      const res = await ApiFaker.post('/register', {
        name: inputsValues.name,
        username: inputsValues.user,
        password: inputsValues.password,
      });
      setOpenAlert(true);
      setResponseRegister(res.message);
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } catch (err) {
      setOpenAlert(true);
      setResponseRegister(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Style.Container>
      <Head>
        <title>Cadastro - QuikBook</title>
      </Head>

      <CardComponent title="Cadastro">
        <Style.InputsContainer>
          <InputComponent
            onChange={handleChange}
            value={inputsValues.name}
            placeholder="Nome"
            type="text"
            id="name"
            icon={faA}
          />
          <InputComponent
            onChange={handleChange}
            value={inputsValues.user}
            placeholder="Usuário"
            type="text"
            id="user"
            icon={faUser}
          />
          <InputComponent
            onChange={handleChange}
            value={inputsValues.password}
            placeholder="Senha"
            type="password"
            id="password"
            icon={faLock}
          />
          <InputComponent
            onChange={handleChange}
            value={inputsValues.repeatPassword}
            placeholder="Repita a senha"
            type="password"
            id="repeatPassword"
            icon={faLock}
          />
        </Style.InputsContainer>

        <TextComponent color="#de2828">{error}</TextComponent>

        <ButtonComponent
          title={loading ? 'Carregando...' : 'Cadastro'}
          color="#e265aa"
          onClick={loading ? () => null : submit}
        />
      </CardComponent>

      <Collapse in={openAlert} className="alert">
        <Alert
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
          severity={responseRegister.includes('sucesso') ? 'success' : 'error'}
          sx={{ mb: 2 }}
        >
          {responseRegister}
        </Alert>
      </Collapse>
    </Style.Container>
  );
};

export default Register;
