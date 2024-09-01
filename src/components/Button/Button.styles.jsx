import styled from "styled-components";
import Button from "@mui/material/Button";

export const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.3125rem;
`;

export const NewButton = styled(Button)`
  width: 100% !important;
  background-color: ${({ $preset }) =>
    $preset === "delete" ? "#d00000" : "#00FF7F	"} !important;
  color: #fefae0 !important;
  font-weight: 600 !important;
  font-size: 0.8rem !important;
`;
