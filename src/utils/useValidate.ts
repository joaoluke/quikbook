interface InputProps {
  name?: string;
  user: string;
  password: string;
  repeatPassword?: string;
}

interface ReturnProps {
  error: boolean;
  message: string;
}

export const ValidationInputsRegister = (values: InputProps): ReturnProps => {
  const objectValue = values;
  for (const [key, value] of Object.entries(objectValue)) {
    if (value.length > 20) {
      return {
        error: true,
        message: 'Todos os campos precisam ter no máximo 20 caracteres',
      };
    }
    if (!value) {
      return {
        error: true,
        message: 'Todos os campos precisam estar preenchidos',
      };
    }
    if (value.length < 4) {
      return {
        error: true,
        message: 'Todos os campos precisam ter no mínimo 4 caracteres',
      };
    }
    if (key === 'password' && value !== objectValue.repeatPassword) {
      return {
        error: true,
        message: 'As senhas devem serem iguais',
      };
    }
  }
  return {
    error: false,
    message: '',
  };
};

export const ValidationInputsLogin = (values: InputProps): ReturnProps => {
  const objectValue = values;
  for (const [, value] of Object.entries(objectValue)) {
    if (value.length > 20) {
      return {
        error: true,
        message: 'Todos os campos precisam ter no máximo 20 caracteres',
      };
    }
    if (!value) {
      return {
        error: true,
        message: 'Todos os campos precisam estar preenchidos',
      };
    }
    if (value.length < 4) {
      return {
        error: true,
        message: 'Todos os campos precisam ter no mínimo 4 caracteres',
      };
    }
  }
  return {
    error: false,
    message: '',
  };
};
