import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Form = styled.form`
  width: 60%;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  background: #bc8f8f;
  @media (max-width: 1024px) {
    width: 100%;
    height: 80%;
    overflow-y: scroll;
  }
`;
export const LoginForm = styled.form`
  width: 30%;
  margin: 1rem;
  border: none;
  text-align: center;
  border-radius: 1rem;
  background: #800080;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 60%;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  gap: 1rem;
  text-align: center;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  gap: 1rem;
  margin: 0.5rem;
  text-align: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormTitle = styled.legend`
  color: #fff0f5;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const FormSubTitle = styled.legend`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const FormLegend = styled(NavLink)`
  color: #800080;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 1rem;
  text-decoration: none;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 1rem;
  justify-content: space-around;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Search = styled(SearchOutlinedIcon)`
  position: absolute;
  bottom: 0.2rem;
  left: 0.2rem;
  z-index: 1000;
  color: #000;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  color: #000 !important;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    padding: 0.8rem 1rem;
    gap: 1rem;
  }
`;
