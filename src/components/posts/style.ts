import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 5rem;
  padding: 32px;
  background: #fafafa;
  border-radius: 10px;
  width: 65%;
  box-shadow: 1px 1px 5px 1px rgb(0 0 0 / 20%);
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

  .user-and-icon {
    display: flex;
    justify-content: space-between;

    .user-information {
      display: flex;

      .user {
        align-items: center;
        display: flex;
        margin-left: 10px;
      }
    }

    .icons-actions {
      width: 3rem;
      color: #a1a1a1;
      display: flex;
      justify-content: space-around;
      cursor: pointer;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 19px;
  }
`;

export const Icon = styled.div`
  height: 35px;
  width: 35px;
  background: #d3f1ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  max-height: 15rem;
  padding: 10px;
`;

export const Input = styled.input`
  width: 50%;
  margin: 0 25%;
  box-shadow: 0px 0px 4px 0px #b8b8b8;
  border: none;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0 10px;
  height: 24px;
`;

export const Comments = styled.div`
  border-top: 1px solid;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
