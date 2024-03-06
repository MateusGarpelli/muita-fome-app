import { ActivityIndicator, View } from "react-native";

export const Loading = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1F2937",
            }}
        >
            <ActivityIndicator color="#FFFFFF" />
        </View>
    );
};
