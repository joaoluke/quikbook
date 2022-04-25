import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#c04c8b, #2952bc);

  .alert {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export const InputsContainer = styled.div`
  margin: 15% 0;
`;

export const Footer = styled.footer`
  justify-content: center;
  margin-top: 15%;
  display: flex;
`;

export const NotHaveAccount = styled.div`
  width: 70%;
  font-size: 13px;
  text-align: center;
  color: #a5a5a5;
`;
