import { useState } from "react";
import { TextComponent } from "../text";
import * as S from "./styles";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export const MenuMobile = ({ setMenuIsOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handelIsOpen = () => {
    setMenuIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      {isOpen ? (
        <S.Button onPress={() => handelIsOpen()}>
          <AntDesign name="close" size={34} color="white" />
        </S.Button>
      ) : (
        <S.Button onPress={() => handelIsOpen()}>
          <SimpleLineIcons name="menu" size={34} color="white" />
        </S.Button>
      )}
    </S.Container>
  );
};
