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
  margin: 33px 0;
`;
