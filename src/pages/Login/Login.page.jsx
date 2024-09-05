import { useForm } from "react-hook-form";
import * as Style from "../Pages.styles";

import { InputComponent } from "../../components/Input/Input.component.jsx";
import { ButtonComponent } from "../../components/Button/Button.component.jsx";

import * as Styled from "./Login.styled.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth.context.jsx";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Style.PageContainer>
        <Styled.LoginForm onSubmit={handleSubmit(login)}>
          <Styled.FormColumn>
            <Styled.FormTitle>Login into S.T.E-Timer</Styled.FormTitle>
          </Styled.FormColumn>

          <Styled.FormColumn>
            <InputComponent
              id="email"
              name="email"
              label="Digite seu e-mail"
              type="email"
              register={{
                ...register("email", {
                  required: true,
                  validate: {
                    matchPath: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                  },
                }),
              }}
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />

            <InputComponent
              id="password"
              label="Digite sua senha"
              type="password"
              name="password"
              register={{
                ...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Campo precisa ter acima de 8 caracteres",
                  },
                }),
              }}
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />
          </Styled.FormColumn>
          <Styled.FormColumn>
            <Styled.ButtonWrapper>
              <ButtonComponent type={"submit"} text={"Login"} preset={"save"} />
            </Styled.ButtonWrapper>
          </Styled.FormColumn>
        </Styled.LoginForm>
      </Style.PageContainer>
    </>
  );
};
