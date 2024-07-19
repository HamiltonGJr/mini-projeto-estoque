import styled from "styled-components";

export const ContainerProduct = styled.li`
  margin: 05px 16px;
  padding: 15px;
  width: 27%;
  border-radius: 04px;
  border: 02px solid ${({ theme }) => theme.color};
  list-style-type: none;
  background-color: ${({ theme }) => theme.background01};
  color: ${({ theme }) => theme.color};
`;
export const NameProduct = styled.h3`
  padding: 05px;
  margin-bottom: 15px;
  text-align: center;
  border: 02px solid ${({ theme }) => theme.color};
  border-radius: 02px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
export const TextProduct = styled.p`
  color: ${({ theme }) => theme.color};
`;
export const ContainerButton = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const ButtonProduct = styled.button`
  margin: 0 10px;
  padding: 05px 15px;
  width: 150px;
  font-weight: 600;
  border: none;
  border-radius: 06px;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.color};
`;
export const InputProduct = styled.input`
  padding: 01px 12px;
  border: 1px solid #3c3c40;
  border-radius: 02px;
`;
