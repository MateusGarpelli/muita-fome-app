import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export const Input = ({ ...rest }: TextInputProps) => {
    return (
        <TextInput
            multiline
            textAlignVertical="top"
            placeholderTextColor={colors.slate[400]}
            style={{
                height: 32,
                backgroundColor: colors.slate[800],
                borderRadius: 6,
                paddingHorizontal: 16,
                paddingVertical: 12,
                fontFamily: "body",
                fontSize: 14,
                color: colors.white
            }}
            {...rest}
        />
    );
};
