import { LinkProps } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

type Props =  LinkProps<string> & {
    title: string;
};

export const LinkButton = ({ title,...rest  }: Props) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#6B7280",
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 20,
            }}
            {...rest}
        >
            <Text style={{ color: "#D1D5DB", fontSize: 16 }}>{title}</Text>
        </TouchableOpacity>
    );
};
