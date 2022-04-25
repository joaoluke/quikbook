import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  height: 100px;
  display: flex;
  justify-content: center;

  .user-information {
    display: flex;

    .user {
      align-items: center;
      display: flex;
      margin-left: 10px;
    }
  }
`;

export const InsertPost = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .input {
    width: 90%;
    border-radius: 9px;
    border: 1px solid #a1a1a1;
    height: 30px;
    padding: 0 10px;
  }

  .textarea {
    width: 90%;
    height: 67px;
    border-radius: 9px;
    border: 1px solid #a1a1a1;
    padding: 0 10px;
    max-width: 389px;
    max-height: 40px;
    margin: 6px 0px;
  }

  .icon {
    color: #a1a1a1;
    cursor: pointer;
  }
`;
