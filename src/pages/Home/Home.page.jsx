import { useForm } from "react-hook-form";
import { TimerComponent } from "../../components/Timer/Timer.component";
import * as Style from "../Pages.styles";
import * as Styled from "./Home.styles";
import { InputComponent } from "../../components/Input/Input.component";
import { ButtonComponent } from "../../components/Button/Button.component";
import { useState } from "react";

export const HomePage = () => {
  const [num, setNum] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const numTimer = (data) => {
    setNum(data.number);
  };

  return (
    <Style.PageContainer>
      <Style.PageTittle>S.T.E-Timer</Style.PageTittle>
      {num == 0 ? (
        <Styled.FormTimer onSubmit={handleSubmit(numTimer)}>
          <InputComponent
            id="number"
            label="Digite um numero para iniciar o S.T.E-Timer"
            type="number"
            name="number"
            register={{
              ...register("number", {
                required: true,
                message: "Campo de numero é obrigatório",
              }),
            }}
            error={!!errors.number}
            errorMessage={errors.number?.message}
          />
          <ButtonComponent
            variant={"outlined"}
            type={"submit"}
            text={"Enter"}
            preset={"save"}
          />
        </Styled.FormTimer>
      ) : (
        <TimerComponent minutes={num} />
      )}
    </Style.PageContainer>
  );
};
