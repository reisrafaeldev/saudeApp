import { useState } from "react";
import * as S from "./styles";

export const InputComponent = ({
  type,
  placeholder,
  onChangeText,
  value,
  label,
  showError,
}) => {
  const [show, setShow] = useState(false);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        showError={showError}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={
          type === "text" || type === "null" || show == true ? false : true
        }
        placeholder={placeholder}
      ></S.Input>
      {type === "text" ? (
        <S.Icon source={require("../../../assets/email.png")} />
      ) : type === "null" ? (
        <></>
      ) : (
        <S.Button onPress={() => (show ? setShow(false) : setShow(true))}>
          <S.Icon source={require("../../../assets/password.png")} />
        </S.Button>
      )}
    </S.Container>
  );
};

export default InputComponent;
