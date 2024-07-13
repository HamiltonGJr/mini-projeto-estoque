import styled from "styled-components";

export const FormRegister = styled.form`
  width: 25%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 08px;
  box-sizing: border-box;
  border-radius: 0 18px 18px 0;
  background: rgb(41, 166, 120);
  background: linear-gradient(
    180deg,
    rgba(41, 166, 120, 1) 0%,
    rgba(48, 242, 171, 1) 100%
  );
`;
export const TitleForRegister = styled.h1`
  font-size: 28px;
  text-align: center;
  color: #3c3c40;
`;
export const LabelRegister = styled.label`
  width: 95%;
  padding: 08px 16px;
  display: flex;
  flex-direction: column;
  color: #3c3c40;
`;
export const InputRegister = styled.input`
  margin-top: 08px;
  padding: 10px 16px;
  border: 1px solid #3c3c40;
  border-radius: 04px;
`;
export const ButtonRegister = styled.button`
  width: 95%;
  margin-top: 25px;
  padding: 10px 45px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 06px;
  cursor: pointer;
  color: #fff;
  background-color: #458c72;
  transition: 0.2s;
  &:hover {
    background-color: #29a678;
    transition: 0.2s;
  }
`;
