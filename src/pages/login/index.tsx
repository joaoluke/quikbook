import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

import ApiFaker from '../../../fakerApi';

import {
  CardComponent,
  InputComponent,
  TextComponent,
  ButtonComponent,
} from '../../components';
import { ValidationInputsLogin } from '../../utils/useValidate';
import * as Style from './style';

const Login = () => {
  const [inputsValues, setInputsValues] = useState({
    user: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (target: HTMLInputElement) => {
    const { id, value } = target;
    setInputsValues({ ...inputsValues, [id]: value });
  };

  const notifySuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const submit = async () => {
    const validation = await ValidationInputsLogin(inputsValues);
    if (validation.error) {
      setError(validation.message);
      return;
    }
    setError(validation.message);

    setLoading(true);
    try {
      const res = await ApiFaker.post('/login', {
        username: inputsValues.user,
        password: inputsValues.password,
      });
      notifySuccess(res.message);
      setTimeout(() => {
        router.push('/home');
      }, 1000);
    } catch (err) {
      notifyError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Style.Container>
      <Head>
        <title>Login - QuikBook</title>
      </Head>

      <CardComponent title="LOGIN">
        <Style.InputsContainer>
          <InputComponent
            onChange={handleChange}
            value={inputsValues.user}
            placeholder="Usuário"
            type="user"
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
        </Style.InputsContainer>

        <TextComponent color="#de2828">{error}</TextComponent>

        <ButtonComponent
          title={loading ? 'Carregando...' : 'Login'}
          color="#e265aa"
          onClick={loading ? () => null : submit}
        />

        <Style.Footer>
          <Style.NotHaveAccount>
            Não tem uma conta?
            <Link href="/register">
              <a href="/#"> Cadastre-se</a>
            </Link>
          </Style.NotHaveAccount>
        </Style.Footer>
      </CardComponent>

      <ToastContainer />
    </Style.Container>
  );
};

export default Login;
