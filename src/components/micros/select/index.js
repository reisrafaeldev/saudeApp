import { TextComponent } from "../text";
import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";

export const Select = ({ data, label, buttonLabel, marginT, onSelect, width }) => {
  return (
    <S.Container marginT={marginT} width={width}>
      <TextComponent color={"#28A745"} variant={"Title9"}>
        {label}
      </TextComponent>

      <S.Select
        defaultButtonText={buttonLabel}
        buttonStyle={{
          width: "100%",
          height: 40,
          backgroundColor: "#22C55e",
          borderRadius: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
        data={data}
        onSelect={onSelect}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        renderDropdownIcon={() => (
          <AntDesign
            name="caretdown"
            size={24}
            color="#000"
            style={{ marginLeft: 10, color: "#14532d" }}
          />
        )}
      />
    </S.Container>
  );
};
