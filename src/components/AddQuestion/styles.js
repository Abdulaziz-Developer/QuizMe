//React
import { Link } from "react-router-dom";

//Styled components
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: block;
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
`;

export const Form = styled.form`
  margin-top: 3vh;
`;

export const AddButtonStyled = styled.button`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 1vh 3vw;
`;

export const RequiredLabel = styled.span`
  color: red;
`;

export const PageChangerWrapper = styled.div`
  text-align: center;
  margin-bottom: 2vh;
  margin-top: 2vh;
`;

export const PageChanger = styled.p`
  display: inline;

  :hover {
    cursor: pointer;
    color: #0645ad;
  }
`;

export const Linking = styled(Link)`
  color: ${({ theme }) => theme.textColor};

  :hover {
    text-decoration: none;
  }
`;
