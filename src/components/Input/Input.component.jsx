import PropTypes from "prop-types";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import * as Styled from "./Input.styles";
import { useState } from "react";

export const InputComponent = ({
  label,
  type,
  id,
  placeholder,
  register,
  error,
  mask,
  readOnly,
  value,
  as,
  onInput,
  errorMessage,
  cep,
  onClick,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.InputGroup $type={type}>
      {type === "checkbox" && (
        <Styled.CheckboxLabel>
          <Styled.CheckboxInput
            type="checkbox"
            onInput={onInput}
            mask={mask}
            as={as}
            $color={error && "danger"}
            readOnly={readOnly}
            id={id}
            placeholder={placeholder}
            {...register}
          />
          {label}
        </Styled.CheckboxLabel>
      )}

      {type !== "checkbox" && type !== "textarea" && (
        <>
          <Styled.Label $color={error && "danger"} htmlFor={id}>
            {label}
          </Styled.Label>
          <Styled.InputContainer>
            <Styled.Input
              onInput={onInput}
              mask={mask}
              as={as}
              $color={error && "danger"}
              defaultValue={value}
              type={showPassword ? "text" : type}
              readOnly={readOnly}
              id={id}
              placeholder={placeholder}
              {...register}
            />
            {type === "password" && (
              <Styled.Icon
                $color={error && "danger"}
                type="button"
                onClick={handleShowPassword}
              >
                {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Styled.Icon>
            )}
            {cep === true && (
              <Styled.Icon
                $color={error && "danger"}
                type="button"
                onClick={onClick}
              >
                <SearchOutlinedIcon />
              </Styled.Icon>
            )}
            {error && <Styled.ErrorSpan>{errorMessage}</Styled.ErrorSpan>}
          </Styled.InputContainer>
        </>
      )}

      {type === "textarea" && (
        <>
          <Styled.Label $color={error && "danger"} htmlFor={id}>
            {label}
          </Styled.Label>
          <Styled.TextArea
            $color={error && "danger"}
            readOnly={readOnly}
            id={id}
            placeholder={placeholder}
            {...register}
          />
          {error && <Styled.ErrorSpan>{errorMessage}</Styled.ErrorSpan>}
        </>
      )}
    </Styled.InputGroup>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.any,
  errorMessage: PropTypes.any,
  id: PropTypes.string,
  value: PropTypes.any,
  mask: PropTypes.any,
  readOnly: PropTypes.bool,
  as: PropTypes.any,
  onInput: PropTypes.func,
  cep: PropTypes.bool,
  onClick: PropTypes.func,
};
