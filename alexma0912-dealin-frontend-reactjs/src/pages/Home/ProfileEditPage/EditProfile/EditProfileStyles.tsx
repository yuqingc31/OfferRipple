import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 50%;
  border-radius: 1.25rem;
  margin-left: 10%;
  margin-bottom: 1.625rem;
  padding: 1.25rem;
  // box-shadow: 0px 0.125rem 0.375rem 0px rgba(0, 0, 0, 0.1);
`;

export const ProfileField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 80%;
`;

export const FieldTitle = styled.text`
  font-size: 1.1rem;
  color: #575961;
`;

export const EditButton = styled.button<{ editMode: boolean }>`
  margin-top: 2rem;
  margin-left: 20%;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 40%;
  background-color: ${(props) => (props.editMode ? '#3285fa' : '#f85c70')};
`;
