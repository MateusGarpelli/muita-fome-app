import { Text, View,Pressable, PressableProps } from "react-native"
import { clsx } from "clsx";

type CategoryProps = PressableProps  & { 
    title: string
    isSelected?: boolean
}

export const CategoryButton = ({ title, isSelected, ...rest }: CategoryProps) => {
    return (
      <Pressable
        style={{
          paddingHorizontal: 16,
          justifyContent: "center",
          borderRadius: 6,
          height: 40,
          backgroundColor: isSelected ? "#190242" : "#26364b",
          borderWidth: isSelected ? 2 : 0,
          borderColor: isSelected ? "#f2f2f2" : "transparent",
        }}
        {...rest}
      >
        <Text style={{ fontWeight: "500", fontSize: 14, color: "#cdcdcd" }}>{title}</Text>
      </Pressable>
    );
  };
  