import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  .logout {
    position: absolute;
    right: 18px;
    cursor: pointer;
  }
`;
